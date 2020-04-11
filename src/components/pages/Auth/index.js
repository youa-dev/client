import React from "react";
import { Container } from "@material-ui/core";

export default function Auth({ type }) {
  return (
    <Container>
      <div className="auth hero">
        <h1>{type}</h1>
      </div>
    </Container>
  );
}
