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
	return (
		<AppDiv className="app">
			<Palette />
		</AppDiv>
	)
	
}

export default App