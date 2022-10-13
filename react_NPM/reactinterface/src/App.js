import {useState, useEffect, useCallback}   from 'react'
import { BiCalendar } from 'react-icons/bi';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import Search from './components/Search';

function App() {

  let [ appointmentList , setAppointmentList] = useState([])

  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setAppointmentList(data);
    })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="App container mx-auto mt-5 font-thin">

      <h2 className='mb-4 text-5xl strong'><BiCalendar className='inline-block text-red-400 align-top' /> My Appointments </h2>
      <AddAppointment />
      <Search />

      <ul className='divide-y divide-gray-200'>
        {
          appointmentList.map(appointment => (
            <AppointmentInfo 
            appointment={appointment}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;