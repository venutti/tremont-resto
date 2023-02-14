import useWidth from "../hooks/useWidth";
import Container from "./Container";
import BurguerButton from "./BurguerButton";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function Navbar() {
  const width = useWidth();
  const [showNav, setShowNav] = useState(false);
  const [location, setLocation] = useLocation();

  const isSmallWidth = width < 450;

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  let navListClass = "";
  if (isSmallWidth) {
    navListClass +=
      "absolute w-full p-2 text-center bg-gray-800 transition-all delay-100";
  } else {
    navListClass += "flex bg-gray-900";
  }
  if (showNav) {
    navListClass += " top-full left-0";
  } else {
    navListClass += " top-full left-full";
  }

  const links = [
    {
      title: "HOME",
      route: "/",
    },
    {
      title: "MENU",
      route: "/menu",
    },
    {
      title: "CONTACTO",
      route: "/contact",
    },
  ];

  const activeLinkClass = "border-y border-white";

  useEffect(() => {
    setShowNav(false);
  }, [location]);

  const renderedLinks = links.map((link) => (
    <li
      key={link.title}
      className={`px-2 py-1 ${location === link.route ? activeLinkClass : ""}`}
    >
      <Link className="block" href={link.route}>
        {link.title}
      </Link>
    </li>
  ));

  const navList = <ul className={navListClass}>{renderedLinks}</ul>;

  return (
    <nav className="relative bg-gray-900 text-white p-4">
      <Container className="flex justify-between items-center gap-4">
        <h2 className="title text-3xl">TREMONT</h2>
        {isSmallWidth && (
          <BurguerButton isActive={showNav} onClick={handleToggleNav} />
        )}
        {navList}
      </Container>
    </nav>
  );
}
