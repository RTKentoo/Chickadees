import React, {Component} from 'react'
import styled from 'styled-components'

const TestimonialsWrapper = styled.div`
	height: 350px;
	border: none;
	overflow: hidden;

`

class Testimonials extends Component {
	constructor() {
		super()
		this.state ={}
	}

	render() {
		return(
			<TestimonialsWrapper>
				<div>
					<iframe 
						src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Filene.stohl%2Fposts%2F966659840076855%3A0&width=500" 
						width="500" 
						height="358" 
						scrolling="no" 
						frameborder="0" 
						allowTransparency="true" 
						allow="encrypted-media">
					</iframe>
				</div>
			</TestimonialsWrapper>
		)
	}
}

export default Testimonials