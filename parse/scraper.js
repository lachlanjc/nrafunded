
const _ = require('lodash')
const fs = require('fs')
const axios = require('axios')
const scrapeIt = require('scrape-it')
const unFormatUSD = require('unformat-usd')

// PEOPLE
axios.get('https://www.govtrack.us/api/v2/role?current=true&limit=540')
  .then(data => {
    fs.writeFile('./data/people.json', JSON.stringify(data.data.objects), err => {
      if (err) {
        console.log(err)
      } else {
        console.log(`✅ Saved people – (${data.data.objects.length} of them)`)
      }
    })
  })

// CONTRIBUTIONS
// Static numbers in analysis.js for lobbying spending from:
// https://www.opensecrets.org/orgs/summary.php?id=d000000082&cycle=2016
const pages = [
  'https://www.opensecrets.org/orgs/recips.php?id=d000000082&cycle=2016&sort=A&page=1',
  'https://www.opensecrets.org/orgs/recips.php?id=d000000082&cycle=2016&sort=A&page=2',
  'https://www.opensecrets.org/orgs/recips.php?id=d000000082&cycle=2016&sort=A&page=3'
]
let data = []

const scrapeProcess = {
  title: 'td:first-child',
  firstname: {
    selector: 'td:first-child',
    convert: f => f.match(/(\w+(?:\s\w+)?)\s+\(/)[1]
  },
  lastname: {
    selector: 'td:first-child',
    convert: l => l.match(/^(\w+(?:\s+\w+)?)/)[0]
  },
  state: {
    selector: 'td:first-child',
    convert: s => s.match(/[RDI]-(\w+)/) ? s.match(/[RDI]-(\w+)/)[1] : null
  },
  office: {
    selector: 'td:nth-child(2)'
  },
  funding: {
    selector: 'td:last-child',
    convert: d => unFormatUSD(d)
  }
}

function scrapeUrl (url, saveFile) {
  scrapeIt(url, {
    recips: {
      listItem: '#recips tbody tr',
      data: scrapeProcess
    }
  }).then(page => {
    data = _.concat(data, page.recips)
    if (data.length > 256) saveFile(data)
  })
}

_.map(pages, url => {
  scrapeUrl(url, data => {
    fs.writeFile('./data/funding.json', JSON.stringify(data), err => {
      if (err) {
        console.log(err)
      } else {
        console.log(`✅ Saved funding – (${data.length} people)`)
      }
    })
  })
})

// GUN VIOLENCE
scrapeIt('http://www.gunviolencearchive.org/tolls/2015', {
  incidents: '.toll li:first-child  span:last-child',
  deaths: '.toll li:nth-child(2) span:last-child',
  injuries: '.toll li:nth-child(3) span:last-child',
  kids: '.toll li:nth-child(4) span:last-child',
  teens: '.toll li:nth-child(5) span:last-child',
  masses: '.toll li:nth-child(6) span:last-child'
}).then(data => {
  fs.writeFile('./data/violence.json', JSON.stringify(data), err => {
    if (err) {
      console.log(err)
    } else {
      console.log('✅ Saved violence')
    }
  })
})
