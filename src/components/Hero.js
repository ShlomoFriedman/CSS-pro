import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='hero'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Indulge your senses in a symphony of flavors as Little Lemon Restaurant brings the essence of the Mediterranean to your plate. From fresh olive oils to aromatic herbs and savory spices, our chefs meticulously craft each dish to transport you to the sun-kissed shores of the Mediterranean.</p>
            <div className="button-container">
                <Link to ="/booking">
                    <button aria-label='on Click'>Reserve a table</button>
                </Link>
            </div>
            <img src="/hero.svg" alt="Hero Section"></img>
        </section>
    )
}

export default Hero;