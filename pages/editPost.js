import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import {
  Button,
  ButtonToolbar,
  Icon,
  Drawer,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Input,
  TagPicker,
  SelectPicker,
  Alert,
  TreePicker,
} from "rsuite";

import Layout from "../components/layout";
import { baseUrl } from "../constants/config";
import { fetchCategories } from "../services/categoryService";

let copyRightsData = [
  {
    label: "License1",
    value: "License1",
    role: "Master",
  },
  {
    label: "License2 ",
    value: "License2",
    role: "Master",
  },
  {
    label: "License3",
    value: "License3",
    role: "Master",
  },
  {
    label: "License4",
    value: "License4",
    role: "Master",
  },
  {
    label: "License5",
    value: "License5",
    role: "Master",
  },
];

export default function EditPost() {
  const [loadingState, setLoadingState] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState();
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [summary, setSummary] = useState("");
  const [sources, setSources] = useState("");
  const [copyRight, setCopyRight] = useState(null);

  const { quill, quillRef } = useQuill();
  const router = useRouter();

  useEffect(async () => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("jtoken") == null) {
        router.push("/login");
      } else {
        setIsLogin(true);
      }
    }

    if (quill) {
      quill.on("text-change", () => {
        const text = quill.root.innerHTML;
        setContent(text);
      });
    }

    await fetchCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, [quill]);

  return (
    <Layout className="container" style={{ display: isLogin ? "" : "none" }}>
      <Head>
        <title>Add post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-md-1">
                <div
                  className="section-title"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2>Add article</h2>
                  <ButtonToolbar>
                    <Button
                      appearance="primary"
                      loading={loadingState}
                      onClick={() => saveData()}
                    >
                      <Icon icon="save" /> Save changes
                    </Button>
                  </ButtonToolbar>
                </div>

                <Form className="my-3" fluid>
                  <FormGroup>
                    <ControlLabel className="mb-3">
                      Le titre de l'article
                    </ControlLabel>
                    <FormControl
                      name="text"
                      type="text"
                      placeHolder="Your article title here..."
                      style={{ height: "45px" }}
                      value={title}
                      onChange={(value) => setTitle(value)}
                    />
                  </FormGroup>

                  <div className="mb-3">
                    <ControlLabel className="mb-3">
                      Cat??gorie d'articles
                    </ControlLabel>
                    <TreePicker
                      defaultExpandAll
                      data={categories}
                      onChange={(value) => setCategory(value)}
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div className="mb-3">
                    <ControlLabel className="mb-3">
                      Tags d'articles
                    </ControlLabel>
                    <TagPicker
                      onChange={(value) => setTags(value)}
                      creatable
                      style={{ width: "100%" }}
                      menuStyle={{ width: 300 }}
                    />
                  </div>

                  <FormGroup>
                    <ControlLabel className="mb-3">
                      Article summary
                    </ControlLabel>
                    <Input
                      componentClass="textarea"
                      rows={3}
                      placeholder="Your article summery here..."
                      maxLength="255"
                      value={summary}
                      onChange={(value) => setSummary(value)}
                    />
                  </FormGroup>
                </Form>

                <ControlLabel className="mb-3">Article Content</ControlLabel>
                <div style={{ width: "100%", height: 400 }} className="mb-3">
                  <div ref={quillRef} />
                </div>

                <ControlLabel className="mt-5">
                  Sources &amp; bibliographie
                </ControlLabel>
                <Input
                  componentClass="textarea"
                  rows={3}
                  placeholder="Your article sources here..."
                  value={sources}
                  onChange={(value) => setSources(value)}
                />

                <ControlLabel className="my-3">Article Copyright</ControlLabel>
                <div>
                  <SelectPicker
                    data={copyRightsData}
                    onChange={(value) => setCopyRight(value)}
                    block
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );

  async function saveData() {
    console.log(title);
    console.log(category);
    console.log(content);
    console.log(summary);
    console.log(sources);
    console.log(tags);
    console.log(copyRight);

    try {
      setLoadingState(true);
      var jtoken = JSON.parse(localStorage.getItem("jtoken"));
      const res = await fetch(baseUrl + "api/post", {
        body: JSON.stringify({
          title,
          categoryId: category,
          content,
          summary,
          sources,
          tags,
          copyRight,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${jtoken}`,
        },
        method: "POST",
      });

      const result = await res.json();
      setLoadingState(false);
      if (result.status == true) {
        Alert.success(
          "Article cr???? avec succ??s et en attente de v??rification !",
          4500
        );
        setTimeout(() => {
          router.push("/posts");
        }, 2000);
      } else {
        if (result.code == "ARTICLE_NOT_CREATED") {
          Alert.error("  !", 4500);
        } else if (result.code == "INVALID_FORM") {
          Alert.warning("Le formulaire soumis est invalide !", 4500);
        } else {
          Alert.error("Une erreur s'est produite !", 4500);
        }
      }
    } catch (err) {
      setLoadingState(false);
      Alert.error("Une erreur s'est produite !", 4500);
    }
  }
}
