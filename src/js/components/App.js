import React, {createContext} from "react"
import styled from 'styled-components'
import Palette from 'components/Palette'

// Simulate a database
import {swatches} from 'data/swatches.js'

const AppDiv = styled.div`
	display: grid;
	position: fixed;
	width: 100%;
	height: 100%;
`

// Call a hook
export const ColorContext = createContext({})

const updateTheData = (data) => {
	console.log("Updating your data...", data)
}


const App = () => {
	return (
		<ColorContext.Provider value={ {updater: updateTheData, data: swatches} }>
			<AppDiv>
				<Palette swatches={swatches} />
			</AppDiv>
		</ColorContext.Provider>
	)
}

export default App