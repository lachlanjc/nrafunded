import React from "react";
import Head from "next/head";
import { map } from "lodash";
import { Container } from "rebass";

import Header from "../src/Header";
import Search from "../src/Search";
import Nav from "../src/Nav";
import Footer from "../src/Footer";

// import analysis from "../static/analysis.html";
// import body from "../static/body.html";

const gs = `!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(arguments)};
d=s.createElement(q);q=s.getElementsByTagName(q)[0];
d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';
q.parentNode.insertBefore(d,q)}(window,document,'script','_gs');
_gs('GSN-476302-S');`;

const App = () => (
  <main>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>
        NRA Funded – How NRA funding influences Congress and US gun violence
      </title>
      <meta
        name="description"
        content="See if the NRA is funding your Congress members — and speak out."
      />
      <meta
        name="keywords"
        content="nra,nra funded,congress,us congress,gun control, gun violence,gun statistics,gun deaths,gun crime,gun,guns,political funding,campaign funding"
      />
      <meta name="author" content="Lachlan Campbell" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      {map([16, 32], size => (
        <link
          rel="icon"
          type="image/png"
          href={`/static/favicon-${size}x${size}.png`}
          sizes={`${size}x${size}`}
          key={`icon-${size}x${size}`}
        />
      ))}
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff5522" />
      <meta name="theme-color" content="#ff5522" />
      <link rel="stylesheet" href="//unpkg.com/basscss-basic@1.0.0/index.css" />
      {map(["app", "tooltips", "utilities"], f => (
        <link rel="stylesheet" href={`/static/css/${f}.css`} key={`${f}.css`} />
      ))}
      <script dangerouslySetInnerHTML={{ __html: gs }} />
    </Head>
    <Header />
    <Container is="article" px={2} style={{ maxWidth: 48 * 16 }}>
      <Search />
      <Nav />
      <div
        dangerouslySetInnerHTML={{
          __html: include("./static/analysis.html")
        }}
      />
    </Container>
    <Footer />
  </main>
);

export default App;
