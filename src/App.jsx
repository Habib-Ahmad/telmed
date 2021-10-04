import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Vitals from './components/Vitals'
import Medications from './components/Medications'
import MoreServices from './components/MoreServices'
import Services from './components/Services'
import Diagnosis from './components/Diagnosis'
import Footer from './components/Footer'

function App() {
	return (
		<div className='app'>
			<Header />
			<About />
			<Vitals />
			<Medications />
			<MoreServices />
			<Services />
			<Diagnosis />
			{/* <Footer /> */}
		</div>
	)
}

export default App
