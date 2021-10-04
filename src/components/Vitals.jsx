import React from 'react'
import phone from '../assets/images/vitals_desktop.png'
import phoneMobile from '../assets/images/vitals_mobile.png'
import watch from '../assets/images/smart_watch.jpeg'
import useWindowDimensions from './useWindowDimensions'

const Vitals = () => {
	// eslint-disable-next-line no-unused-vars
	const { height, width } = useWindowDimensions()

	return (
		<div id='#features' className='vitals'>
			<div className='vitals__left' data-aos='fade-right' data-aos-once='true' data-aos-easing='ease-in-out'>
				<div className='vitals__leftText1'>Track your vitals</div>
				<div className='vitals__leftText2'>
					Monitor your blood pressure, body temperature, level of hydration and so much more when you use
					AIMed with our smart watch
				</div>
			</div>
			<div className='vitals__right'>
				<img className='vitals__rightImg1' src={watch} alt='' />
				{width < 600 ? (
					<img className='vitals__rightImg2' src={phoneMobile} alt='' />
				) : (
					<img className='vitals__rightImg2' src={phone} alt='' />
				)}
			</div>
		</div>
	)
}

export default Vitals
