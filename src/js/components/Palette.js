import React from "react"
import styled from 'styled-components'
import 'css/Palette.css'

/* 
const paletteStyle = {
  display: 'grid'
}

const swatchStyle = {
  color: 'white',
  backgroundColor: 'rgb(0,0,0)'
}
 */

const PaletteUl = styled.ul`
  display: grid;
`
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

const Palette = () => {
  return (
    <PaletteUl>
      <SwatchLi>
        <RgbStart>rgb(</RgbStart>
        <div className="channel r">
          <button type="button" className="btn up">+</button>
          <input type="text" name="red" className="txt" />
          <button type="button" className="btn down">-</button>
        </div>
        <div className="channel g">
          <button type="button" className="btn up">+</button>
          <input type="text" name="green" className="txt" />
          <button type="button" className="btn down">-</button>
        </div>
        <div className="channel b">
          <button type="button" className="btn up">+</button>
          <input type="text" name="blue" className="txt" />
          <button type="button" className="btn down">-</button>
        </div>
        <RgbEnd>);</RgbEnd>
      </SwatchLi>
    </PaletteUl>
  )
}

export default Palette