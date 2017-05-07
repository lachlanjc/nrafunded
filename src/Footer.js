import React from "react";
import { Base } from "rebass";

const FooterLink = ({ unpadLeft, unpadRight, ...props }) => (
  <Base
    tagName="a"
    style={{
      textDecoration: "none",
      paddingLeft: unpadLeft ? null : 4,
      paddingRight: unpadRight ? null : 4
    }}
    {...props}
  />
);

const Footer = () => (
  <Base
    is="footer"
    px={1}
    py={3}
    mt={3}
    style={{
      borderTop: "1px solid #dae4eb",
      backgroundColor: "#f4f7f9",
      color: "#566b7b",
      textAlign: "center"
    }}
  >
    <section>
      Created by
      <FooterLink href="https://lachlanjc.me/" children="@lachlanjc" />
      in 2016 –
      <FooterLink
        href="https://github.com/lachlanjc/nrafunded/"
        children="Contribute on GitHub"
        unpadRight
      />
    </section>
    <section style={{ fontSize: 14 }}>
      Built with
      <FooterLink
        href="https://facebook.github.io/react/"
        children="react"
        unpadRight
      />
      ,
      <FooterLink
        href="https://github.com/insin/nwb"
        children="nwb"
        unpadRight
      />
      ,
      <FooterLink
        href="http://jxnblk.com/rebass"
        children="rebass"
        unpadRight
      />
      ,
      <FooterLink
        href="http://jxnblk.com/react-geomicons/"
        children="geomicons"
        unpadRight
      />
      ,
      <FooterLink
        href="https://github.com/jxnblk/static-react"
        children="static-react"
        unpadRight
      />
      ,
      <FooterLink
        href="https://npmjs.com/package/axios"
        children="axios"
        unpadRight
      />
      , &
      <FooterLink
        href="https://github.com/IonicaBizau/scrape-it"
        children="scrape-it"
        unpadRight
      />
      .
    </section>
  </Base>
);

export default Footer;
