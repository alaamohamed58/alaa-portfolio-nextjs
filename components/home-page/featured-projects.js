import React from "react";
import ProjectGrid from "../projects/project-grid";
import classes from "./featured-projects.module.css";
function FeaturedProjects(props) {
  return (
    <section className={classes.latest}>
      <h2>My Featured Projects</h2>
      <ProjectGrid projects={props.projects} />
    </section>
  );
}

export default FeaturedProjects;
