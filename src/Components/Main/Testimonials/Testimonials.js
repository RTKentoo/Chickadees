import React, {Component} from 'react'
import styled from 'styled-components'

const TestimonialsWrapper = styled.div`
	height: 350px;

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
					Testimonials
				</div>
			</TestimonialsWrapper>
		)
	}
}

export default Testimonials