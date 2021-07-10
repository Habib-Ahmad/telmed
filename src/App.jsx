import React from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import AskQuestions from './components/AskQuestions'
import VirtualCalls from './components/VirtualCalls'
import SymptomChecker from './components/SymptomChecker'

function App() {
	return (
		<div className='app'>
			<NavBar />
			<Header />
			<AskQuestions />
			<VirtualCalls />
			<SymptomChecker />
		</div>
	)
}

export default App
