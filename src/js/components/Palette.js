import React from "react"
import styled from 'styled-components'
import Swatch from 'components/Swatch'

const PaletteUl = styled.ul`
  display: grid;
`

const Palette = () => {
  return (
    <PaletteUl>
      <Swatch />
    </PaletteUl>
  )
}

export default Palette