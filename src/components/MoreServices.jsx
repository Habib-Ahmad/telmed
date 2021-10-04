import React from 'react'
import { FaRegHospital } from 'react-icons/fa'
import { AiOutlineExperiment } from 'react-icons/ai'
import { GiMedicines } from 'react-icons/gi'

const MoreServices = () => {
	return (
		<div className='moreServices'>
			<div className='moreServices__item'>
				<div className='moreServices__itemLogo'>
					<FaRegHospital />
				</div>
				<div className='moreServices__itemText1'>Hospiatls</div>
				<div className='moreServices__itemText2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
			</div>
			<div className='moreServices__item'>
				<div className='moreServices__itemLogo'>
					<AiOutlineExperiment />
				</div>
				<div className='moreServices__itemText1'>Laboratories</div>
				<div className='moreServices__itemText2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
			</div>
			<div className='moreServices__item'>
				<div className='moreServices__itemLogo'>
					<GiMedicines />
				</div>
				<div className='moreServices__itemText1'>Pharmacies</div>
				<div className='moreServices__itemText2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
			</div>
		</div>
	)
}

export default MoreServices
