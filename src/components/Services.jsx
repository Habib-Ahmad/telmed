import React from 'react'
import Card from './cards/Card'
import { GiStethoscope, GiHeartOrgan } from 'react-icons/gi'
import { FaTooth, FaBrain, FaRegEye } from 'react-icons/fa'
import { IoFlower } from 'react-icons/io5'

const Services = () => {
	return (
		<div className='services'>
			<div className='services__text1'>Our Solutions</div>
			<div className='services__text2'>
				We offer a myraid of high quality services for common health issues, as well as emotional and mental
				concerns. These are just a few...
			</div>
			<div className='services__cardWrapper'>
				<Card
					title='Primary Care'
					logo={<GiStethoscope />}
					text='Adults and children can be treated 24/7 for routine or urgent health issues'
					color='rgb(229, 75, 75)'
				/>
				<Card
					title='Dentistry'
					logo={<FaTooth />}
					text='Treat tooth and gum pain, inflammation infection, chipped and broken teeth'
					color='rgb(8, 96, 95)'
				/>
				<Card
					title='Dermatology'
					logo={<IoFlower />}
					text='Cold sores, insect bites, rashes, dark spots, eczema, moles and more'
					color='rgb(221, 110, 66)'
				/>
				<Card
					title='Mental Health'
					logo={<FaBrain />}
					text='A discrete, safe and convenient way for patients to discuss personal health concerns'
					color='rgb(59, 118, 168)'
				/>
				<Card
					title='Surgery'
					logo={<GiHeartOrgan />}
					text=' General surgery, gynecology and obstetrics, ophthalmic surgery, breast surgery and more'
					color='rgb(232 136 49)'
				/>
				<Card
					title='Opthamology'
					logo={<FaRegEye />}
					text='Prescription glasses, laser eye surgery, cataract and primary eye care service'
					color='rgb(91, 80, 122)'
				/>
			</div>
		</div>
	)
}

export default Services
