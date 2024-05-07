//
import React, { useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Hero from './Hero.js';
import Specials from './Specials.jsx';
import About from './Chicago.jsx';


const Main = () => {

    return (
        <main>
            <Routes>
                <Route path='/' element={<div>
                    <Hero />
                    <Specials />
                    <About />
                </div>} />
            </Routes>
        </main>

    )
}

export default Main;
