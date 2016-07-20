# NRA Funded

See how much the NRA gives your Congress members — and speak out. Built with React, [nwb](https://github.com/insin/nwb), [Rebass](http://jxnblk.com/rebass), [Geomicons](http://jxnblk.com/react-geomicons), [static-react](https://github.com/jxnblk/static-react), [axios](https://github.com/mzabriskie/axios), and [scrape-it](https://github.com/IonicaBizau/scrape-it).

https://nrafunded.us/

## Local development

1. Clone the repo
2. `npm install` to install dependencies
3. `npm start` to start the local development server (port 4000)

## `npm` Commands

Command | Description
--- | ---
`npm run data` | Scrape and parse the source data for funding, etc. Combines `npm run scrape` and `npm run parse`.
`npm run render` | Regenerate the main content (states + people). You have to do this after every change. (By rendering locally to a static file, the browser doesn't have to do this, which is a major performance concern.)
`npm run analysis` | Regenerate analysis/statistics section. Again, after every change to that section, and for performance reasons.
`npm run css` | Regenerate basscss imports.
`npm run build` | Build the site to `dist/`.
`npm run deploy` | Build the site and deploy it to GitHub.

## Contributing

This site was built fairly quickly, and there are many things that could be improved (design, documentation, testing, tooling, performance, etc), so please contribute! Fork this repo, create a branch, push your work to GitHub, and [submit a pull request](https://github.com/lachlanjc/nrafunded/compare). Know that this repo follows [JavaScript Standard Style](http://standardjs.com).

## License

MIT licensed.

___

*A thing by @lachlanjc.*
