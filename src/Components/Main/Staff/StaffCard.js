import React, {Component} from 'react'
import styled from 'styled-components'


const StaffCardWrapper = styled.div`
	display: grid
		grid-template-columns: 100%;
		grid-template-rows: 50% 10% 40%;
	height: 90%;
	width: 27em;
	margin-bottom: 3em;
	background-color: #B5D3D2;
	border: 0px solid #1e4e42;
	border-radius: 2%;
	box-shadow: 10px 5px 15px #888888;
`

const StaffPortraitWrapper = styled.div`
	margin: 10px 20px 0 20px;
	border: 3px solid #1e4e42;
	border-radius: 50%;
	overflow: hidden;
	box-shadow: 5px 2px 15px #888888;

	> img {
		max-width: 100%;
	}
`

const StaffNameWrapper = styled.div`
	font-family: "Yrsa", Georgia, serif;
	font-size: 1.3em;
	text-weight: lighter;
	text-align: center;
	color: #1e4e42;
	padding-top: 1em;
`

const StaffBioWrapper = styled.div`
	color: #1e4e42;
	background-color: #E0EDED;
	border-radius: 3%;
	text-align: left;
	height: 90%;
	padding: 5px 10px 5px 10px;
	max-width: auto;
`

class StaffCard extends Component {
	constructor(props) {
		super()
		this.state = {}
	}

	render() {
		return(
			<StaffCardWrapper>
			
				<StaffPortraitWrapper>
					<img src={this.props.portrait} alt="" />
				</StaffPortraitWrapper>

				<StaffNameWrapper>
					<h3>{this.props.staffName}</h3>
				</StaffNameWrapper>

				<StaffBioWrapper>
					{this.props.bio}
				</StaffBioWrapper>

			</StaffCardWrapper>
		)
	}


}

export default StaffCard