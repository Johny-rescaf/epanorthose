import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { Tree, Button, ButtonToolbar, ButtonGroup, Icon, Loader } from "rsuite";

import Layout from "../components/layout";
import PostCard from "../components/PostCard";
import { baseUrl } from "../constants/config";
import { fetchCategories } from "../services/categoryService";

export default function Home() {
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    await fetchPosts();
    setCategoriesLoaded(false);
    await fetchCategories().then((newCategories) => {
      setCategoriesLoaded(true);
      setCategories(newCategories);
    });
  }, []);

  return (
    <Layout className="container">
      <Head>
        <title>Epanorthose | Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div
                  className="section-title"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2>Articles récents</h2>
                  <ButtonToolbar>
                    <ButtonGroup>
                      <Link href="/editPost">
                        <Button color="blue">
                          <Icon icon="pencil" /> Rediger un post
                        </Button>
                      </Link>
                      <Link href="/admin/posts">
                        <Button color="violet">
                          <Icon icon="lock" /> Gérer les articles
                        </Button>
                      </Link>
                    </ButtonGroup>
                  </ButtonToolbar>
                </div>
                {postsLoaded ? (
                  posts.map((post) => <PostCard key={post.id} data={post} />)
                ) : (
                  <div
                    className=""
                    style={{ position: "relative", paddingTop: "15rem" }}
                  >
                    <Loader size="lg" content="Chargement..." vertical center />
                  </div>
                )}
              </div>
              <div className="col-lg-3">
                <div className="section-title mb-3">
                  <h2 className="">Catégories d'articles</h2>
                </div>
                {categoriesLoaded ? (
                  <Tree
                    data={categories}
                    style={{ maxHeight: "100%" }}
                    onSelect={(value) => fetchPosts(value)}
                    defaultExpandAll
                  />
                ) : (
                  <Loader size="md" content="Chargement..." />
                )}
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

  // Fetch active posts
  async function fetchPosts(category=false) {
    console.log(category.id);
    let url = baseUrl + "api/post?active=1";
    if (category) {
      url += "&categoryId=" + category.id;
    }
    setPostsLoaded(false);
    const res = await fetch(url);
    const results = await res.json();
    if (results.status == true) {
      setPostsLoaded(true);
      setPosts(results.posts);
    }
  }

}
