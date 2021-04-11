import React, { useState, useEffect } from "react";
// import jwt from 'jwt-decode';

import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, Button } from "rsuite";

import AuthLayout from "../components/AuthLayout";

export default function Login() {
  const [errorState, setErrorState] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("jtoken") !== null) {
      router.push("/");
    }
  });

  const loginUser = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/login", {
        body: JSON.stringify({
          email: event.target.email.value,
          password: event.target.password.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json();
      if (result.status == true) {
        const token = result.accessToken;
        // const user = jwt(token);
        localStorage.setItem("jtoken", token);
        router.push("/");
      } else {
        setErrorState(-1);
        setTimeout(() => {
          setErrorState(0);
        }, 5000);
      }
    } catch (error) {
      setErrorState(-1);
      setTimeout(() => {
        setErrorState(0);
      }, 5000);
    }
  };

  return (
    <AuthLayout>
      <Head>
        <title>Login</title>
      </Head>
      <main className=" pb-4">
        <h1 className="">Login</h1>
        <Form className="mt-3" fluid>
          <FormGroup>
            <ControlLabel className="mb-3">Email</ControlLabel>
            <FormControl name="email" type="email" />
          </FormGroup>
          <FormGroup>
            <ControlLabel className="mb-3">Password</ControlLabel>
            <FormControl name="password" type="password" />
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="primary">Submit</Button>
              <Link href="/signup">
                <a>Create an account ?</a>
              </Link>
            </ButtonToolbar>
          </FormGroup>
        </Form>

      </main>
    </AuthLayout>
  );
}
