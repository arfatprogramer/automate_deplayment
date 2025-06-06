import React from 'react';
import './css/cards.css';

const Cards = ({ heading, alt, src, about, link, codelink }) => {

    return (
        <div className='card-div'>
            <img className='card-img' src={src} alt={alt} />
            <h2>{heading}</h2>
            <p>{about}</p>
            <div className="link">
                <a href={link} target='blank'> <button className='btn card-dicv-btn'>Output</button></a>
                <a href={codelink} target='blank'> <button className='btn card-dicv-btn'>Code</button></a>

            </div>
        </div>
    )
}

export default Cards
