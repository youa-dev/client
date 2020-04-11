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

const { pathname } = window.location;

const FormButton = (data) => (
  <Button
    variant="contained"
    color="primary"
    style={{ marginTop: "15px" }}
    onClick={(e) => {
      e.preventDefault();
      handleClick(pathname.replace("/", ""), data);
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

export default function Auth({ type }) {
  return (
    <Container>
      <div className="auth hero">
        <div className="auth_form_wrapper">
          <div className="auth_form_greeter">
            <h1>{type}</h1>
            <p>Welcome to youa.dev</p>
          </div>
          <form className="auth_form_inputs" noValidate autoComplete="off">
            {formWrapper[type]()}
          </form>
        </div>
      </div>
    </Container>
  );
}
