import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input, InputLabel, FormControl } from "@material-ui/core";
import FormButton from "../FormButton";
import "./style.scss";
import axios from "axios";
import urlGenerator from "../../../helpers/urlGenerator";

const onFocus = ({ target }) => {
  const cb = (i) =>
    i.getAttribute("data-icon") === target.id
      ? (i.style.color = "transparent")
      : false;
  const icons = document.querySelectorAll("span");
  icons.forEach(cb);
};

const onBlur = ({ target }) => {
  // TODO: Implement a check to see if the input is empty. If not, don't show the icon
  const icons = document.querySelectorAll("span");
  icons.forEach((i) => (i.style.color = "#757575"));
};

export default function ProfileCreationForm() {
  const [website, setWebsite] = useState();
  const [github, setGitHub] = useState();
  const [dev, setDev] = useState();
  const [stackoverflow, setStackOverflow] = useState();
  const [linkedin, setLinkedIn] = useState();
  const [biography, setBiography] = useState();
  const history = useHistory();
  const hooksWrapper = {
    website: setWebsite,
    github: setGitHub,
    dev: setDev,
    stackoverflow: setStackOverflow,
    linkedin: setLinkedIn,
    biography: setBiography,
  };
  const handleChange = ({ target }) => hooksWrapper[target.id](target.value);
  const handleClick = () => {
    axios
      .post(
        urlGenerator("auth", "/profile/create"),
        { website, github, dev, stackoverflow, linkedin, biography },
        { headers: { Authorization: localStorage.token } }
      )
      .then(() => history.push("/dashboard"))
      .catch((e) => console.error(e)); // TODO: Implement proper error handling.
  };
  return (
    <form
      noValidate
      autoComplete="off"
      className="shadow profile_creation_form"
    >
      <FormControl>
        <InputLabel htmlFor="website">
          <div className="profile_creation_form_label">
            <span className="fas fa-globe" data-icon="website" /> Personal
            Website
          </div>
        </InputLabel>
        <Input
          id="website"
          type="text"
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="github">
          <div className="profile_creation_form_label">
            <span className="fab fa-github" data-icon="github" /> GitHub
          </div>
        </InputLabel>
        <Input
          id="github"
          type="text"
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="dev">
          <div className="profile_creation_form_label">
            <span className="fab fa-dev" data-icon="dev" /> dev.to
          </div>
        </InputLabel>
        <Input
          id="dev"
          type="text"
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="stackoverflow">
          <div className="profile_creation_form_label">
            <span className="fab fa-stack-overflow" data-icon="stackoverflow" />{" "}
            StackOverflow
          </div>
        </InputLabel>
        <Input
          id="stackoverflow"
          type="text"
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="linkedin">
          <div className="profile_creation_form_label">
            <span className="fab fa-linkedin" data-icon="linkedin" /> LinkedIn
          </div>
        </InputLabel>
        <Input
          id="linkedin"
          type="text"
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="biography">
          <div className="profile_creation_form_label">
            <span data-icon="biography" className="fas fa-address-card" />{" "}
            Biography
          </div>
        </InputLabel>
        <Input
          id="biography"
          type="text"
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </FormControl>
      <br />
      <FormButton cb={handleClick} />
    </form>
  );
}
