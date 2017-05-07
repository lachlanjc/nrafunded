import React, { PropTypes } from "react";

const Pill = ({ className, ...props }) => (
  <a className={`pill ${className || ""}`} {...props} />
);

Pill.propTypes = {
  className: PropTypes.string
};

export default Pill;
