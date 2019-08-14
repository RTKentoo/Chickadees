import React, {Component} from 'react'
import styled from 'styled-components'

const NavMenuWrapper = styled.div`
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

class NavMenu extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return(
			<NavMenuWrapper>
				<ul>
					<a href="#"><li>Home</li></a>
					<a href="#"><li>Curriculum</li></a>
					<a href="#"><li>About Us</li></a>
					<a href="#"><li>Contact</li></a>
				</ul>
			</NavMenuWrapper>
		)
	}
}


export default NavMenu