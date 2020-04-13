import React from "react";
import { Grid, Box } from "@material-ui/core";
import "./style.scss";

export default function ErrorOutput({ errors, columns }) {
  return (
    <div className="errors">
      <Grid container spacing={1}>
        {errors.map((e, i) => (
          <Grid item xs={12} sm={12 / columns} key={i}>
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
  );
}
