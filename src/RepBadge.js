import React from "react";
import PropTypes from "prop-types";

const RepBadge = ({ party, ...props }) => {
  const label = party === "Republican" ? "R" : "D";
  const theme = label === "R" ? "red" : "blue";
  return (
    <span className={`badge bg-${theme} ml1`} children={label} {...props} />
  );
};

RepBadge.propTypes = {
  party: PropTypes.oneOf(["Republican", "Democrat", "Independent"])
};

export default RepBadge;
