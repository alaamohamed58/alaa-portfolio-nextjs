import ProjectGrid from "./project-grid";
import classes from "./all-projects.module.css";
const AllProjects = (props) => {
  const { projects } = props;
  return (
    <section className={classes.projects}>
      <h1>All Projects</h1>
      <ProjectGrid projects={projects} />
    </section>
  );
};

export default AllProjects;
