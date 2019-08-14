import React from 'react'
import styled from 'styled-components'
import NavMenu from './NavMenu/NavMenu'
import Logo from './Logo/Logo'
import SocialMedia from './SocialMedia/SocialMedia'

const HeaderWrapper = styled.div`
	display: flex;
	padding: 20px 20px 20px 20px;
	justify-content: space-between;
	align-items: center;
	height: auto;
	
`

const TagLine = styled.div`
	text-align: left;
	padding-top: 5px;
	color: #13b6bd;
	font-family: inherit;
	font-size: 18px;
`


function Header() {
	return(
		<HeaderWrapper>
			<Logo />
			<NavMenu />
			<SocialMedia />
		</HeaderWrapper>
	)
}


export default Header