import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";
import { faWindows } from "@fortawesome/free-brands-svg-icons";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#skills",
    display: "Skills",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact Me",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav_wrapper}`}>
          {/* navigation logo */}
          <div className={`${classes.logo}`}>
            <h1>
              <span>S</span>hubham
            </h1>
          </div>

          {/*navmenu*/}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              {/* <div className={`${classes.nav__right}`}>
                <p className="d-flex align-items-centre gap-2 mb-0">
                  {" "}
                  <i className="ri-phone-line"></i> +918128087586{" "}
                </p>
              </div> */}

              <div className={`${classes.social__links}`}>
              <p className="d-flex align-items-centre gap-2 mb-0">
                  {" "}
                <Link href="https://github.com/ShubhamBhut">
                  <span>
                    <i class="ri-github-fill"></i>
                  </span>
                </Link>
                {/* <Link href='#'><span><i class="ri-facebook-line"></i></span></Link> */}
                <Link href="https://www.linkedin.com/in/shubham-patel-039789214/">
                  <span>
                    <i class="ri-linkedin-line"></i>
                  </span>
                </Link>
                </p>
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
