import { useState } from "react"

import DatePicker from "react-date-picker"
import 'react-date-picker/dist/DatePicker.css';

import React from 'react'

const Calendarr = () => {
 
  const [startDate, setStartDate] = useState(new Date());
  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <calendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </calendarContainer>
      </div>
    );}

    return (
        <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                calendarContainer={MyContainer}
                  minDate={new Date()}
                className="datePicker"
                placeholderText="Select a date"
                />
    )

}

export default Calendarr
