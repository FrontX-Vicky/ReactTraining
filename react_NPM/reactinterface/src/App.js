import {useState, useEffect, useCallback}   from 'react'
import { BiCalendar } from 'react-icons/bi';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import Search from './components/Search';

function App() {

  let [ appointmentList , setAppointmentList] = useState([])
  let [query, setQuery] = useState("")
  let [sortBy, setSortby] = useState('petName')
  let [orderBy, setOrderBy] = useState('asc')

  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
    )
  })

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
      <AddAppointment 
        onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
        lastId={appointmentList.reduce((max, item) => Number(item.id ) > max ? Number(item.id) : max, 0)}
      />
      <Search 
          query={query}
          onQueryChange={myQuery => setQuery(myQuery)}
          orderBy={orderBy}
          onOrderByChange={mySort => setOrderBy(mySort)}
          sortBy={sortBy}
          onSortByChange={mySort=>setSortby(mySort)}

      />

      <ul className='divide-y divide-gray-200'>
        {
          filteredAppointments.map(appointment => (
            <AppointmentInfo key={appointment.id}
                appointment={appointment}
                onDeleteAppointment={
                appointmentId => setAppointmentList(
                appointmentList.filter(
                  appointment => appointment.id !== appointmentId
                ))
            }
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;