import React, { useState } from "react";
import { Input, InputLabel, FormControl, Button } from "@material-ui/core";

export default function ProfileCreationForm() {
  const [website, setWebsite] = useState();
  const [gitHub, setGitHub] = useState();
  const [dev, setDev] = useState();
  const [stackoverflow, setStackOverflow] = useState();
  const [linkedin, setLinkedIn] = useState();
  const [biography, setBiography] = useState();
  const hooksWrapper = {
    website: setWebsite,
    github: setGitHub,
    dev: setDev,
    stackoverflow: setStackOverflow,
    linkedin: setLinkedIn,
    biography: setBiography,
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(website, gitHub, dev, stackoverflow, linkedin, biography);
  };
  const handleChange = ({ target }) => hooksWrapper[target.id](target.value);
  return (
    <form noValidate autoComplete="off">
      <FormControl>
        <InputLabel htmlFor="website">Personal Website</InputLabel>
        <Input id="website" type="text" onChange={handleChange} />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="github">GitHub</InputLabel>
        <Input id="github" type="text" onChange={handleChange} />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="dev">dev.to</InputLabel>
        <Input id="dev" type="text" onChange={handleChange} />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="stackoverflow">StackOverflow</InputLabel>
        <Input id="stackoverflow" type="text" onChange={handleChange} />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="linkedin">LinkedIn</InputLabel>
        <Input id="linkedin" type="text" onChange={handleChange} />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="biography">Biography</InputLabel>
        <Input id="biography" type="text" onChange={handleChange} />
      </FormControl>
      <br />
      <FormControl>
        <Button color="primary" variant="contained" onClick={handleClick}>
          Submit
        </Button>
      </FormControl>
      <br />
    </form>
  );
}
