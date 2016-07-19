
const _ = require('lodash')
const fs = require('fs')
const axios = require('axios')
const scrapeIt = require('scrape-it')
const unFormatUSD = require('unformat-usd')

axios.get('https://www.govtrack.us/api/v2/role?current=true&limit=542')
  .then(data => {
    fs.writeFile('./data/people.json', JSON.stringify(data.data.objects), err => {
      if (err) {
        console.log(err)
      } else {
        console.log(`✅  Saved people – (${data.data.objects.length} of them)`)
      }
    })
  })

const pages = [
  'https://www.opensecrets.org/pacs/pacgot.php?cycle=2014&cmte=C00053553&page=1',
  'https://www.opensecrets.org/pacs/pacgot.php?cycle=2014&cmte=C00053553&page=2',
  'https://www.opensecrets.org/pacs/pacgot.php?cycle=2014&cmte=C00053553&page=3'
]
let data = []

function scrapeUrl(url, saveFile) {
  scrapeIt(url, {
    house: {
      listItem: '#tab0 tbody tr',
      data: {
        title: 'td[nowrap]',
        firstname: {
          selector: 'td[nowrap]',
          convert: f => f.match(/(\w+(?:\s\w+)?)\s+\(/)[1]
        },
        lastname: {
          selector: 'td[nowrap]',
          convert: l => l.match(/^(\w+(?:\s+\w+)?)/)[0]
        },
        state: {
          selector: 'td[nowrap]',
          convert: s => s.match(/\([RD]-(\w+)\)/)[1]
        },
        funding: {
          selector: 'td.number',
          convert: d => unFormatUSD(d)
        }
      }
    }
  }).then(page => {
    data = _.concat(data, page.house)
    if (data.length > 700) {
      saveFile()
    }
  })
}

_.map(pages, url => {
  scrapeUrl(url, () => {
    fs.writeFile('./data/funding.json', JSON.stringify(data), err => {
      if (err) {
        console.log(err)
      } else {
        console.log(`✅  Saved funding – (${data.length} people)`)
      }
    })
  })
})

scrapeIt('http://www.gunviolencearchive.org/tolls/2014', {
  incidents: '.toll li:first-child  span:last-child',
  deaths:    '.toll li:nth-child(2) span:last-child',
  injuries:  '.toll li:nth-child(3) span:last-child',
  kids:      '.toll li:nth-child(4) span:last-child',
  teens:     '.toll li:nth-child(5) span:last-child',
  masses:    '.toll li:nth-child(6) span:last-child',
}).then(data => {
  fs.writeFile('./data/violence.json', JSON.stringify(data), err => {
    if (err) {
      console.log(err)
    } else {
      console.log(`✅  Saved violence`)
    }
  })
})
