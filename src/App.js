import React, {Component} from 'react'
import Header from './Header'
import ImageCarousel from './ImageCarousel'
import About from './About'
import Staff from './Staff'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'



class App extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return(
			<div>
				<Header />
				<ImageCarousel />
				<About />
				<Staff />
				<Testimonials />
				<Contact />
				<Footer />
			</div>
		)
	}
}


export default App

