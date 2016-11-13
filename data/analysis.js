
import _ from 'lodash'
import states from './data'

let people = []
let funds = []
_.forEach(states, state => {
  _.forEach(state.people, p => {
    people.push(p)
    funds.push(p.funding)
  })
})
const fundedPeople = _.filter(people, p => (
  p.funding > 0
))
// console.log(`People: ${people.length}; Funds: ${funds.length}; Funded people: ${fundedPeople.length};`)

const republicans = _.filter(people, ['party', 'Republican'])
const republicansFunded = _.filter(fundedPeople, ['party', 'Republican'])
const males = _.filter(people, ['person.gender', 'male'])
const malesFunded = _.filter(fundedPeople, ['person.gender', 'male'])

const percentages = {
  republicans: {
    value: republicans.length / people.length
  },
  republicansFunded: {
    value: republicansFunded.length / fundedPeople.length
  },
  males: {
    value: males.length / people.length
  },
  malesFunded: {
    value: malesFunded.length / fundedPeople.length
  }
}

_.forEach(percentages, (data, key) => {
  percentages[key].label = `${_.round(data.value * 100, 1)}%`
})

const funding = {
  percent: _.round(_.pull(funds, 0).length * 100 / people.length, 1),
  lobbying: 2530000,
  forDems: 1564,
  antiDems: 36976822,
  forRepubs: 15660786,
  antiRepubs: 933
}

const stats = {
  percentages,
  funding
}

export default stats
