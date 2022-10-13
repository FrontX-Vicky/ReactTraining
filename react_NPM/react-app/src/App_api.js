import './App.css';
import { useState, useEffect, useReducer, useRef } from 'react';

const query = { "form_token": "ABCD12345678", "col": ["id", "level"] };

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json", "uid": 5248, "bid": 27 },
  body: JSON.stringify(query)
}

function TableHeaders(header){
  var cols = Object.values(header)
  return (
    <ul>{    }</ul>
  )
}

function Report(data) {
  return (
    <div>
        {
         <TableHeaders header = {data.data.header} />
        //  console.log(data.data.header)
        }
    </div>
  )
}

function App_api() {

  // Logic
  const [response, setData] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://admin.tickleright.in/routes/reportRoute.php?action=select&id=265`,
      opts
    ).then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!response) return null;

  //UI
  return (
    <div>
      {
        <Report data={response} />
      }
    </div>
  );
}

export default App_api;
