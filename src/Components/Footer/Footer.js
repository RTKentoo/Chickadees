import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
	display: flex;
	color: #477474;
	background-color: #f7f7f7;
	padding: 10px;
	font-size: 14px;
`

const FooterTextWrapper = styled.div`
	text-align: left;
	width: 50%;

	> a {
		color: #4b766b;
		text-decoration: none;
	}
`

function Footer() {
	return(
		<FooterWrapper>
			<FooterTextWrapper>
				©2019 Chickadees Day School - All Rights Reserved.
			</FooterTextWrapper>

			<FooterTextWrapper>
				Created by <a href='www.google.com' target='_blank'>Kent Taylor</a>
			</FooterTextWrapper>
		</FooterWrapper>
	)
}

export default Footer