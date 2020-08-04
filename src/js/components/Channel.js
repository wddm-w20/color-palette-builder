import React from "react"
import styled, { css } from 'styled-components'

const ChannelDiv = styled.div`
  text-align: center;
`
const channelComponents = css`
  font: 1.5em monospace;
  display: block;
  margin: auto;
  width: 100%;
  text-align: center;
`
const ValueInput = styled.input`
  ${channelComponents}
`
const UpDownButton = styled.button`
  ${channelComponents}
  font-size: 1em;
  border-radius: 0;
  line-height: 1;
`

const Channel = () => {
  return (
    <div className="channel r">
      <UpDownButton type="button">+</UpDownButton>
      <ValueInput type="text" />
      <UpDownButton type="button">-</UpDownButton>
    </div>
  )
}

export default Channel