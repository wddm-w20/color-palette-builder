import React from "react"
import styled from 'styled-components'
import Palette from 'components/Palette'

const AppDiv = styled.div`
	display: grid;
	position: fixed;
	width: 100%;
	height: 100%;
`

const App = () => {

	// Pretend this came from the database
	const swatches = [
		[255, 255, 0], 
		[0, 255, 0], 
		[0, 255, 255]
	]

	return (
		<AppDiv className="app">
			<Palette swatches={swatches} />
		</AppDiv>
	)
	
}

export default App