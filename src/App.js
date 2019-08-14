import React, {Component} from 'react'
import Header from './Components/Header/Header'
import ImageCarousel from './Components/Main/ImageCarousel/ImageCarousel'
import About from './Components/Main/About/About'
import Staff from './Components/Main/Staff/Staff'
import Testimonials from './Components/Main/Testimonials/Testimonials'
import Contact from './Components/Main/Contact/Contact'
import Footer from './Components/Footer/Footer'



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

