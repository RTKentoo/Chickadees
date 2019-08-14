import React, {Component} from 'react'
import styled from 'styled-components'

const StaffCardWrapper = styled.div`
	display: grid
		grid-template-columns: 100%;
		grid-template-rows: 50% 10% 40%;
	

	background-color: #B5D3D2;
	border: 0 solid #1e4e42;
	border-radius: 2%;
	height: 90%;
	width: 20em;
	justify-content: center;
	box-shadow: 10px 5px 15px #888888;
	padding-bottom: 10px;
	object-fit: contain;

`

const StaffPortraitWrapper = styled.div`
	margin: 10px 20px 0 20px;
	border: 3px solid #1e4e42;
	border-radius: 50%;
	height: 100%;
	overflow: hidden;

	> img {
		max-width: 100%;
		
	}
`

const StaffNameWrapper = styled.div`
	font-family: "Yrsa", Georgia, serif;
	text-weight: lighter;
	text-align: center;
	color: #1e4e42;
	padding-top: 5px;
`

const StaffBioWrapper = styled.div`
	color: #1e4e42;
	text-align: left;
	margin: 0 5px 0 5px;
	padding: 5px 10px 5px 10px;
	border: 0px solid #1e4e42;
	height: auto%;
	width: auto;
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
					<img src={this.props.portrait} />
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