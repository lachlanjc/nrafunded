import React from "react";
import _ from "lodash";

import Icons from "./Icons";
import State from "./State";
const states = require("../data/data.json");

const Body = () => (
  <div>
    <Icons />
    {_.map(states, ({ name, abbrev, id, people }) => (
      <State name={name} abbrev={abbrev} people={people} key={id} />
    ))}
  </div>
);

export default Body;
