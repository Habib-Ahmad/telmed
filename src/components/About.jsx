import React, { useState, useEffect } from 'react'

const About = () => {
	const [state, setState] = useState(1)

	useEffect(() => {
		setTimeout(() => {
			let number = state
			number += 1
			number > 4 && (number = 1)
			setState(number)
		}, 3000)
	}, [state])

	return (
		<div id='about' className='about'>
			<div data-aos='fade-up' data-aos-once='true' data-aos-easing='ease-in-out'>
				<div className='about__text'>Consult a doctor anytime, anywhere by</div>
				{state === 1 && <div className='about__text2'>phone call</div>}
				{state === 2 && <div className='about__text2'>chat</div>}
				{state === 3 && <div className='about__text2'>query</div>}
				{state === 4 && <div className='about__text2'>video call</div>}
			</div>
		</div>
	)
}

export default About
