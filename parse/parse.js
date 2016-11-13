
const _ = require('lodash')
const fs = require('fs')

const states = require('../data/states')
const people = require('../data/people')
const funding = require('../data/funding')

const data = _.forEach(states, state => {
  // for each state…
  // find representatives from that state
  let peeps = _.filter(people, ['state', state.abbrev])
  // now find the funded reps from this state
  const stateFunded = _.filter(funding, ['state', state.abbrev])
  // loop it
  state.people = _.forEach(peeps, p => {
    // remove accents — otherwise rendering screws with them
    p.person.firstname = _.deburr(p.person.firstname)
    p.person.lastname = _.deburr(p.person.lastname)
    // add funding
    p.funding = 0
    const fund = _.filter(stateFunded, {
      firstname: p.person.firstname,
      lastname: p.person.lastname
    })
    if (fund[0]) {
      p.funding = fund[0].funding
    }
  })
  // sort alphabetically
  state.people = _.sortBy(state.people, p => (p.person.sortname))
})

// NOTE: use ./ NOT ../ because `npm run parse|data` is run from the proj. root
fs.writeFile('./data/data.json', JSON.stringify(data), (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('✅ Parsed data')
  }
})
