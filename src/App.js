import {useState} from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [calculatedResult, setCalculatedResult] = useState('');

  const handleClick = (e) => {
    setResult(result + e.target.value);
  }
  
  const clear = () => {
    setResult("");
    setCalculatedResult("");
  }

  const calculate = () => {
    if (result === ''){
      setCalculatedResult("Error")
    } else {
      setCalculatedResult(eval(result));
    }
  }

  return (
    <div className='container'>
      <h1>React Calculator</h1>
      
      <form>
        <input type='text' value={result} readOnly/>
      </form>
      <p>{calculatedResult}</p>
      <div className='keypad'>
        <button onClick={handleClick} value='7'>7</button>
        <button onClick={handleClick} value='8'>8</button>
        <button onClick={handleClick} value='9'>9</button>
        <button onClick={handleClick} value='+'>+</button>
        <button onClick={handleClick} value='4'>4</button>
        <button onClick={handleClick} value='5'>5</button>
        <button onClick={handleClick} value='6'>6</button>
        <button onClick={handleClick} value='-'>-</button>
        <button onClick={handleClick} value='1'>1</button>
        <button onClick={handleClick} value='2'>2</button>
        <button onClick={handleClick} value='3'>3</button>
        <button onClick={handleClick} value='*'>*</button>
        <button onClick={clear} value='C'>C</button>
        <button onClick={handleClick} value='0'>0</button>
        <button onClick={calculate} value='='>=</button>
        <button onClick={handleClick} value='/'>/</button>
      </div>
    </div>
  );
}

export default App;
