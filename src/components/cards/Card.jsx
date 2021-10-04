import React from 'react'

const Card = ({ title, logo, text, color }) => {
	return (
		<div className='card'>
			<div className='card__item'>
				<div className='card__title'>{title}</div>
				<div className='card__logo' style={{ backgroundColor: color }}>
					{logo}
				</div>
				<div className='card__text'>{text}</div>
				<div style={{color: '#3893bb'}}>Learn more</div>
			</div>
		</div>
	)
}

export default Card
