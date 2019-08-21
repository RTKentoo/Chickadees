import React, {Component} from 'react'
import styled, {css} from 'styled-components'
import makeCarousel from 'react-reveal/makeCarousel'
import SlideCard1 from './SlideCard1'
import SlideCard2 from './SlideCard2'
import SlideCard3 from './SlideCard3'
import Slide from 'react-reveal/Slide'

const width = 'auto', height = '500px'

const Container = styled.div`
  position: relative;
  overflow: hidden;
  max-width: ${width};
  text-align: center;
  background-color: #E0EDED;
`

const Children  = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`

const Arrow = styled.span`
	text-shadow: 1px 1px 1px #fff;
	z-index: 100;
	line-height: ${height};
	text-align: center;
	position: absolute;
	top: 0;
	width: 10%;
	font-size: 3em;
	cursor: pointer;
	user-select: none;
	${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`

const Dot = styled.span`
	font-size: 1.5em;
	cursor: pointer;
	text-shadow: 1px 1px 1px #fff;
	user-select: none;
`

const Dots = styled.span`
	text-align: center;
	width: ${width};
	z-index: 100;
`

const CarouselUI = ({ position, total, handleClick, children }) => (
	<Container>
	  <Children>
	    {children}
	    <Arrow onClick={handleClick} data-position={position - 1}><strong>{'<'}</strong></Arrow>
	    <Arrow right onClick={handleClick} data-position={position + 1}><strong>{'>'}</strong></Arrow>
	  </Children>
	  <Dots>
	    {Array(...Array(total)).map( (val, index) =>
	      <Dot key={index} onClick={handleClick} data-position={index}>
	        {index === position ? '● ' : '○ ' }
	      </Dot>
	    )}
	  </Dots>
	</Container>
)

const Carousel = makeCarousel(CarouselUI)



class ImageCarousel extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return(
			<Carousel>
				<Slide right>
						<SlideCard1 />
				</Slide>
				<Slide right>
					<SlideCard2 />
				</Slide>
				<Slide right>
					<SlideCard3 />
				</Slide>
			</Carousel>
		)
	}
}


export default ImageCarousel