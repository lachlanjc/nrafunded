import React from "react";
import PropTypes from "prop-types";

import Pill from "./Pill";

const TwitterLink = ({ text, url, ...props }) => (
  <Pill
    href={`https://twitter.com/share?text=${text}&url=${url}`}
    style={{ color: "#1da1f2" }}
    {...props}
    children={props.children || "Tweet this"}
  />
);

TwitterLink.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string
};

TwitterLink.defaultProps = {
  text: "NRA Funded",
  url: "https://nrafunded.us/"
};

export default TwitterLink;
