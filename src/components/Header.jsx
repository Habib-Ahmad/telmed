import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import { Menu } from '@mui/icons-material'
import phone from '../assets/images/home_screen_desktop.png'
import phoneMobile from '../assets/images/home_screen_mobile.png'
import appleStore from '../assets/images/apple_store_desktop.png'
import playStore from '../assets/images/google_play_desktop.png'
import appleStoreMobile from '../assets/images/apple_store_mobile.png'
import playStoreMobile from '../assets/images/google_play_mobile.png'
import logo from '../assets/images/logo_white_desktop.png'
import logoMobile from '../assets/images/logo_white_mobile.png'
import useWindowDimensions from './useWindowDimensions'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Header() {
	const [state, setState] = React.useState({
		menu: false
	})

	const toggleDrawer = (anchor, open) => (event) => {
		console.log(event.type)
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return
		}

		setState({ ...state, [anchor]: open })
	}

	useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])
	
	// eslint-disable-next-line no-unused-vars
	const { height, width } = useWindowDimensions()

	return (
		<div className='header'>
			<div className='header__top'>
				<div className='header__topLeft'>
					{width < 992 ? <img src={logoMobile} alt='Mobile logo' /> : <img src={logo} alt='logo' />}
					<div style={{ color: 'white' }}>
						<i style={{ color: 'red' }}>AI</i>Med
					</div>
				</div>
				<div className='header__topRight'>
					<Button disableRipple className='header__topRightItem' href='#about'>
						About
					</Button>
					<Button disableRipple className='header__topRightItem' href='#features'>
						Features
					</Button>
					<Button disableRipple className='header__topRightItem' href='#services'>
						Services
					</Button>
					<Button disableRipple className='header__topRightItem'>
						Download
					</Button>
					<Menu className='header__menu' onClick={toggleDrawer('menu', true)} />
				</div>
			</div>
			<div className='header__bottom'>
				<div className='header__left' data-aos='fade-up' data-aos-once='true' data-aos-easing='ease-in-out'>
					<div className='header__leftText1'>Brilliance in Healthcare</div>
					<div className='header__leftText2'>
						<i>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.
						</i>
					</div>
					<div className='header__leftButtons'>
						{width < 360 ? (
							<div style={{ display: 'block' }}>
								<Button disableRipple className='header__button'>
									<img
										className='header__buttonIcon'
										src={appleStoreMobile}
										alt='Available in the apple store'
									/>
								</Button>
								<div style={{ width: '30px' }}></div>
								<Button disableRipple className='header__button'>
									<img className='header__buttonIcon' src={playStoreMobile} alt='' />
								</Button>
							</div>
						) : width < 600 ? (
							<>
								<Button disableRipple className='header__button'>
									<img
										className='header__buttonIcon'
										src={appleStoreMobile}
										alt='Available in the apple store'
									/>
								</Button>
								<div style={{ width: '30px' }}></div>
								<Button disableRipple className='header__button'>
									<img className='header__buttonIcon' src={playStoreMobile} alt='' />
								</Button>
							</>
						) : (
							<>
								<Button disableRipple className='header__button'>
									<img
										className='header__buttonIcon'
										src={appleStore}
										alt='Available in the apple store'
									/>
								</Button>
								<div style={{ width: '30px' }}></div>
								<Button disableRipple className='header__button'>
									<img className='header__buttonIcon' src={playStore} alt='' />
								</Button>
							</>
						)}
					</div>
				</div>
				<div className='header__right' data-aos='fade-up' data-aos-delay='200' data-aos-easing='ease-in-out'>
					{width < 600 ? (
						<img className='header__img' src={phoneMobile} alt='' />
					) : (
						<img className='header__img' src={phone} alt='' />
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
