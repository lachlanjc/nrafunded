import React, { Component } from 'react'
import {
  trim,
  isEmpty,
  isEqual,
  toNumber,
  map,
  join,
  keys,
  find,
  filter,
  last,
  words,
  upperCase,
  includes
} from 'lodash'
import axios from 'axios'

import { Flex, Box, Text, Label, Input, Button } from 'rebass'
import { VelocityTransitionGroup } from 'velocity-react'

import Section from './Section'
import SectionHeading from './SectionHeading'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      address: '',
      loading: false,
      rep: {}
    }
    this.onKey = this.onKey.bind(this)
    this.onClick = this.onClick.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  onKey(value, keyCode, e) {
    const val = trim(value)
    if (!isEqual(val, this.state.address)) {
      this.setState({ address: val })
    }
    // When you press return
    if (isEqual(keyCode, 13)) {
      this.onClick()
    }
  }

  fetchData() {
    const { address } = this.state
    this.setState({ loading: true })
    const payload = {
      key: 'AIzaSyAC098ZQK-jP_Q5fRpG_0of9LCTvOtdEFA',
      address,
      fields: 'divisions,officials',
      includeOffices: true.toString()
    }
    const query = map(keys(payload), key =>
      join(map([key, payload[key]], encodeURIComponent), '=')
    )
    const keyMatch = key =>
      key.match(
        /ocd-division\/country:us\/(?:state|district):(\w+)(?:\/cd:)(\d+)/
      )
    const url = `https://www.googleapis.com/civicinfo/v2/representatives?${join(
      query,
      '&'
    )}`
    axios
      .get(url)
      .then(r => {
        const res = r.data
        const divKey = find(keys(res.divisions), key => keyMatch(key))
        const state = upperCase(keyMatch(divKey)[1])
        const district = state === 'dc' ? 1 : toNumber(divKey.match(/\d+$/)[0])

        const record = res.divisions[divKey]
        const official = res.officials[record.officeIndices[0] + 1]
        console.log(official)

        if (state && district) {
          const record = official
          record.lastName = last(words(official.name))
          record.state = state
          console.log(record)
          this.setState({ loading: false, rep: record })
        }
      })
      .catch(e => {
        console.error(e)
      })
  }

  onClick(e) {
    if (!isEmpty(this.state.address)) {
      this.fetchData()
    }
  }

  render() {
    const { loading, rep } = this.state
    return (
      <Section>
        <SectionHeading name="Find your legislators…" />
        <Flex align="flex-end" mb={2}>
          <Box pr={2} style={{ flex: 1 }}>
            <Label htmlFor="addressInput" children="Enter your US address" />
            <Input
              name="address"
              id="addressInput"
              placeholder="1 Infinite Loop, Cupertino, CA"
              onKeyDown={e => this.onKey(e.target.value, e.keyCode)}
              w={1}
              style={{ height: 32 }}
            />
          </Box>
          <Box pt={2}>
            <Button
              bg="green"
              color="white"
              children="Search"
              onClick={e => this.onClick(e)}
            />
          </Box>
        </Flex>
        {(loading || rep) && <SearchResults loading={loading} rep={rep} />}
      </Section>
    )
  }
}

const SearchResults = ({ loading, rep, ...props }) => (
  <VelocityTransitionGroup
    component="section"
    enter={{ animation: 'slideDown', duration: 256 }}
    leave={{ animation: 'slideUp', duration: 256 }}
  >
    {!isEmpty(rep) ? (
      <Button
        is="a"
        href={`#${rep.state}-${rep.lastName}`}
        title="Tap to jump to Congressperson"
        bg="red"
        children={`Jump to ${rep.name}`}
      />
    ) : (
      loading && <Text color="midgray" children="Loading…" />
    )}
  </VelocityTransitionGroup>
)

export default Search
