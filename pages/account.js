import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { Button, ButtonToolbar, Icon, Drawer, Form, FormGroup, FormControl, ControlLabel, Input, TagPicker, Nav, Avatar } from "rsuite";

import Layout from "../components/layout";

export default function EditPost() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [convertedText, setConvertedText] = useState("Some default content");

  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        const text = quill.root.innerHTML;
        console.log(text);
      });
    }
  }, [quill]);


  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/signup", {
        body: JSON.stringify({
          firstname: event.target.firstname.value,
          lastname: event.target.lastname.value,
          email: event.target.email.value,
          password: event.target.password.value,
          plan: event.target.plan.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json();
      if (result.status == true) {
        setSignupState(1);
        setTimeout(() => {
          setSignupState(0);
          router.push("/login");
        }, 5000);
      } else {
        setSignupState(-1);
        setTimeout(() => {
          setSignupState(0);
        }, 5000);
      }
    } catch (err) {
      setSignupState(-1);
      setTimeout(() => {
        setSignupState(0);
      }, 5000);
    }
  };

  return (
    <Layout className="container">
      <Head>
        <title>Edit / add post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="site-section">
          <div className="container">
            <div className="row">
            <div className="col-lg-3">
                <Nav appearance="tabs" active={true} vertical >
                  <Nav.Item eventKey="Profile" icon={<Icon icon="user" />}>
                    Profile
                  </Nav.Item>
                  <Nav.Item eventKey="solutions" icon={<Icon icon="book" />}>Mes articles</Nav.Item>
                </Nav>
            </div>
              <div className="col-lg-9">
                <div className="">
                  <h3>Profile</h3>
                  <Form className="mt-3" onSubmit={registerUser} fluid>
                  <Avatar style={{marginBottom: '.9rem', width: '100px', height: '100px'}} circle>JK</Avatar>
                    <FormGroup>
                      <ControlLabel className="mb-3">First name *</ControlLabel>
                      <FormControl name="firstname" type="text" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="mb-3">Last name *</ControlLabel>
                      <FormControl name="lastname" type="text" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="mb-3">Email *</ControlLabel>
                      <FormControl name="email" type="email" />
                    </FormGroup>
                    {/* <div className="row">
                      <div className="col-md-6">
                        <div className="form-check-inline">
                          <input type="radio" className="form-check-input" name="plan" id="plan2" value="2" />
                          <label className="form-check-label" htmlFor="plan2">
                            <strong>Premium (19$/m)</strong>
                            <p>
                              <ul>
                                <li>30 articles</li>
                                <li>Post articles</li>
                              </ul>
                            </p>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-check-inline">
                          <input type="radio" className="form-check-input" name="plan" id="plan1" checked value="1" />
                          <label className="form-check-label" htmlFor="plan1">
                            <strong>Basic (10$/m)</strong>
                            <p>
                              <ul>
                                <li>10 articles</li>
                                <li>
                                  <i className="text-danger">X</i> Post articles
                                </li>
                              </ul>
                            </p>
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <FormGroup>
                      <ControlLabel className="mb-3">Old Password *</ControlLabel>
                      <FormControl name="password" type="password" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="mb-3">New Password *</ControlLabel>
                      <FormControl name="password" type="password" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="mb-3">Confirm New password *</ControlLabel>
                      <FormControl name="cpassword" type="password" />
                    </FormGroup>
                    <FormGroup>
                      <ButtonToolbar>
                        <Button appearance="primary"><Icon icon="save" /> Save changes</Button>
                      </ButtonToolbar>
                    </FormGroup>
                  </Form>
                </div>



              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
