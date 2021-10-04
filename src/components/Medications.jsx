import React from 'react'
import phone from '../assets/images/drug_screen_desktop.png'
import phoneMobile from '../assets/images/drug_screen_mobile.png'
import useWindowDimensions from './useWindowDimensions'

const Medications = () => {
	// eslint-disable-next-line no-unused-vars
	const { height, width } = useWindowDimensions()
	return (
		<div className='medications'>
			<div className='medications__left' data-aos='fade-left' data-aos-once='true' data-aos-easing='ease-in-out'>
				<div className='medications__leftText1'>Take the stress out of taking your medications</div>
				<div className='medications__leftText2'>
					Get access to drug information, personalized reminders for each of your medications and vital drug
					interaction warnings. Stay connected to your caregivers through real-time missed medication alerts.
				</div>
			</div>
			<div className='medications__right'>
				{width < 600 ? (
					<img className='medications__rightImg' src={phoneMobile} alt='' />
				) : (
					<img className='medications__rightImg' src={phone} alt='' />
				)}
			</div>
		</div>
	)
}

export default Medications
