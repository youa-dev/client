import React from "react";
import { Button } from "@material-ui/core";

const FormButton = ({ cb }) => {
  const handleClick = (e) => {
    e.preventDefault();
    cb();
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

export default FormButton;
