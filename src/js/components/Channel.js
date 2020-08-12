import React, {useContext} from "react"
import styled, { css } from 'styled-components'
import {ColorContext} from 'components/App'

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

const Channel = ({value, onChannelUpdate}) => {
  console.log("Channel")

  // state variable: combines a global variable, with a setter function
  //let [channelValue, setChannelValue] = useState(value)
  // When a state variable changes, the component rerenders
  const channelValue = value

  // Subscribe to the Context from the App. useContext returns the "value" prop, from the Provider
  const {updater} = useContext(ColorContext)

  const updateChannel = (v) => {
    v = parseInt(v)

    if (v < 0) {
      v = 0
    } else if (v > 255) {
      v = 255
    } else if (!v) {
      v = 0
    }

    // Update the UI by changing a state variable in Swatch
    onChannelUpdate(v)

    // Update the data up in the controller (App)
    updater(v)
  }

  return (
    <ChannelDiv className="channel r">
      <UpDownButton type="button" onClick={(event) => updateChannel(channelValue + 1)}>+</UpDownButton>
      <ValueInput type="text" value={channelValue} onChange={(event) => updateChannel(parseInt(event.currentTarget.value))} />
      <UpDownButton type="button" onClick={(event) => updateChannel(channelValue - 1)}>-</UpDownButton>
    </ChannelDiv>
  )
}

export default Channel