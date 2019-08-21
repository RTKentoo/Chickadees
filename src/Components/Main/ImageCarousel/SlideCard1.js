import React from 'react'
import styled from 'styled-components'

const SlideBodyWrapper = styled.div`
	border-top: 1px solid #B5D3D2;
	border-bottom: 1px solid #B5D3D2;
	margin-top: 2.5em;
	height: 450px;
	background: url(https://picsum.photos/2000/450) no-repeat center center fixed;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;

`

const SlideCard1TextWrapper = styled.div`
	background-color: white;
	max-width: 350px;
	margin-left: 14em;
	margin-top: 4em;
	padding: 0 1em .5em 1em;
	border-radius: 5%;
	text-align: left;
	color: #4b766b;

	> p {
		line-height: 1.5;
	}
	
`

const TitleWord = styled.span`
	text-align: left;
	font-size: 50px;
`

function SlideCard1() {
	return(
		<SlideBodyWrapper>
			<SlideCard1TextWrapper>
					<p><TitleWord>Cultivate</TitleWord><br /> emotional health by allowing children to be heard, 
					respected, and loved. We support and guide children in naming 
					and feeling their emotions.</p>
			</SlideCard1TextWrapper>
		</SlideBodyWrapper>
	)
}

export default SlideCard1