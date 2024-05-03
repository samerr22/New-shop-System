import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {

  return (
    <ul className={`flex flex-row gap-16 ${props.className}`}>
      {props.links.map((link, index) => (
        <Link
          key={index}
          className={`font-light text-h1-black transition-colors lg:hover:text-blue-600 ${props.linkClassNames}`}
          to={link.link}
          onClick={props.onLinkClick}
        >
          <li>{link.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
