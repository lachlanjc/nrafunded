import React, { PropTypes } from "react";
import moment from "moment";

import Icon from "./Icon";

const formatDate = date => moment(date).format("MMM D, YYYY");

const RepDates = ({ startDate, endDate, ...props }) => (
  <div aria-label="Term dates" className="flex items-center tooltipped meta">
    <Icon name="clock" />
    <span className="pl1">
      {formatDate(startDate)}
      {" - "}
      {formatDate(endDate)}
    </span>
  </div>
);

RepDates.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
};

export default RepDates;
