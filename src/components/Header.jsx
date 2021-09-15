import React from 'react'
import { Button } from '@material-ui/core'
import iphone from '../assets/images/phone1_resized.jpg'
import appleStore from '../assets/images/apple_store2.png'
import playStore from '../assets/images/google_play2.png'
import logo from '../assets/images/logo_resized.png'

function Header() {
	return (
		<div className='header'>
			<div className='header__top'>
				<div className='header__topLeft'>
					<img src={logo} alt='' />
					<div><i style={{color: 'red'}}>AI</i>Med</div>
				</div>
				<div className='header__topRight'>
					<Button disableRipple className='header__topRightItem'>
						About
					</Button>
					<Button disableRipple className='header__topRightItem'>
						Features
					</Button>
					<Button disableRipple className='header__topRightItem'>
						How to Use
					</Button>
					<Button disableRipple className='header__topRightItem'>
						Download
					</Button>
				</div>
			</div>
			<div className='header__bottom'>
				<div className='header__left'>
					<div className='header__leftText1'>Brilliance in Healthcare</div>
					<div className='header__leftText2'>
						<i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.</i>
					</div>
					<div className='header__leftButtons'>
						<Button disableRipple className='header__button'>
							<img className='header__buttonIcon' src={appleStore} alt='Available in the apple store' />
						</Button>
						<div style={{ width: '30px' }}></div>
						<Button disableRipple className='header__button'>
							<img className='header__buttonIcon' src={playStore} alt='' />
						</Button>
						<div style={{ width: '30px' }}></div>
						{/* <Button disableRipple className='header__button2'>
							Get the App
						</Button> */}
					</div>
				</div>
				<div className='header__right'>
					<img className='header__img' src={iphone} alt='' />
				</div>
			</div>
		</div>
	)
}

export default Header
