import React from 'react'
import styled from 'styled-components'
import FacebookLogo from './FacebookLogo.png'
import InstagramLogo from './InstagramLogo.png'

const SocialMediaWrapper = styled.div`
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

function SocialMedia() {
	return(
		<SocialMediaWrapper>
			<ul>
				<li>
					<a href="https://www.facebook.com/chickadeesdayschool/" target="_blank">
					<img 
						src={FacebookLogo} 
						alt="Facebook" />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/explore/locations/144028309310290/chickadees-day-school/" target="_blank">
					<img 
						src={InstagramLogo}
						alt="Instagram"/>
					</a>
				</li>
			</ul>
		</SocialMediaWrapper> 
	)
}


export default SocialMedia