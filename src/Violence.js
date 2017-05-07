import React from "react";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Stat from "./Stat";
import violence from "../data/violence";

const Violence = () => (
  <Section>
    <SectionHeading name="Gun violence (2015)" />
    <article className="md-flex items-center flex-wrap stats-narrow">
      <Stat label="Incidents" value={violence.incidents} />
      <Stat label="Deaths" value={violence.deaths} />
      <Stat label="Injuries" value={violence.injuries} />
      <Stat label="Children killed/injured" value={violence.kids} />
      <Stat label="Teens killed/injured" value={violence.teens} />
      <Stat label="Mass shootings (4+ people)" value={violence.masses} />
    </article>
  </Section>
);

export default Violence;
