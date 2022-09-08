import ProjectItem from "./project-item";
import classes from "./project-grid.module.css";
const ProjectGrid = (props) => {
  const { projects } = props;
  return (
    <ul className={classes.grid}>
      {projects.map((project) => (
        <ProjectItem key={project.slug} projects={project} />
      ))}
    </ul>
  );
};
export default ProjectGrid;
