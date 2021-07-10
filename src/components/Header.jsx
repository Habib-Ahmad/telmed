import React from 'react'
import { Button } from '@material-ui/core'
import iphone from '../assets/images/header_img.png'
import appleStore from '../assets/images/apple_store.png'
import playStore from '../assets/images/google_play.png'

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<div className='header__leftText1'>
					Brilliance in Healthcare
				</div>
				<div className='header__leftText2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</div>
				<div className='header__leftButtons'>
					<Button disableRipple className='header__button'>
						<img
							className='header__buttonIcon'
							src={appleStore}
							alt='Available in the apple store'
						/>
					</Button>
					<div style={{ width: '30px' }}></div>
					<Button disableRipple className='header__button'>
						<img
							className='header__buttonIcon'
							src={playStore}
							alt=''
						/>
					</Button>
				</div>
			</div>
			<div className='header__right'>
				<img
					className='header__img'
					src={iphone}
					alt=''
				/>
			</div>
		</div>
	)
}

export default Header
