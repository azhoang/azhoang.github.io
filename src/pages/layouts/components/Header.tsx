import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export default function Header() {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const toggleMobileMenu = () => setToggleMenu(!toggleMenu);
  const routes = [
    {
      to: "/",
      name: "About",
    },
    {
      to: "/resume",
      name: "Resume",
    },
    {
      to: "/blog",
      name: "Blog",
    },
    // {
    //   to: "/ebook",
    //   name: "Book",
    // },
    // {
    //   to: "/music",
    //   name: "Music",
    // },
  ];

  React.useEffect(() => {
    const appElement = document.querySelector("#azhoang-app");
    if (!toggleMenu) {
      appElement?.classList.remove("open-menu");
      document.documentElement.scrollTop = 0;
    } else {
      appElement?.classList.add("open-menu");
    }
  }, [toggleMenu]);

  return (
    <>
      {/* Menu */}
      <div className="circle-menu" onClick={toggleMobileMenu}>
        <div
          className={classNames("hamburger", {
            "is-active": toggleMenu,
          })}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="hamburger__text">MENU</div>
        </div>
      </div>
      <div className="nav-wrap">
        <ul className="nav">
          {routes.map((route) => {
            const activeRoute =
              route.to !== "/"
                ? location.pathname.includes(route.to)
                : location.pathname === route.to;
            return (
              <li key={route.name} className="nav__item">
                <Link
                  to={route.to}
                  onClick={(e) =>
                    !activeRoute ? toggleMobileMenu() : e.preventDefault()
                  }
                  className={classNames({
                    active: activeRoute,
                  })}
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
