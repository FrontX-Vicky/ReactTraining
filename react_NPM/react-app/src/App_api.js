import './App.css';
import { useState, useEffect, useReducer, useRef } from 'react';

const query = { "form_token": "ABCD12345678"};

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json", "uid": 5248, "bid": 27 },
  body: JSON.stringify(query)
}

function TableHeaders(header){
  return (
      <tr>
          <th>Sr no.</th>
            {header.header.map((header, i)=>(
                <th key={i}>{header}</th>
            ))}
        </tr>
      )
}

function TableBody(data){
    return(
      data.data.map((row,i) => (<tr key={i}>
        {row.map((cell,i) => (<td key={i}>{cell.value}</td>))}
      </tr>))
    )
}

function Report(data) {
  return (
    <div>
      <table>
        <thead>
          {<TableHeaders header = {data.data.header} />}
        </thead>
        <tbody>
          {<TableBody data = {data.data.data} />}
        </tbody>
      </table> 
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
