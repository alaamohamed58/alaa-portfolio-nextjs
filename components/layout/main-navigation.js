import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BarsIcon from "../icons/bars";

import classes from "./main-navigation.module.css";
import HomeIcon from "../icons/home";
import MessageIcon from "../icons/message";
import CodeIcon from "../icons/code";
const MainNavigation = () => {
  const router = useRouter();
  // const [showMenu, setShowMenu] = useState(false);
  // const [matches, setMatches] = useState("");

  // useEffect(() => {
  //   const handler = (e) => setMatches(e.matches);
  //   setMatches(window.matchMedia("(max-width: 767px)").matches);
  //   window.matchMedia("(max-width: 767px)").addEventListener("change", handler);
  // }, []);

  // const showMenuHandeler = () => {
  //   setShowMenu((prevState) => !prevState);
  // };
  return (
    <header className={classes.header}>
      {/*   <Link href="/">
        <a>
          <Logo />
        </a>
  </Link> */}

      <nav>
        {/*matches && (
          <div className={classes.bars} onClick={showMenuHandeler}>
            <BarsIcon />
          </div>
        )*/}
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? classes.active : ""}>
                <HomeIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className={
                  router.pathname === "/projects" ? classes.active : ""
                }
              >
                <CodeIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={router.pathname === "/contact" ? classes.active : ""}
              >
                <MessageIcon />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
