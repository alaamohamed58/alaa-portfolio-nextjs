import Link from "next/link";
import Image from "next/image";
import classes from "./hero.module.css";
import TypeWriter from "../../helper/typewriter";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Hero = () => {
  const typeWriter = ["Front-end Web developer", "React JS developer"];

  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/alaa.jpeg"
          alt="alaa image"
          width={300}
          height={300}
        />
      </div>
      <ul className={classes.social}>
        <li>
          <Link
            href="https://www.facebook.com/profile.php?id=100008391227746"
            passHref
          >
            <a target="_blank">
              <BsFacebook />
            </a>
          </Link>
        </li>

        <li>
          <Link href="https://wa.me/+201027497672" passHref>
            <a target="_blank">
              <AiOutlineWhatsApp />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://telegram.me/tarmanau" passHref>
            <a target="_blank">
              {" "}
              <FaTelegramPlane />
            </a>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/alaa-mohamed-245804206"
            passHref
          >
            <a target="_blank">
              <FaLinkedinIn />
            </a>
          </Link>
        </li>
      </ul>
      <h1>Hi, I am Alaa</h1>

      <p>
        I{"'"}m <TypeWriter data={typeWriter} />
      </p>
    </section>
  );
};

export default Hero;
