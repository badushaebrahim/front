import { CardActionArea } from '@mui/material'
import React from 'react'
var imageName = require('./assets/Celebration.gif')
function Submited() {
	return (
		<div>
		<center>
			<CardActionArea>
				<h1>Loan Submited </h1>
			</CardActionArea>
			<image src={imageName} alt="my-gif" />
			
			</center>
		</div>
	)
}

export default Submited
