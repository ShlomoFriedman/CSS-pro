import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders BookingForm component', () => {
  // Mock functions
  const mockOnFormSubmit = jest.fn();
  const mockDispatchOnDateChange = jest.fn();
  
  // Mock available times
  const availableTimes = ["12:00", "13:00", "14:00"];

  // Render BookingForm component with mock props
  render(
    <BookingForm
      submitForm={mockOnFormSubmit} // Correct prop name
      isFormSubmitted={false} // Add placeholder prop, even though it's not used in the test
      availableTimes={availableTimes}
      dispatch={mockDispatchOnDateChange} // Correct prop name
    />
  );

  // Check if the "Date" label is visible
  const dateLabel = screen.getByLabelText(/Choose date/i);
  expect(dateLabel).toBeInTheDocument();

  // Check if the "Choose time" label is visible
  const timeLabel = screen.getByLabelText(/Choose time/i);
  expect(timeLabel).toBeInTheDocument();

  // Check if the input fields and submit button are present
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toBeInTheDocument();

  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toBeInTheDocument();

  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toBeInTheDocument();

  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).toBeInTheDocument();

  const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
  expect(submitButton).toBeInTheDocument();
});
