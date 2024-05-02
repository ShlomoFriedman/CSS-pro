import React from "react";

const Testimonials = () => {
    return (
        <section className='app-main-testimonials'>
            <div className="background-image"></div>
            <h1>What costumers say about us</h1>
            <article className='jack'>
                <img src='/Jack.svg' alt='Jack'></img>
                <h3>Jack Milostien</h3>
                <img src='/5-star-rating.svg' alt='5 star rating'></img>
                <p>“Hidden gem! Exquisite Mediterranean flavors, charming ambiance. Must-try in Chicago.”</p>
            </article>
            <article className='emily'>
                <img src="/Emily.svg" alt="Emily"></img>
                <h3>Emily Thompson</h3>
                <img src='/5-star-rating.svg' alt='5 star rating'></img>
                <p>“Seafood paella standout. Cozy atmosphere, prompt service. Will return for more.”</p>
            </article>
            <article className='sandra'>
                <img src="/Sandra.svg" alt="sandra"></img>
                <h3>Sandra Davis</h3>
                <img src='/5-star-rating.svg' alt='5 star rating'></img>
                <p>“Decent food, friendly staff. Expected more flavor variety. Nice ambiance.”</p>
            </article>
            <article className='carlos'>
                <img src="/Carlos.svg" alt="carlos"></img>
                <h3>Carlos Martinez</h3>
                <img src='/5-star-rating.svg' alt='5 star rating'></img>
                <p>“Exceeded expectations! Remarkable dishes, attentive staff. Cozy setting, perfect for gatherings.”</p>
            </article>
        </section>
)
}

export default Testimonials;