import Image from "next/image";
import Link from "next/link";
import classes from "./project-header.module.css";
const ProjectHeader = (props) => {
  const { title, image, link } = props;
  return (
    <header className={classes.header}>
      <h1> {title} </h1>
      {/*  <Image src={image} alt={title} width={200} height={150} /> */}
      <Link href={link} passHref>
        <a target="_blank">
          <button>Watch Demo</button>
        </a>
      </Link>
    </header>
  );
};
export default ProjectHeader;
