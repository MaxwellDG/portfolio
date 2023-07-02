"use client";

import useWindowDimensions from "../../hooks/useWindowDimensions";

interface Props {
  isEnterprise: boolean;
  link: string;
  isLeftSide: boolean;
}

export default ({ isEnterprise, link, isLeftSide }: Props) => {
  const dimensions = useWindowDimensions();

  // Left and right padding removed entirely on mobile screens
  var styles = {
    top: "10px",
    left: isLeftSide ? undefined : "10px",
    right: !isLeftSide ? undefined : "10px",
  };

  var mobileStyle = {
    top: "10px",
    left: "0px",
    right: "0px",
  };

  return (
    <div id="gitHubLink" style={dimensions.width <= 700 ? mobileStyle : styles}>
      {!isEnterprise && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="sourceCode"
        >
          <img
            alt="github_link"
            src="images/github_icon_white.png"
            width="50px"
            height="50px"
          />
        </a>
      )}
    </div>
  );
};
