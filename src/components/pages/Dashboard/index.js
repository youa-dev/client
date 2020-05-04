import React, { Fragment, useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import Sidebar from "../../imports/Sidebar";
import DashboardHeader from "../../imports/DashboardHeader";
import authenticateUser from "../../../helpers/authenticateUser";
import urlGenerator from "../../../helpers/urlGenerator";
import axios from "axios";
import "./style.scss";

const DashboardComponent = ({ user }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(urlGenerator("posts", "/posts/all"), {
        headers: { Authorization: localStorage.token },
      });
      setPosts(res.data);
    };
    getPosts();
  }, []);
  return (
    <Container>
      <Sidebar />
      <div className="dashboard">
        <DashboardHeader user={user} />
        <Container>
          {posts.length > 0 ? (
            posts.map((p) => <p>{p.title}</p>)
          ) : (
            <p style={{ textAlign: "center" }}>No posts found.</p>
          )}
        </Container>
      </div>
    </Container>
  );
};

export default function Dashboard() {
  document.title = "youa.dev - Dashboard";
  const isAuthenticated = authenticateUser();
  return (
    <Fragment>
      {!isAuthenticated.profile ? (
        <Redirect to="/profile-creation" />
      ) : (
        <DashboardComponent user={isAuthenticated} />
      )}
    </Fragment>
  );
}
