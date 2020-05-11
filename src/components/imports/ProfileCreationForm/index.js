import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Input, InputLabel, FormControl } from "@material-ui/core";
import FormButton from "../FormButton";
import "./style.scss";
import axios from "axios";
import urlGenerator from "../../../helpers/urlGenerator";
import forceUpdateEvent from "../../../helpers/forceUpdateEvent";
import authenticateUser from "../../../helpers/authenticateUser";

const handleIcons = ({ target, type }) => {
  const icons = document.querySelectorAll("span");
  const manipulateIcon = (hide = true) =>
    icons.forEach((i) =>
      i.getAttribute("data-icon") === target.id
        ? (i.style.color = `${hide ? "transparent" : "#777777"}`)
        : false
    );
  switch (type) {
    case "focus":
      manipulateIcon();
      break;
    case "blur":
      manipulateIcon(target.value.trim() !== "");
      break;
    default:
      return;
  }
};

export default function ProfileCreationForm() {
  const user = authenticateUser();
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
  const handleClick = async () => {
    try {
      const res = await axios.post(
        urlGenerator("auth", "/profile/create"),
        { website, github, dev, stackoverflow, linkedin, biography },
        { headers: { Authorization: localStorage.token } }
      );
      localStorage.token = res.data.token;
      history.push(`/u/${res.data.profile.handle}`);
    } catch (e) {
      // TODO: Implement proper error handling.
      if (e.response) document.dispatchEvent(forceUpdateEvent(e.response.data));
    }
  };
  return user.profile ? (
    <Redirect to={user.profile.handle} />
  ) : (
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
          onFocus={handleIcons}
          onBlur={handleIcons}
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
          onFocus={handleIcons}
          onBlur={handleIcons}
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
          onFocus={handleIcons}
          onBlur={handleIcons}
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
          onFocus={handleIcons}
          onBlur={handleIcons}
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
          onFocus={handleIcons}
          onBlur={handleIcons}
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
          onFocus={handleIcons}
          onBlur={handleIcons}
        />
      </FormControl>
      <br />
      <FormButton cb={handleClick} />
    </form>
  );
}
