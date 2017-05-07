import React from "react";
import { Flex, Box } from "reflexbox";
import { NavItem } from "rebass";
import _ from "lodash";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
const states = require("../data/states.json");

const Nav = () => (
  <Section>
    <SectionHeading name="or jump to your state…" />
    <Flex wrap gutter={1}>
      {_.map(states, s => (
        <Box key={s.id}>
          <NavItem
            href={`#${s.abbrev}`}
            title={s.name}
            is="a"
            children={s.name}
          />
        </Box>
      ))}
    </Flex>
  </Section>
);

export default Nav;
