import React from 'react'
import { Button } from '@mui/material'

const Diagnosis = () => {
	return (
		<div className='diagnosis'>
			<div className='diagnosis__text'>Ready to get started?</div>
			<div className='diagnosis__buttonWrapper'>
				<Button disableRipple className='diagnosis__button'>
					Get the App
				</Button>
				<div style={{ width: '20px' }}></div>
				<Button disableRipple className='diagnosis__button2'>
					Get in Touch
				</Button>
			</div>
		</div>
	)
}

export default Diagnosis
