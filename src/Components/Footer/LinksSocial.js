import React from "react";
import inst from "../../assets/inst-icon.svg";
import rss from "../../assets/rss-icon.svg";
import twitter from "../../assets/twitter-icon.svg";
import face from "../../assets/face-icon.svg";
import LinkImg from "./LinkImg";

function LinksSocial(props) {
  return (
    <div className="social">
      <LinkImg img={face} name="face-icon" link="#" />
      <LinkImg img={twitter} name="twitter-icon" link="#" />
      <LinkImg img={inst} name="inst-icon" link="#" />
      <LinkImg img={rss} name="rss-icon" link="#" />
    </div>
  );
}

export default LinksSocial;
