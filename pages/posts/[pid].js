import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head";
import Link from "next/link";

import { Tree, Drawer, Button, Icon, TagGroup, Tag } from "rsuite";

import Layout from "../../components/layout";
import { baseUrl } from "../../constants/config";

export default function Single() {
  let [showDrawer, setShowDrawer] = useState(false);
  let [post, setPost] = useState({});
  const router = useRouter()
  const { pid } = router.query

  useEffect(async () => {
    const res = await fetch(baseUrl + "api/post/" + pid);
    const results = await res.json()
    if (results.status == true) {
      setPost(results.post);
    }
  }, [])

  return (
    <Layout className="container">
      <Head>
        <title>Epanorthose</title>
      </Head>

      <main>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 single-content">
                <h1 className="mb-4">
                  {post.title}
                </h1>
                <div className="post-meta d-flex mb-5">
                  <div className="bio-pic mr-3">
                    <img
                      src="images/person_1.jpg"
                      alt="Image"
                      className="img-fluidid"
                    />
                  </div>
                  <div className="vcard">
                    <span className="d-block">
                      <a href="#">Johnson K</a> in{" "}
                      <a href="#">Software engineering</a>
                    </span>
                    <span className="date-read">
                      {/* Jun 14 <span className="mx-1">&bullet;</span> 3 min read */}
                      {/* <span className="icon-star2"></span> */}
                    </span>
                  </div>
                </div>
                <p>
                {post.content}
                </p>
                <div className="mt-3">
              <TagGroup>
                    {/* {post.tags.length > 0 && data.tags.split(",").map(postTag => <Tag color="cyan">{postTag}</Tag>)} */}
              </TagGroup>
            </div>
                <div className="pt-5">
                  <p>
                    Categories: <a href="#">Design</a>,<a href="#">Events</a>{" "}
                  </p>
                </div>
                <Button color="blue" 
                onClick={() => setShowDrawer(true)}
                style={{
                    position: "fixed",
                    top: '50%',
                    right: '-38px',
                    transform: 'rotate(-90deg)',
                    borderRadius: 0
                  }}>
                  <Icon icon="wechat"  /> Comments
                </Button>
                <Drawer
                  show={showDrawer}
                  onHide={() => setShowDrawer(false)}
                >
                  <Drawer.Header>
                    <Drawer.Title>6 Comments</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <div>
                      <div className="section-title">
                        <h2 className="mb-3">6 Comments</h2>
                      </div>
                      <ul className="comment-list">
                        <li className="comment">
                          <div className="vcard bio">
                            <img
                              src="images/person_1.jpg"
                              alt="Image placeholder"
                            />
                          </div>
                          <div className="comment-body">
                            <h3>Jean Doe</h3>
                            <div className="meta">January 9, 2018 at 2:21pm</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Pariatur quidem laborum
                              necessitatibus, ipsam impedit vitae autem, eum
                              officia, fugiat saepe enim sapiente iste iure!
                              Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <p>
                              <a href="#" className="reply">
                                Reply
                              </a>
                            </p>
                          </div>
                        </li>
                        <li className="comment">
                          <div className="vcard bio">
                            <img
                              src="images/person_1.jpg"
                              alt="Image placeholder"
                            />
                          </div>
                          <div className="comment-body">
                            <h3>Jean Doe</h3>
                            <div className="meta">January 9, 2018 at 2:21pm</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Pariatur quidem laborum
                              necessitatibus, ipsam impedit vitae autem, eum
                              officia, fugiat saepe enim sapiente iste iure!
                              Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <p>
                              <a href="#" className="reply">
                                Reply
                              </a>
                            </p>
                          </div>
                          <ul className="children">
                            <li className="comment">
                              <div className="vcard bio">
                                <img
                                  src="images/person_1.jpg"
                                  alt="Image placeholder"
                                />
                              </div>
                              <div className="comment-body">
                                <h3>Jean Doe</h3>
                                <div className="meta">
                                  January 9, 2018 at 2:21pm
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Pariatur quidem laborum
                                  necessitatibus, ipsam impedit vitae autem, eum
                                  officia, fugiat saepe enim sapiente iste iure!
                                  Quam voluptas earum impedit necessitatibus,
                                  nihil?
                                </p>
                                <p>
                                  <a href="#" className="reply">
                                    Reply
                                  </a>
                                </p>
                              </div>
                              <ul className="children">
                                <li className="comment">
                                  <div className="vcard bio">
                                    <img
                                      src="images/person_1.jpg"
                                      alt="Image placeholder"
                                    />
                                  </div>
                                  <div className="comment-body">
                                    <h3>Jean Doe</h3>
                                    <div className="meta">
                                      January 9, 2018 at 2:21pm
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Pariatur quidem laborum
                                      necessitatibus, ipsam impedit vitae autem,
                                      eum officia, fugiat saepe enim sapiente
                                      iste iure! Quam voluptas earum impedit
                                      necessitatibus, nihil?
                                    </p>
                                    <p>
                                      <a href="#" className="reply">
                                        Reply
                                      </a>
                                    </p>
                                  </div>
                                  <ul className="children">
                                    <li className="comment">
                                      <div className="vcard bio">
                                        <img
                                          src="images/person_1.jpg"
                                          alt="Image placeholder"
                                        />
                                      </div>
                                      <div className="comment-body">
                                        <h3>Jean Doe</h3>
                                        <div className="meta">
                                          January 9, 2018 at 2:21pm
                                        </div>
                                        <p>
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipisicing elit. Pariatur
                                          quidem laborum necessitatibus, ipsam
                                          impedit vitae autem, eum officia,
                                          fugiat saepe enim sapiente iste iure!
                                          Quam voluptas earum impedit
                                          necessitatibus, nihil?
                                        </p>
                                        <p>
                                          <a href="#" className="reply">
                                            Reply
                                          </a>
                                        </p>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="comment">
                          <div className="vcard bio">
                            <img
                              src="images/person_1.jpg"
                              alt="Image placeholder"
                            />
                          </div>
                          <div className="comment-body">
                            <h3>Jean Doe</h3>
                            <div className="meta">January 9, 2018 at 2:21pm</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Pariatur quidem laborum
                              necessitatibus, ipsam impedit vitae autem, eum
                              officia, fugiat saepe enim sapiente iste iure!
                              Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <p>
                              <a href="#" className="reply">
                                Reply
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>

                      <div className="comment-form-wrap pt-5">
                        <div className="section-title">
                          <h2 className="mb-5">Leave a comment</h2>
                        </div>
                        <form action="#" className="p-5 bg-light">
                          <div className="form-group">
                            <label for="name">Name *</label>
                            <input type="text" className="form-control" id="name" />
                          </div>
                          <div className="form-group">
                            <label for="email">Email *</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                            />
                          </div>
                          <div className="form-group">
                            <label for="website">Website</label>
                            <input
                              type="url"
                              className="form-control"
                              id="website"
                            />
                          </div>
                          <div className="form-group">
                            <label for="message">Message</label>
                            <textarea
                              name=""
                              id="message"
                              cols="30"
                              rows="10"
                              className="form-control"
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Post Comment"
                              className="btn btn-primary py-3"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </Drawer.Body>
                  <Drawer.Footer>
                    {/* <Button appearance="primary">Confirm</Button> */}
                    {/* <Button
                      onClick={() => setShowDrawer(false)}
                      color="red"
                    >
                      Close
                    </Button> */}
                  </Drawer.Footer>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
