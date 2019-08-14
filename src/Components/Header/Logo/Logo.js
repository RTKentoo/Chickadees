import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.header`
	width: auto;
	display: flex;
	max-height: 60px;

	> img {
		max-height: 60px;
		min-width: 100px;
	}

	> a {
		color: #4b766b;
		text-decoration: none;
		font-weight: lighter;
		font-size: 47px;
		padding: 0 10px 0 10px;
	}
`

function Logo() {
	return(
		<LogoWrapper>
			<img 
				src="https://chickadeesdayschool.files.wordpress.com/2018/01/logo3.png" 
				alt="Chickadees Day School"
				/>
			<a href="www.google.com" >Chickadees Day School</a>
		</LogoWrapper>
	)
}

export default Logo