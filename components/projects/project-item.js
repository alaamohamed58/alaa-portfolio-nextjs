import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./project-item.module.css";
function ProjectItem(props) {
  const { title, image, excerpt, description, slug } = props.projects;

  //   const formattedDate = new Date(date).toLocaleDateString("en-US", {
  //     day: "numeric",
  //     month: "long",
  //     year: "numeric",
  //   });
  const lazyRoot = React.useRef(null);
  const imagePath = `/images/projects/${slug}/${image}`;

  const path = `/projects/${slug}`;
  return (
    <li className={classes.project}>
      <Link href={path}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
              lazyRoot={lazyRoot}
            />
          </div>
          <div className={classes.content}>
            <h3> {title} </h3>
            <span> {description} </span>
            <p> {excerpt} </p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default ProjectItem;
