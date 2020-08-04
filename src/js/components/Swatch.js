import React from "react"
import styled from 'styled-components'
import Channel from 'components/Channel'

const SwatchLi = styled.li`
  color: white;
  background-color: rgb(0,0,0);
  font-size: 1.5em;
  text-align: center;
  display: grid;
  grid-gap: 0.25em;
  grid-template-columns: 1fr 3em 3em 3em 1fr;
  align-content: center;
  text-shadow: 0 0 2px #000;
`
const RgbStart = styled.div`
  text-align: right;
  align-self: center;
`
const RgbEnd = styled.div`
  text-align: left;
  align-self: center;
`

const Swatch = () => {
  return (
    <SwatchLi>
      <RgbStart>rgb(</RgbStart>
      <Channel value={255} />
      <Channel value={0} />
      <Channel value={0} />
      <RgbEnd>);</RgbEnd>
    </SwatchLi>
  )
}

export default Swatch