import React from "react";

const PageLink = ({ text, href, itemClass }) => {
  return (
    <>
      <li>
        <a href={href} rel="noreferrer" className={itemClass}>
          {" "}
          {text}{" "}
        </a>
      </li>
    </>
  );
};

export default PageLink;
