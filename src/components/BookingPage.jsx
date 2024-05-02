// BookingPage.jsx
import React, { useReducer } from 'react';
import BookingForm from './BookingForm/BookingForm';
import { Route, Routes, useNavigate } from 'react-router-dom';

const Booking = (props) => {

    const seedRandom = function(seed){
        var m = s**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = s * a % m) /m;
        }
    }

    const fetchAPI = function(date){
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i =17; i<=23; i++){
            if(random() < 0.5){
                result.push(i + ':00');
            }
            if (random() > 0.5){
                result.push(i + ':30')
            }
        }
        return result;
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center', /* Centers horizontally */
            alignItems: 'center', /* Centers vertically */
            height: '50vh', /* Full height of the viewport */
          }}>
            <h2 style={{
              fontSize: '3rem',
              color: '#000',
              fontFamily: 'Arial, sans-serif',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              textAlign: 'center',
            }}>Booking page</h2>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
        </div>
    )
}

export default Booking;