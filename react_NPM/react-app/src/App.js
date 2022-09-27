// import logo from './logo.svg';
import './App.css';
import { useState , useEffect, useReducer, useRef} from 'react';

function useInput(initialValue){
    const [value, setValue] = useState(initialValue);
    return [{value, onChange: (e) => setValue(e.target.value)},() => setValue(initialValue)];
}

function App() {

  const [titleProps, resetTitle] = useInput("")
  const [colorProps, resetColor] = useInput("#000000")

  // Logic
  const submit = (e) => {
    e.preventDefault();

    alert(`${titleProps.value}, ${colorProps.value}`)
    resetTitle();
    resetColor();
  }




  // IU
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
            type="text"
            {...titleProps}
            placeholder="color title..." 
        />
        <input 
            type="color" 
            {...colorProps}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default App;
