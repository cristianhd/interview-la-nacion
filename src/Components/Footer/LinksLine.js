import React from "react";
import "../../Style/LinksLine.scss";

function LinksLine({ links, name }) {
  const rowLinks = links.map((item, index) => {
    const { url, link } = item;
    return (
      <a key={index} href={url}>
        {link}
      </a>
    );
  });
  return (
    <div className={name}>
      <ul className="row-links">{rowLinks}</ul>
    </div>
  );
}

export default LinksLine;
