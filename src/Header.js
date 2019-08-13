import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
	display: flex;
	padding: 20px 20px 20px 20px;
	justify-content: space-between;
	align-items: center;
	height: auto;
	
`

const Logo = styled.header`
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

const NavMenu = styled.div`
	align-items: center;
	margin-right: 10em;
	width: auto;
	
	font-size: 20px;
	font-family: "Karla";
	font-weight: 300;

	> ul {
		display: flex;
		list-style-type: none;
		width: auto;
	}

	> ul, li {
		padding: 0 30px 0 30px;
		font-family: "Karla";

	}

	> ul, li, a {
		text-decoration: none;
		color: #4b766b;
	}

`

const SocialMedia = styled.div`
	> ul {
		align-items: center;
		justify-content: space-around;
		display: flex;
		list-style-type: none;
	}

	> ul, li {
		padding: 0 10px 0 10px;
		font-size: 20px;
		font-family: "Karla";
		font-weight: 700;
	}

	> ul, li, img {
		max-height: 25px;
	}

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
			<Logo>
				<img 
					src="https://chickadeesdayschool.files.wordpress.com/2018/01/logo3.png" 
					alt="Chickadees Day School"
					/>
				<a href="www.google.com" >Chickadees Day School</a>
			</Logo>
			<NavMenu>
				<ul>
					<a href="#"><li>Home</li></a>
					<a href="#"><li>Curriculum</li></a>
					<a href="#"><li>About Us</li></a>
					<a href="#"><li>Contact</li></a>
				</ul>
			</NavMenu>

			{/** <SocialMedia>
				<ul>
					<li>
						<a href="https://www.facebook.com/chickadeesdayschool/" target="_blank">
						<img 
							src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png" 
							alt="Facebook" />
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
						<img 
							src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-512.png" 
							alt="Instagram"/>
						</a>
					</li>
				</ul>
			</SocialMedia> **/}

		</HeaderWrapper>
	)
}


export default Header