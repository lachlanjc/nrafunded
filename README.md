# NRA Funded

See how much the NRA gives your Congress members — and speak out. Built with React, [Rebass](http://jxnblk.com/rebass), [Geomicons](http://jxnblk.com/react-geomicons), [static-react](https://github.com/jxnblk/static-react), [axios](https://github.com/mzabriskie/axios), and [scrape-it](https://github.com/IonicaBizau/scrape-it).

[**→ Check it out**](https://nrafunded.now.sh)

## Local development

1. Clone the repo
2. `npm install` to install dependencies
3. `npm start` to start the local development server

## `npm` Commands

Command | Description
--- | ---
`data` | Scrape and parse the source data for funding, etc. Combines `npm run scrape` and `npm run parse`.
`render` | Render static components. You have to do this after every change to the body or analysis sections (`render:analysis` and `render:body` are also available). This is very much necessary for performance.
`build` | Build the site to `docs/`.

MIT license

___
*Another thing by [@lachlanjc](https://lachlanjc.glitch.me).*
