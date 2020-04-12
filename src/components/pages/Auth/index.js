import React, { useState, Fragment } from "react";
import {
  Container,
  Input,
  InputLabel,
  FormControl,
  Button,
  Box,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import generate from "../../../helpers/urlGenerator";
import useForceUpdate from "use-force-update";
import Navbar from "../../imports/Navbar";
import { useHistory } from "react-router-dom";
import "./index.scss";

const evt = new Event("forceUpdate");

let errors = [];

let type = window.location.pathname.replace("/", "");

const FormButton = (data) => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    calls[type](data, history);
  };
  return (
    <Button
      variant="contained"
      color="primary"
      style={{ marginTop: "15px" }}
      onClick={handleClick}
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

const registerUser = async ({ data }, history) => {
  errors = [];
  try {
    await axios.post(generate("auth", "/auth/register"), data);
    history.push("/login");
  } catch ({ response: e }) {
    errors = Object.keys(e.data).map((k) => e.data[k]);
    document.dispatchEvent(evt);
  }
};

const loginUser = async ({ data }, history) => {
  errors = [];
  try {
    const res = await axios.post(generate("auth", "/auth/login"), data);
    localStorage.setItem("token", res.data.token);
    history.push("/dashboard");
  } catch ({ response: e }) {
    errors = Object.keys(e.data).map((k) => e.data[k]);
    document.dispatchEvent(evt);
  }
};

const calls = {
  login: loginUser,
  register: registerUser,
};

const GreeterFooter = ({ redirect }) => {
  return (
    <p className="auth_form_greeter_footer">
      {type === "register"
        ? "Already got an account?"
        : "Are you new around here?"}{" "}
      <span
        className="auth_form_greeter_footer--link"
        onClick={() => redirect(type === "register" ? "/login" : "/register")}
      >
        Click here
      </span>{" "}
      to {type === "register" ? "log in" : "register"}!
    </p>
  );
};

export default function Auth() {
  const forceUpdate = useForceUpdate();
  const history = useHistory();
  type = window.location.pathname.replace("/", "");
  document.addEventListener("forceUpdate", forceUpdate);
  document.title = `youa.dev - ${
    type[0].toUpperCase() + type.substring(1, type.length).toLowerCase()
  }`;
  return (
    <Fragment>
      <Navbar />
      <Container>
        <div className="auth hero">
          <div className="auth_form_wrapper shadow">
            <div className="auth_form_greeter">
              <h1>{type}</h1>
              <GreeterFooter redirect={history.push} />
            </div>
            <form className="auth_form_inputs" noValidate autoComplete="off">
              {formWrapper[type]()}
            </form>
          </div>

          <div className="auth_errors">
            <Grid container spacing={1}>
              {errors.map((e, i) => (
                <Grid item xs={12} sm={6} key={i}>
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
    </Fragment>
  );
}
