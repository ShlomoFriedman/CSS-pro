import React from 'react';

const About = () => {
    return (
        <section className='app-main-about'>
            <h1>About us</h1>
            <div className='image-container'>
                <img className='FDA' src='/FDA.svg' alt='FDA approval'></img>
                <img className='Chicago' src='/Chicago.svg' alt='Chicago logo'></img>
            </div>
            <p>Meet Little Lemon, a culinary dream brought to life by founders Adrian and Mario. Infusing passion and Mediterranean flair, they envisioned a restaurant where flavors transport, and every meal is a celebration. Little Lemon is more than a dining experience; it's a vibrant tapestry of Chicago charm and Mediterranean warmth. Join us on a journey curated by these visionary founders, where each dish tells a story, and every bite is a taste of their shared culinary passion.</p>
            <img className='founders' src='/Founders.svg' alt='Founders'></img>
        </section>
    );
}

export default About;
