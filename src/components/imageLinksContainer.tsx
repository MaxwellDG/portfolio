import React from "react";
import ImageLink from "./imageLink";

export default function ImageLinksContainer() {
  return (
    <ul id="mainImageLinks">
      <ImageLink
        id="largeGitHub"
        altText="Img_GitHub"
        image="images/iconGithub.png"
        link="https://www.github.com/MaxwellDG"
      ></ImageLink>
      <ImageLink
        id="largeLinkedIn"
        altText="Img_LinkedIn"
        image="images/iconLinkedin.jpg"
        link="https://www.linkedin.com/in/maxwell-dunk-green-bb313a165/"
      ></ImageLink>
    </ul>
  );
}
