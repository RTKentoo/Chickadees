import React from 'react'
import styled from 'styled-components'

const SlideBodyWrapper = styled.div`
	border-top: 1px solid #B5D3D2;
	border-bottom: 1px solid #B5D3D2;
	margin-top: 2.75em;
	height: 450px;
	background: url(https://picsum.photos/2001/450) no-repeat center center fixed;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
` 

const SlideCard2Wrapper = styled.div`
	box-shadow: 5px 2px 15px #888888;
	background-color: white;
	max-width: 20%;
	margin-left: 14em;
	margin-top: 13em;
	padding: 0 1em .5em 1em;
	border-radius: 5%;
	color: #4b766b

	> div { 
		text-align: left;
	}

	> div p {
		line-height: 1.5;
	}
`
const TitleWord = styled.span`
	text-align: left;
	font-size: 3.5em;
`

function SlideCard2() {
	return(
		<SlideBodyWrapper>
			<SlideCard2Wrapper>
				<div>
					<p><TitleWord>Support</TitleWord><br /> each child’s natural sense of 
					creativity, imagination, and curiosity.</p>
				</div>
			</SlideCard2Wrapper>
		</SlideBodyWrapper>
	)
}


export default SlideCard2