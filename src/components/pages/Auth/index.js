import React, { useState } from "react";
import {
  Container,
  Input,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import axios from "axios";
import generate from "../../../urlGenerator";
import "./index.scss";

const type = window.location.pathname.replace("/", "");

const FormButton = (data) => (
  <Button
    variant="contained"
    color="primary"
    style={{ marginTop: "15px" }}
    onClick={(e) => {
      e.preventDefault();
      handleClick(type, data);
    }}
  >
    Submit
  </Button>
);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input
          id="email"
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </FormControl>
      <br />
      <FormButton data={{ email, password }} />
    </div>
  );
};

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <Input
          id="firstName"
          type="text"
          onChange={({ target }) => setFirstName(target.value)}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <Input
          id="lastName"
          type="text"
          onChange={({ target }) => setLastName(target.value)}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input
          id="email"
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
        <Input
          id="confirmPassword"
          type="password"
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
      </FormControl>
      <br />
      <FormButton
        data={{ email, password, firstName, lastName, confirmPassword }}
      />
    </div>
  );
};

const formWrapper = {
  login: LoginForm,
  register: RegisterForm,
};

const registerUser = async ({ data }) => {
  try {
    const res = await axios.post(generate("auth", "/auth/register"), data);
    console.log(res.data);
  } catch (error) {
    console.error(error.response.data);
  }
};

const loginUser = async ({ data }) => {
  try {
    const res = await axios.post(generate("auth", "/auth/login"), data);
    console.log(res.data);
  } catch (error) {
    console.error(error.response.data);
  }
};

const calls = {
  login: loginUser,
  register: registerUser,
};

const handleClick = (type, data) => calls[type](data);

const GreeterFooter = () => {
  return (
    <p className="auth_form_greeter_footer">
      {type === "register"
        ? "Already got an account?"
        : "Are you new around here?"}{" "}
      <a
        className="auth_form_greeter_footer--link"
        href={type === "register" ? "/login" : "/register"}
      >
        Click here
      </a>{" "}
      to {type === "register" ? "log in" : "register"}!
    </p>
  );
};

export default function Auth() {
  document.title = `youa.dev - ${
    type[0].toUpperCase() + type.substring(1, type.length).toLowerCase()
  }`;
  return (
    <Container>
      <div className="auth hero">
        <div className="auth_form_wrapper">
          <div className="auth_form_greeter">
            <h1>{type}</h1>
            <GreeterFooter />
          </div>
          <form className="auth_form_inputs" noValidate autoComplete="off">
            {formWrapper[type]()}
          </form>
        </div>
      </div>
    </Container>
  );
}
