import Datepicker from "tailwind-datepicker-react"
import React, { useState } from "react"

  const options = {
    title: "",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-white",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-white",
      input: "",
      inputIcon: "",
      selected: "",
    },
    datepickerClassNames: "top-auto",
    defaultDate: new Date("2022-01-01"),
    language: "en",
    orientation: "bottom",
    format: "mm/dd/yyyy",
  }
  
function CustomDate({ label, id }) {
    const [show, setShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleChange = (selectedDate) => {
      setSelectedDate(selectedDate)
    }
    const handleClose = (state) => {
      setShow(state)
    }
  
    return (
      <div className="flex flex-col items-start gap-1 grow">
        <label className="px-1 font-normal text-base leading-4 text-darkslategray">{label}</label>
        <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose}>
				<div className="">
					<input inputIcon="" type="text" className="" placeholder="Select Date" value="" onFocus={() => setShow(true)} readOnly />
				</div>
			</Datepicker>
      </div>
    )
  }


export default CustomDate;