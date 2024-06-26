/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
    
}) => {
    return (
        <div className='card-container'>
            {imgSrc && imgAlt && <img
                src={imgSrc}
                alt={imgAlt}
                className='card-image'
            />}
            {title && <h1 className='card-title'>{title}</h1>}
            {description && <p className='card-description'>{description}</p>}
            {link && buttonText && <a href={link} className='card-btn'>{buttonText}</a>}
        </div>
    )
}

export default Card
