import { Fragment } from "react";
import Head from "next/head";
import FeaturedProjects from "../components/home-page/featured-projects";
import Hero from "../components/home-page/hero";
import { featuredProjects } from "../lib/projects-util";

// const DUMMY_PROJECTS = [
//   {
//     slug: "rastaurant-js-template",
//     title: "Restaurant Template",
//     image: "restaurant.jpg",
//     excerpt: "a restaurant one page template with vanilla JS",
//     description: "HTML - CSS - Javscript",
//   },
// ];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Alaa{"'"}s portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>
      <Hero />
      <FeaturedProjects projects={props.featuredProjects} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const featured = featuredProjects();
  return {
    props: {
      featuredProjects: featured,
    },
  };
}

export default HomePage;
