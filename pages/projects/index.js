import Head from "next/head";
import { Fragment } from "react";
import AllProjects from "../../components/projects/all-projects";
import { getAllProjects } from "../../lib/projects-util";

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Projects</title>
        <meta name="description" content="The List of all projects" />
      </Head>
      <AllProjects projects={props.allProjects} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const projects = getAllProjects();

  return {
    props: {
      allProjects: projects,
    },
  };
};

export default AllPostsPage;
