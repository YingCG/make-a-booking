import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker';
import { BiCalendarPlus } from 'react-icons/bi'

export default function AddAppointment() {

    const [value, onChange] = useState(new Date());
    let [toggleForm, setToggleForm] = useState(false)
    const openForm = () => setToggleForm(!toggleForm)

  return (
    <div className='px-8 py-6 m-4 bg-amber-100' onClick={openForm}>
        <button className='font-bold text-lg text-orange-800' >
            <div><BiCalendarPlus className="inline-block align-text-top" />Make an Appointment</div>
        </button>
        {toggleForm &&   
        <form type='submit' className='@container mt-6'>
            <div className='w-full flex gap-x-1'>
                <label >First Name</label><input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mr-2 w-full'/>
                <label >Last Name</label><input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mr-2 w-full'/>
                <label>Book An Appointment</label><DateTimePicker onChange={onChange} value={value} type='datetime-local' className='block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 w-full' style={{border: "none !important", outline: "none"}}/>
            </div>
                <textarea className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg justify-center	mt-3 px-2 w-full' placeholder='notes'/>
            <button type='submit'>Submit</button>
        </form>}
    </div>
  )
}
