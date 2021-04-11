import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, Button } from "rsuite";

import AuthLayout from "../components/AuthLayout";

export default function SignUp() {
  const [signupState, setSignupState] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("jtoken") !== null) {
      router.push("/");
    }
  });

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
    <AuthLayout>
      <Head>
        <title>Registration</title>
      </Head>
      <main className="pb-4">
        <h1>Register</h1>
        <Form className="mt-3" onSubmit={registerUser} fluid>
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
          <div className="row">
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
          </div>
          <FormGroup>
            <ControlLabel className="mb-3">Password *</ControlLabel>
            <FormControl name="password" type="password" />
          </FormGroup>
          <FormGroup>
            <ControlLabel className="mb-3">Confirm password *</ControlLabel>
            <FormControl name="cpassword" type="password" />
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="primary">Submit</Button>
              <Link href="/login">
                <a>Have an account ?</a>
              </Link>
            </ButtonToolbar>
          </FormGroup>
        </Form>
{/*         
        <form onSubmit={registerUser}>
          <span className="input input--hoshi">
            <input
              className="input__field input__field--hoshi"
              type="text"
              id="firstname"
              name="firstname"
            />
            <label
              className="input__label input__label--hoshi input__label--hoshi-color-3"
              htmlFor="firstname"
            >
              <span className="input__label-content input__label-content--hoshi">
                First name
              </span>
            </label>
          </span>
          <span className="input input--hoshi">
            <input
              className="input__field input__field--hoshi"
              type="text"
              id="lastname"
              name="lastname"
            />
            <label
              className="input__label input__label--hoshi input__label--hoshi-color-3"
              htmlFor="lastname"
            >
              <span className="input__label-content input__label-content--hoshi">
                Last name
              </span>
            </label>
          </span>
          <span className="input input--hoshi">
            <input
              className="input__field input__field--hoshi"
              type="text"
              id="email"
              name="email"
            />
            <label
              className="input__label input__label--hoshi input__label--hoshi-color-3"
              htmlFor="email"
            >
              <span className="input__label-content input__label-content--hoshi">
                E-mail
              </span>
            </label>
          </span>
          <div className="plan-container">
            <div className="form-check-inline plan-select">
              <input
                type="radio"
                className="form-check-input"
                name="plan"
                id="plan1"
                checked
                value="1"
              />
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
            <div className="form-check-inline plan-select">
              <input
                type="radio"
                className="form-check-input"
                name="plan"
                id="plan2"
                value="2"
              />
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

          <span className="input input--hoshi">
            <input
              className="input__field input__field--hoshi"
              type="password"
              id="password"
              name="password"
            />
            <label
              className="input__label input__label--hoshi input__label--hoshi-color-3"
              htmlFor="password"
            >
              <span className="input__label-content input__label-content--hoshi">
                Password
              </span>
            </label>
          </span>
          <span className="input input--hoshi">
            <input
              className="input__field input__field--hoshi"
              type="password"
              id="password1"
              name="password1"
            />
            <label
              className="input__label input__label--hoshi input__label--hoshi-color-3"
              htmlFor="password1"
            >
              <span className="input__label-content input__label-content--hoshi">
                Repeat Passowrd
              </span>
            </label>
          </span>
          {signupState == 1 ? (
            <div class="alert alert-success alert-dismissible">
              <button type="button" class="close" data-dismiss="alert">
                &times;
              </button>
              <strong>Success!</strong> Your account has been created
              successfully.
            </div>
          ) : (
            ""
          )}
          {signupState == -1 ? (
            <div class="alert alert-danger alert-dismissible">
              <button type="button" class="close" data-dismiss="alert">
                &times;
              </button>
              <strong>Sorry!</strong> Your account could been created.
            </div>
          ) : (
            ""
          )}
          <div className="cta">
            <button type="submit" className="btn btn-primary pull-left">
              Sign-Up Now
            </button>
            <span>
              <Link href="/login">
                <a>Already a member ?</a>
              </Link>
            </span>
          </div>
        </form> */}
      </main>
    </AuthLayout>
  );
}
