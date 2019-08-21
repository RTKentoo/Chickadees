import React from 'react'
import styled from 'styled-components'
import StaffCard from './StaffCard'

const StaffOuterMainWrapper = styled.div`
	display: grid
	grid-template-rows: 10% 90%;
	background-color: #E0EDED;
	text-align: center;
	height: 55em;
	font-family: "Yrsa", Georgia, serif;
	font-weight: 300;
	color: #1e4e42;

	> h2 {
		margin-bottom: 1em;
		font-size: 2em;
	}

`

const StaffMainWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: auto;
	height: 800px;
	
`


function Staff() {
	return(
		<StaffOuterMainWrapper>
			<h2>Meet Our Teachers</h2>
			<StaffMainWrapper>
				<StaffCard 
					staffName="Chelsea Pirkle"
					portrait="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/31084213_10214501302499169_4018824293554061312_n.jpg?_nc_cat=111&_nc_oc=AQkIWwF-AW5GVIjvAifUl4hPJzT1GFd1SXhroAnM2kaodntkkgYrBldC_jzme2F4mcg&_nc_ht=scontent-ort2-2.xx&oh=d27e79216f438bbffb0fc2cfa876db27&oe=5DCCD30B"
					bio={"Chelsea was born in Olympia and is proud to be part of such a progressive, artistic, and environmentally conscious community. "
					+ "Having volunteered for the local non-profit organizations SafePlace and Stand Up for Kids, she has years of experience working with "
					+ "underprivileged, disadvantaged, and victimized populations. Her sense of humor, compassion, and love for exploring bring a valuable energy to the preschool."}/>

				<StaffCard 
					staffName="Scott Pirkle"
					portrait="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/15073485_10210456093013144_522636442475105004_n.jpg?_nc_cat=104&_nc_oc=AQnwX7uXjigbisQtURLcaWAE7wNyU8UaIEL7JWs2mRnlcCZva4LPUcSy8YLVvu11JUc&_nc_ht=scontent-ort2-2.xx&oh=317c5d7d5fe389b44d4b3f6c5cce410a&oe=5DE45291"
					bio={"Scott began his childcare career right here at Chickadees as an assistant to his sister, Leigha. He quickly discovered his knack "
					+ "for working with children, and genuinely loves his job while adopting and forming his own childcare philosophies. He has a creative soul, "
					+ "a deep appreciation for the power of music, language, and art as a whole. He is so thankful to be able to share these passions "
					+ "with children, and loves to help them explore different creative outlets."} />

			</StaffMainWrapper>
		</StaffOuterMainWrapper>
	)
}


export default Staff