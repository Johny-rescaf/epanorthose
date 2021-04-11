import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { Tree, Drawer, Button, Icon } from "rsuite";

import Layout from "../components/layout";

export default function Single() {
  let [showDrawer, setShowDrawer] = useState(false);
  return (
    <Layout className="container">
      <Head>
        <title>Epanorthose</title>
      </Head>

      <main>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div class="col-lg-9 single-content">
                <h1 class="mb-4">
                  News Needs to Meet Its Audiences Where They Are
                </h1>
                <div class="post-meta d-flex mb-5">
                  <div class="bio-pic mr-3">
                    <img
                      src="images/person_1.jpg"
                      alt="Image"
                      class="img-fluidid"
                    />
                  </div>
                  <div class="vcard">
                    <span class="d-block">
                      <a href="#">Johnson K</a> in{" "}
                      <a href="#">Software engineering</a>
                    </span>
                    <span class="date-read">
                      Jun 14 <span class="mx-1">&bullet;</span> 3 min read
                      <span class="icon-star2"></span>
                    </span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit officia neque beatae at inventore excepturi numquam
                  sint commodi alias, quam consequuntur corporis ex, distinctio
                  eaque sapiente pariatur iure ad necessitatibus in quod
                  obcaecati natus consequatur. Sed dicta maiores, eos culpa.
                </p>
                <p>
                  Voluptatum animi, voluptate sint aperiam facere a nam, ex
                  reiciendis eum nemo ipsum nobis, rem illum cupiditate at
                  quaerat amet qui recusandae hic, atque laboriosam
                  perspiciatis? Esse quidem minima, voluptas necessitatibus,
                  officia culpa quo nulla, cupiditate iste vel unde magni.
                </p>
                <p>
                  Nulla nesciunt eligendi ratione, atque, hic, ullam suscipit
                  quos enim vitae fugiat ducimus, dolore delectus iste id culpa.
                  Ducimus, iste magnam sed reprehenderit architecto perferendis
                  odio voluptas molestiae quidem ab numquam debitis, dolorem
                  incidunt, tempore a quod qui nobis. Voluptates!
                </p>
                <p>
                  Blanditiis, ipsum sed odio reprehenderit sequi ut vitae, dolor
                  minima ab! Architecto nesciunt nemo sint est aspernatur fugit
                  consequatur, magnam suscipit asperiores illo eum repellendus
                  officia dolorem, molestiae commodi nam voluptatem quis quia
                  vel cumque quos, aliquam ex incidunt sapiente!
                </p>
                <p>
                  Suscipit, officiis, vero! Perferendis accusamus quos
                  voluptatum culpa, provident maiores! Illo itaque ullam fugit
                  molestiae, eaque accusamus impedit autem numquam. Placeat
                  molestias tempore eaque ipsam vel voluptatum velit enim quam
                  iusto maxime delectus, sint sapiente ea, quo excepturi nisi!
                  Quia.
                </p>
                <p>
                  Dolores debitis excepturi maxime earum sapiente totam, quos
                  dolore inventore tempore illum. Dolores explicabo sed amet aut
                  atque, facere aliquid repudiandae quod possimus quo hic
                  similique et voluptates fugit iure dolore quam ipsa numquam
                  assumenda corporis? Dignissimos expedita fugit sapiente.
                </p>
                <p>
                  Cupiditate ut, aspernatur labore obcaecati, eveniet aut velit
                  nulla facere suscipit est recusandae vel error itaque earum
                  doloremque hic necessitatibus dignissimos dolores libero
                  laudantium ducimus! Rem dolorem ratione officia et, fugit non,
                  fuga suscipit eos veritatis enim perspiciatis, magni sit!
                </p>
                <div class="pt-5">
                  <p>
                    Categories: <a href="#">Design</a>,<a href="#">Events</a>{" "}
                    Tags: <a href="#">#html</a>,<a href="#">#trends</a>
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
                      <div class="section-title">
                        <h2 class="mb-3">6 Comments</h2>
                      </div>
                      <ul class="comment-list">
                        <li class="comment">
                          <div class="vcard bio">
                            <img
                              src="images/person_1.jpg"
                              alt="Image placeholder"
                            />
                          </div>
                          <div class="comment-body">
                            <h3>Jean Doe</h3>
                            <div class="meta">January 9, 2018 at 2:21pm</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Pariatur quidem laborum
                              necessitatibus, ipsam impedit vitae autem, eum
                              officia, fugiat saepe enim sapiente iste iure!
                              Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <p>
                              <a href="#" class="reply">
                                Reply
                              </a>
                            </p>
                          </div>
                        </li>
                        <li class="comment">
                          <div class="vcard bio">
                            <img
                              src="images/person_1.jpg"
                              alt="Image placeholder"
                            />
                          </div>
                          <div class="comment-body">
                            <h3>Jean Doe</h3>
                            <div class="meta">January 9, 2018 at 2:21pm</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Pariatur quidem laborum
                              necessitatibus, ipsam impedit vitae autem, eum
                              officia, fugiat saepe enim sapiente iste iure!
                              Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <p>
                              <a href="#" class="reply">
                                Reply
                              </a>
                            </p>
                          </div>
                          <ul class="children">
                            <li class="comment">
                              <div class="vcard bio">
                                <img
                                  src="images/person_1.jpg"
                                  alt="Image placeholder"
                                />
                              </div>
                              <div class="comment-body">
                                <h3>Jean Doe</h3>
                                <div class="meta">
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
                                  <a href="#" class="reply">
                                    Reply
                                  </a>
                                </p>
                              </div>
                              <ul class="children">
                                <li class="comment">
                                  <div class="vcard bio">
                                    <img
                                      src="images/person_1.jpg"
                                      alt="Image placeholder"
                                    />
                                  </div>
                                  <div class="comment-body">
                                    <h3>Jean Doe</h3>
                                    <div class="meta">
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
                                      <a href="#" class="reply">
                                        Reply
                                      </a>
                                    </p>
                                  </div>
                                  <ul class="children">
                                    <li class="comment">
                                      <div class="vcard bio">
                                        <img
                                          src="images/person_1.jpg"
                                          alt="Image placeholder"
                                        />
                                      </div>
                                      <div class="comment-body">
                                        <h3>Jean Doe</h3>
                                        <div class="meta">
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
                                          <a href="#" class="reply">
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
                        <li class="comment">
                          <div class="vcard bio">
                            <img
                              src="images/person_1.jpg"
                              alt="Image placeholder"
                            />
                          </div>
                          <div class="comment-body">
                            <h3>Jean Doe</h3>
                            <div class="meta">January 9, 2018 at 2:21pm</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Pariatur quidem laborum
                              necessitatibus, ipsam impedit vitae autem, eum
                              officia, fugiat saepe enim sapiente iste iure!
                              Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <p>
                              <a href="#" class="reply">
                                Reply
                              </a>
                            </p>
                          </div>
                        </li>
                      </ul>

                      <div class="comment-form-wrap pt-5">
                        <div class="section-title">
                          <h2 class="mb-5">Leave a comment</h2>
                        </div>
                        <form action="#" class="p-5 bg-light">
                          <div class="form-group">
                            <label for="name">Name *</label>
                            <input type="text" class="form-control" id="name" />
                          </div>
                          <div class="form-group">
                            <label for="email">Email *</label>
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                            />
                          </div>
                          <div class="form-group">
                            <label for="website">Website</label>
                            <input
                              type="url"
                              class="form-control"
                              id="website"
                            />
                          </div>
                          <div class="form-group">
                            <label for="message">Message</label>
                            <textarea
                              name=""
                              id="message"
                              cols="30"
                              rows="10"
                              class="form-control"
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Post Comment"
                              class="btn btn-primary py-3"
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

              <div className="col-lg-3">
                <div className="section-title">
                  <h2>Posts categories</h2>
                </div>
                {/* <Tree data={data} defaultExpandAll /> */}
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
