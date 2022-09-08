import Image from "next/image";
import ReactMarkdown from "react-markdown";

import ProjectHeader from "./project-header";
import classes from "./project-content.module.css";
// const DUMMY_PROJECT = {
//   slug: "rastaurant-js-template",
//   title: "Restaurant Template",
//   image: "restaurant.jpg",
//   description: "One Page Javscript template",
//   content:
//     "# this template coded with HTML for structure, css for styling and javascript for actions and logic",
// };

const ProjectContent = (props) => {
  const { project } = props;
  const imagePath = `/images/projects/${project.slug}/${project.image}`;

  const customRenderers = {
    img(img) {
      return <Image src={img.src} alt={img.alt} width={600} height={300} />;
    },

    // p(paragraph) {
    //   const { node } = paragraph;
    //   if (node.children[0].tagName === "img") {
    //     const image = node.children[0];
    //     return (
    //       <div className={classes.image}>
    //         <Image
    //           src={image.properties.src}
    //           alt={image.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }
    // },
  };

  return (
    <article className={classes.content}>
      <ProjectHeader
        title={project.title}
        image={imagePath}
        link={project.link}
      />
      <ReactMarkdown components={customRenderers}>
        {project.content}
      </ReactMarkdown>
    </article>
  );
};

export default ProjectContent;
