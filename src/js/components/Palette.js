import React from "react"
import styled from 'styled-components'
import Swatch from 'components/Swatch'

const PaletteUl = styled.ul`
  display: grid;
`

const Palette = ({swatches}) => {

  const swatchComponents = swatches.map((s, i) => <Swatch key={i} color={s} />)

  return (
    <PaletteUl>
      {swatchComponents}
    </PaletteUl>
  )
}

export default Palette