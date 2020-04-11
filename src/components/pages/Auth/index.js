import React, { useState } from "react";
import {
  Container,
  Input,
  InputLabel,
  FormControl,
  Button,
  Box,
  Grid,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import generate from "../../../urlGenerator";
import useForceUpdate from "use-force-update";
import "./index.scss";

const evt = new Event("forceUpdate");

let errors = [];

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const type = window.location.pathname.replace("/", "");

const FormButton = (data) => {
  const handleClick = (data) => {
    calls[type](data);
  };
  return (
    <Button
      variant="contained"
      color="primary"
      style={{ marginTop: "15px" }}
      onClick={(e) => {
        e.preventDefault();
        handleClick(data);
      }}
    >
      Submit
    </Button>
  );
};

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
  errors = [];
  try {
    const res = await axios.post(generate("auth", "/auth/register"), data);
    console.log(res.data);
  } catch ({ response: e }) {
    errors = Object.keys(e.data).map((k) => e.data[k]);
    document.dispatchEvent(evt);
  }
};

const loginUser = async ({ data }) => {
  errors = [];
  try {
    const res = await axios.post(generate("auth", "/auth/login"), data);
    console.log(res.data);
  } catch ({ response: e }) {
    errors = Object.keys(e.data).map((k) => e.data[k]);
    document.dispatchEvent(evt);
  }
};

const calls = {
  login: loginUser,
  register: registerUser,
};

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
  const forceUpdate = useForceUpdate();
  document.addEventListener("forceUpdate", forceUpdate);
  document.title = `youa.dev - ${
    type[0].toUpperCase() + type.substring(1, type.length).toLowerCase()
  }`;
  return (
    <Container>
      <div className="auth hero">
        <div className="auth_form_wrapper shadow">
          <div className="auth_form_greeter">
            <h1>{type}</h1>
            <GreeterFooter />
          </div>
          <form className="auth_form_inputs" noValidate autoComplete="off">
            {formWrapper[type]()}
          </form>
        </div>

        <div className="auth_errors">
          <Grid container spacing={1}>
            {errors.map((e, i) => (
              <Grid item xs={12} sm={6}>
                <Box
                  bgcolor="error.main"
                  color="error.contrastText"
                  p={2}
                  className="shadow"
                >
                  {i + 1}. {e}
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
}
