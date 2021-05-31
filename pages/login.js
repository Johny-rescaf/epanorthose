import React, { useState, useEffect } from "react";
import jwt from 'jwt-decode';

import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, Button, Alert } from "rsuite";

import AuthLayout from "../components/AuthLayout";
import { baseUrl } from "../constants/config";

export default function Login() {
  const [loadingState, setLoadingState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // useEffect(async () => {
    
  // });
 
  if (typeof window !== 'undefined') {
    if (localStorage.getItem("jtoken") !== null) {
      router.push("/");
    }
  }
  
  const loginUser = async () => {
    try {
      setLoadingState(true);
      const res = await fetch(baseUrl + "api/login", {
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json();
      setLoadingState(false);
      if (result.status == true) {
        const jtoken = result.accessToken;
        // const jtoken = jwt(token);
        localStorage.setItem("jtoken", JSON.stringify(jtoken));
        router.push("/");
      } else {
        Alert.error("Sorry, Incorrect Login credentials !", 4500)
      }
    } catch (error) {
      setLoadingState(false);
      Alert.error("Sorry, An error occured !", 4500)
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
            <FormControl name="email" type="email" onChange={value => setEmail(value)} />
          </FormGroup>
          <FormGroup>
            <ControlLabel className="mb-3">Password</ControlLabel>
            <FormControl name="password" type="password" onChange={value => setPassword(value)} />
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="primary" onClick={loginUser} loading={loadingState}>Submit</Button>
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
