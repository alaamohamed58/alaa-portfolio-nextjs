import Head from "next/head";
import { Fragment } from "react";
import ProjectContent from "../../components/projects/project-detail/project-content";
import { projectData, getProjectFile } from "../../lib/projects-util";
const SinglePost = (props) => {
  const { project } = props;
  return (
    <Fragment>
      <Head>
        <title> {project.title} </title>
        <meta name="description" content={project.description} />
      </Head>
      <ProjectContent project={project} />
    </Fragment>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const project = projectData(slug);

  return {
    props: {
      project,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const projectFiles = getProjectFile();
  const slugs = projectFiles.map((file) => file.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default SinglePost;
