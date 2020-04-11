import React from "react";
import {
  Container,
  Input,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import "./index.scss";

const LoginForm = () => (
  <div>
    <FormControl>
      <InputLabel htmlFor="email">Email address</InputLabel>
      <Input id="email" />
    </FormControl>
    <br />
    <FormControl>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input id="password" type="password" />
    </FormControl>
  </div>
);

const RegisterForm = () => (
  <div>
    <FormControl>
      <InputLabel htmlFor="firstName">First Name</InputLabel>
      <Input id="firstName" type="text" />
    </FormControl>
    <br />
    <FormControl>
      <InputLabel htmlFor="lastName">Last Name</InputLabel>
      <Input id="lastName" type="text" />
    </FormControl>
    <br />
    <LoginForm />
    <FormControl>
      <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
      <Input id="confirmPassword" type="password" />
    </FormControl>
  </div>
);

const formWrapper = {
  login: LoginForm,
  register: RegisterForm,
};

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
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "15px" }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
}
