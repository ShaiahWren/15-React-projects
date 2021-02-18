import React, { useRef, useEffect, useState } from "react";
import { links } from "./data";

const Sidebar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  

  return (
    <>
      <ul className="links" ref={linksRef}>
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
