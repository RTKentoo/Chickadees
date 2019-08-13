import React, {Component} from 'react'
import styled from 'styled-components'

const ImageCarouselWrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 30px;
	background-color: #B5D3D2;
	height: 400px;
	justify-content: center;


`


class ImageCarousel extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return(
			<ImageCarouselWrapper>
				<h1>Image Carousel Here</h1>
			</ImageCarouselWrapper>
		)
	}
}


export default ImageCarousel