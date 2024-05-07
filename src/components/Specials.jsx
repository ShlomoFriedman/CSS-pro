import React from "react";

const Specials = () => {
    return (
        <><h1 className="headline">This week specials</h1><section className='highlights'>
            <article>
                <img src="/salad.svg" alt="Greek salad"></img>
                <h3>Greek salad</h3>
                <p>A harmonious blend of crisp greens, feta, olives, and sun-kissed tomatoes. Simply divine.</p>
                <h4>Price: $12.90</h4>
            </article>
            <article>
                <img src="/bruchetta.svg" alt="bruchetta"></img>
                <h3>Bruchetta</h3>
                <p>Crispy baguette slices topped with ripe tomatoes, garlic, basil, and drizzled olive oil.</p>
                <h4>Price: $14.99</h4>
            </article>
            <article>
                <img src="/lemon-dessert.svg" alt="lemon dessert"></img>
                <h3>Lemon Dessert</h3>
                <p>This comes straight from grandmas recipe book, every last ingredient has been sourced and authenticated.</p>
                <h4>Price: $12.90</h4>
            </article>
        </section>
        <div className="order-container">
            <button className="order">Order Online</button>
        </div></>
    )
}

export default Specials;