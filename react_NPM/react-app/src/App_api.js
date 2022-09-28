// import logo from './logo.svg';
import './App.css';
import { useState , useEffect, useReducer, useRef} from 'react';

const query = `{
    allLifts{
      name
      elevationGain
      status
    }
  }`;

const opts = {
    method : "POST",
    headers: { "Content-Type" : "application/json" },
    body : JSON.stringify({query})
}

function Lift({ name, elevationGain, status}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{elevationGain} {status}</p>
        </div>
    )
}



function App_api() {

  // Logic
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null);


  useEffect(() => {
    setLoading(true)
    fetch(
        `https://snowtooth.moonhighway.com/`,
        opts
    ).then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, []);
    
  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.stringify(error)}</pre>;
  if(!data) return null;


  //UI
  return (
   <div>
        {data.data.allLifts.map((lift) => (
            <Lift 
                name={lift.name}            
                elevationGain={lift.elevationGain}            
                status={lift.status}            
            />
        ))}
   </div>
  );
}

export default App_api;
