import React from "react";
import PropTypes from "prop-types";

const StateName = ({ name, ...props }) => (
  <h2 {...props} className="state">
    <span className="state__name">{name}</span>
  </h2>
);

StateName.propTypes = {
  name: PropTypes.string.isRequired
};

export default StateName;
