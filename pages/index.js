import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Tree, Button, ButtonToolbar, Icon, Drawer, Form, FormGroup, FormControl, ControlLabel } from "rsuite";

import Layout from "../components/layout";
import PostCard from "../components/PostCard";
import { baseUrl } from "../constants/config";

export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [convertedText, setConvertedText] = useState("Some default content");
  const [posts, setPosts] = useState([]);

  const { quill, quillRef } = useQuill();

  useEffect(async () => {
    const res = await fetch(baseUrl + "api/post");
    const results = await res.json()
    if (results.status == true) {
      setPosts(results.posts);
    }
  }, [])

  let data = [
    {
      label: "Science",
      value: 1,
      children: [
        {
          label: "Chemistry",
          value: 2,
        },
        {
          label: "Physics",
          value: 3,
          children: [
            {
              label: "Nuclear mater",
              value: 36,
            },
            {
              label: "Numerical analysis",
              value: 37,
            },
            {
              label: "Molecular physics",
              value: 38,
            },
            {
              label: "Waves",
              value: 39,
            },
          ],
        },
      ],
    },
    {
      label: "Engineering",
      value: 6,
      children: [
        {
          label: "Electronics",
          value: 7,
        },
        {
          label: "Software engineering",
          value: 8,
          children: [
            {
              label: "Backend engineering",
              value: 9,
            },
            {
              label: "Devops engineering",
              value: 10,
            },
            {
              label: "frontend engineering",
              value: 12,
            },
          ],
        },
      ],
    },
  ];

  return (
    <Layout className="container">
      <Head>
        <title>Epanorthose</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2>Recent articles</h2>
                  <Link href="/editPost">
                    <Button color="blue" onClick={() => setShowDrawer(true)}>
                      <Icon icon="pencil" /> Rediger un post
                    </Button>
                  </Link>
                </div>
                {posts.map((post) => (
                  <PostCard key={post.id} data={post} />
                ))}
              </div>
              <div className="col-lg-3">
                <div className="section-title">
                  <h2>Posts categories</h2>
                </div>
                <Tree data={data} defaultExpandAll />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="custom-pagination list-unstyled">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">2</li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}