import React from 'react'
import Particles from './Particles'
import logo from '../assets/images/logo_white.png'
import logo2 from '../assets/images/algorizmi_logo_white_resized.png'

const ComingSoon = () => {
	return (
		<div>
			<div className='particle'>
				<Particles />
			</div>
			<div className='comingSoon'>
				<img className='comingSoon__img' src={logo} alt='' />

				<h1 className='comingSoon__text1'>
					<i style={{ color: 'red' }}>AI</i>Med
				</h1>

				<h1 className='comingSoon__text2'>
					<i>Coming soon...</i>
				</h1>

				<div className='comingSoon__footer'>
					<img className='comingSoon__img2' src={logo2} alt='' />
					<div className='comingSoon__text3'>
						Powered by <span style={{ fontSize: '22px' }}>Algorizmi Health</span>
					</div>
				</div>

				<div style={{ marginBottom: '30px' }}></div>
				<div className='comingSoon__text4'>
					For enquiries: <strong>info@aimedicare.com.ng</strong>
				</div>
			</div>
		</div>
	)
}

export default ComingSoon
