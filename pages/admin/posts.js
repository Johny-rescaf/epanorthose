import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import {
  Button,
  Icon,
  Drawer,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  SelectPicker,
  Alert,
  Badge,
  Checkbox,
  ButtonToolbar,
  ButtonGroup,
} from "rsuite";

import Layout from "../../components/layout";
import { baseUrl } from "../../constants/config";

let typeData = [
  {
    label: "Image",
    value: "IMAGE",
    role: "Master",
  },
  {
    label: "Tag",
    value: "TAG",
    role: "Master",
  },
];

let favoritedData = [
  {
    label: "YES",
    value: 1,
    role: "Master",
  },
  {
    label: "NO",
    value: 0,
    role: "Master",
  },
];

export default function AdminPosts() {
  const [loadingState, setLoadingState] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const [posts, setPosts] = useState([]);
  const [resourceId, setResourceId] = useState();
  const [favorited, setFavorited] = useState(0);

  const router = useRouter();

  useEffect(async () => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("jtoken") == null) {
        router.push("/login");
      } else {
        setIsLogin(true);
      }
    }

    var jtoken = JSON.parse(localStorage.getItem("jtoken"));
    const res = await fetch(baseUrl + "api/post", {
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${jtoken}`,
      },
    });
    const results = await res.json();
    if (results.status == true) {
      setPosts(results.posts);
    }
  }, []);

  return (
    <Layout className="container" style={{ display: isLogin ? '' : 'none' }}>
      <Head>
        <title>Gestion des postes</title>
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
                  <h2>Gestion des postes</h2>
                  <Link href="/posts">
                    <Button color="blue">
                      <Icon icon="eye" /> Vue clients
                    </Button>
                  </Link>
                </div>
                <table className="table table-bordered shadow">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Active</th>
                      <th scope="col">Titre</th>
                      <th scope="col">Summary</th>
                      <th scope="col">Copyright</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr>
                        <th scope="row">
                          <Checkbox
                            onChange={(value, isChecked) =>
                              editPost(isChecked, post.id)
                            }
                            checked={post.active ? true : false}
                          ></Checkbox>
                        </th>
                        <td>
                          <Link href={"/posts/" + post.id}>
                            <a>{post.title}</a>
                          </Link>
                        </td>
                        <td>{post.summary}</td>
                        <td>{post.copyright}</td>
                        <td className="d-flex justify-content-center">
                          <Button
                            color="red"
                            style={{ }}
                            onClick={() => deletePost(post.id)}
                          >
                            <Icon icon="trash" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );

  // Activates or deactivate a post
  async function editPost(checked, postId) {
    try {
      var jtoken = JSON.parse(localStorage.getItem("jtoken"));
      const res = await fetch(baseUrl + "api/post/" + postId, {
        body: JSON.stringify({ active: checked }),
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${jtoken}`,
        },
        method: "PUT",
      });
      const result = await res.json();
      if (result.status == true) {
        let updatedPosts = posts.map((post) => {
          if (post.id == postId) {
            post.active = checked;
          }
          return post;
        });
        setPosts(updatedPosts);
        Alert.success("Operation terminer avec success", 600);
      } else {
        Alert.error("Désolé, une erreur s'est produite !", 4500);
      }
    } catch (err) {
      Alert.error("Désolé, une erreur s'est produite ! !", 4500);
    }
  }

  // Delete a post
  async function deletePost(pId) {
    try {
      var jtoken = JSON.parse(localStorage.getItem("jtoken"));
      const res = await fetch(baseUrl + "api/post/" + pId, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${jtoken}`,
        },
        method: "DELETE",
      });
      const results = await res.json();
      if (results.status == true) {
        Alert.success("Article supprimé avec succès !", 2000);
        var newPosts = posts.filter((post) => {
          return post.id != pId;
        });
        setPosts(newPosts);
      }
    } catch (error) {
      Alert.error("Désolé, une erreur s'est produite !", 4500);
    }
  }
}
