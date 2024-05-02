// BookingForm.js
import React, { useState } from "react";

function BookingForm(props) {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');



  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
    //Will be addressed soon
    console.log('Form submitted with values', { date, times, guests, occasion });
  }

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <label htmlFor="res-date" style={{ marginBottom: '10px' }}>Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e.target.value)} style={{ marginBottom: '10px' }} />
                </div>

                <div>
                    <label htmlFor="res-time" style={{ marginBottom: '10px' }}>Choose time</label>
                    <select id="res-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                        <option value="">Select a Time</option>
                        {
                            props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                        }
                    </select>
                </div>

                <div>
                    <label htmlFor="guests" style={{ marginBottom: '10px' }}>Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
                </div>

                <div>
                <label htmlFor="occasion" style={{ marginBottom: '10px' }}>Occasion</label>
                        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                </div>

                <div>
                    <input aria-label="On Click" type="submit" value={"Make Your reservation"} />
                </div>
            </fieldset>
        </form>
    </section>
  );
}

export default BookingForm;
