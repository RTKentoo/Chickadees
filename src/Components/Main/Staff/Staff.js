import React from 'react'
import styled from 'styled-components'
import StaffCard from './StaffCard'

const StaffMainWrapper = styled.div`
	background-color: #E0EDED;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: auto;
	height: 600px;
`


function Staff() {
	return(
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
			<StaffCard 
				staffName="Leigha Pirkle"
				portrait="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/20882840_10211672477181814_5403369584409901014_n.jpg?_nc_cat=102&_nc_oc=AQlXotv_AlVTtgCjg4oQ-iSkJHfoPgw9FqPd5sM8ijqO-2Es6qRfQt3LB1ANxaDvDdM&_nc_ht=scontent-ort2-2.xx&oh=c156e76d6b0df9f92f29d986baefeec4&oe=5DE1448D"
				bio={"In founding Chickadees Day School, Leigha set out to provide a pre-kindergarten space for parents who value quality care, indoor and "
				+ "outdoor play, learning though nature, school readiness, social and emotional health, and environmental awareness. A mother herself, Leigha is "
				+ "very aware and understanding of parents’ childcare needs, challenges, and hopes. Her immediate goal at Chickadees has always been for each child "
				+ "to feel at home and part of our family."} />

		</StaffMainWrapper>
	)
}


export default Staff