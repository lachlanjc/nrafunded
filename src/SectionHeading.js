import React, { PropTypes } from "react";
import { Base } from "rebass";

const SectionHeading = ({ name, ...props }) => (
  <Base {...props} tagName="h2" theme="primary" className="section-heading">
    <span className="section-heading__name">{name}</span>
  </Base>
);

SectionHeading.propTypes = {
  name: PropTypes.string.isRequired
};

export default SectionHeading;
