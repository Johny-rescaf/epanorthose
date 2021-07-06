import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { Form, FormGroup, FormControl, ControlLabel, ErrorMessage, ButtonToolbar, Button, DatePicker, SelectPicker, Alert } from "rsuite";

import AuthLayout from "../components/AuthLayout";
import { baseUrl } from "../constants/config";

const sexData = [
  {
    "label": "Male",
    "value": "1",
    "role": "Master"
  },
  {
    "label": "Female ",
    "value": "2",
    "role": "Master"
  }
]

export default function SignUp() {
  const [loadingState, setLoadingState] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [sex, setSex] = useState("");
  const [plan, setPlan] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error states
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [sexError, setSexError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("jtoken") !== null) {
      router.push("/");
    }
  });

  const registerUser = async () => {
    try {
      setLoadingState(true);
      const res = await fetch(baseUrl + "api/signup", {
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          birthDate,
          sex,
          plan,
          password,
          confirmPassword
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json();
      setLoadingState(false);
      if (result.status == true) {
        Alert.success("Votre compte a été créé avec succès !", 4500)
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else {
        if (result.code == "ACCOUNT_NOT_CREATED") {
          Alert.error("Votre compte n'a pas pu être créé !", 4500)
        } else if (result.code == "EMAIL_EXISTS") {
          Alert.warning("cette email existe déjà", 4500)
        } else if (result.code == "INVALID_FORM") {
          Alert.warning("Le formulaire soumis est invalide !", 4500)
        } else {
          Alert.error("Une erreur s'est produite !", 4500)
        }
      }
    } catch (err) {
      setLoadingState(false);
      Alert.error("Une erreur s'est produite !", 4500)
    }
  };

  return (
    <AuthLayout>
      <Head>
        <title>Inscription</title>
      </Head>
      <main className="pb-4">
        <h1>Inscription</h1>
        <Form className="mt-3" fluid>
          <FormGroup className="mb-3">
            <ControlLabel className="mb-3">First name *</ControlLabel>
            <FormControl
              errorMessage={firstnameError}
              placement="bottomStart"
              name="firstname"
              value={firstname}
              onChange={(value) => setFirstname(value)}
              type="text" />
          </FormGroup>
          <FormGroup className="mb-3">
            <ControlLabel className="mb-3">Last name *</ControlLabel>
            <FormControl
              errorMessage={lastnameError}
              placement="bottomStart"
              name="lastname"
              onChange={(value) => setLastname(value)}
              value={lastname}
              type="text" />
          </FormGroup>
          <FormGroup className="mb-3">
            <ControlLabel className="mb-3">Email *</ControlLabel>
            <FormControl
              errorMessage={emailError}
              placement="bottomStart"
              name="email"
              onChange={(value) => setEmail(value)}
              value={email}
              type="email" />
          </FormGroup>
          <FormGroup className="mb-3">
            <ControlLabel className="mb-3">Birth date *</ControlLabel>
            <DatePicker 
              onChange={(value) => setBirthDate(value)}
              oneTap 
              block />
            <ErrorMessage 
              show={birthDateError ? true : false} 
              placement="bottomStart" 
              className="text-danger">
              {birthDateError}
            </ErrorMessage>
          </FormGroup>
          <FormGroup className="mb-3">
            <ControlLabel className="mb-3">Gender *</ControlLabel>
            <SelectPicker
              data={sexData}
              onChange={(value) => setSex(value)}
              value={sex}
              block />
            <ErrorMessage show={sexError ? true : false} placement="bottomStart" className="text-danger">
              The gender field is required
            </ErrorMessage>
          </FormGroup>
          <div className="row mb-5 mt-5">
            <div className="col-md-6">
              <div className="signup-plan-block form-check-inline shadow p-4 rounded">
                <input
                  type="radio"
                  className="form-check-input"
                  name="plan"
                  id="plan1"
                  value="1"
                  onChange={() => setPlan(1)}
                  checked={plan == 1 ? true : false} />
                <label className="form-check-label" htmlFor="plan1">
                  <strong>Premium (19$/m)</strong>
                  <ul>
                    <li>30 articles</li>
                    <li>Post articles</li>
                  </ul>
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="signup-plan-block form-check-inline shadow p-4 rounded">
                <input
                  type="radio"
                  className="form-check-input"
                  name="plan"
                  id="plan2"
                  value="2"
                  onChange={() => setPlan(2)}
                  checked={plan == 2 ? true : false} />
                <label className="form-check-label" htmlFor="plan2">
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
          <FormGroup className="mb-3">
            <ControlLabel className="mb-3">Password *</ControlLabel>
            <FormControl
              errorMessage={passwordError}
              placement="bottomStart"
              name="password"
              onChange={(value) => setPassword(value)}
              value={password}
              type="password" />
          </FormGroup>
          <FormGroup className="mb-5">
            <ControlLabel className="mb-3">Confirm password *</ControlLabel>
            <FormControl
              errorMessage={confirmPasswordError}
              placement="bottomStart"
              name="cpassword"
              onChange={(value) => setConfirmPassword(value)}
              value={confirmPassword}
              type="password" />
          </FormGroup>
          <FormGroup className="mt-3">
            <ButtonToolbar>
              <Button appearance="primary" onClick={registerUser} loading={loadingState}>Submit</Button>
              <Link href="/login">
                <a>Have an account ?</a>
              </Link>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </main>
    </AuthLayout>
  );
}
