import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Tree } from "rsuite";

import Layout from "../components/layout";
import PostCard from "../components/PostCard";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   if (localStorage.getItem("jtoken") === null) {
  //     router.push("/login");
  //   }
  // })

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
      value: 1,
      children: [
        {
          label: "Electronics",
          value: 2,
        },
        {
          label: "Software engineering",
          value: 3,
          children: [
            {
              label: "Backend engineering",
              value: 36,
            },
            {
              label: "Devops engineering",
              value: 37,
            },
            {
              label: "frontend engineering",
              value: 38,
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
                <div className="section-title">
                  <h2>Recent articles</h2>
                </div>

                {[1, 2, 3, 4, 5].map((ell) => (
                  <PostCard />
                ))}
              </div>

              <div className="col-lg-3">
                <div className="section-title">
                  <h2>Posts categories</h2>
                </div>
                <Tree data={data} defaultExpandAll />
                {/* 
                <div className="trend-entry d-flex">
                  <div className="number align-self-start">01</div>
                  <div className="trend-contents">
                    <h2>
                      <a href="blog-single.html">
                        News Needs to Meet Its Audiences Where They Are
                      </a>
                    </h2>
                    <div className="post-meta">
                      <span className="d-block">
                        <a href="#">Dave Rogers</a> in <a href="#">News</a>
                      </span>
                      <span className="date-read">
                        Jun 14 <span className="mx-1">&bullet;</span> 3 min read
                        <span className="icon-star2"></span>
                      </span>
                    </div>
                  </div>
                </div> */}
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
