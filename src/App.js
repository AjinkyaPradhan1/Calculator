import './App.css';
import { useState } from 'react';
import Button from './Button';
import OutputSection from './OutputSection';

function App() {
  const [text,setText] = useState("Bye");
  const [result,setResult] = useState("Hi");

  const addToText = (val) => {
    setText((text)=>[...text,val+" "]);
  };
  return (
    // <OutputSection text={text} result={result}/>
    <div className="calc_wrapper">
      <div className='calc_main'>
        <div className='calc_output_screen'>
          <OutputSection result={result} text={text}/>
        </div>
        <div className='calc_button'>
          <Button /> 
        </div>
      </div>
    </div>
  );
}

export default App;
