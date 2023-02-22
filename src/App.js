import './App.css';
import './Button.css';
import { useState } from 'react';
import * as math from 'mathjs';
import Button from './Button';
import OutputSection from './OutputSection';

function App() {
  const [text,setText] = useState("");
  const [result,setResult] = useState("");

  const addToText = (val) => {
    setText((text)=>[...text,val]);
  }
  const clearText = (val)=>{
    setText((text)=>[null])
    setResult((result)=>[null])
  }

  const checkResult = () =>{
    const input = text.join("");
    setResult(math.evaluate(input));
  }
  
  return (
    <div className="calc_wrapper">
      <div className='calc_main'>
        <div className='calc_output_screen'>
          <OutputSection text={text} result={result}/>
        </div>
        <div className='calc_button'>
          
            <div className="bt_col1">
              <Button symbol="+" handleClick={addToText}/>
              <Button symbol="7" handleClick={addToText}/>
              <Button symbol="4" handleClick={addToText}/>
              <Button symbol="1" handleClick={addToText}/>
              <Button symbol="0" handleClick={addToText}/>
            </div>

            <div className="bt_col2">
              <Button symbol="-" handleClick={addToText}/>
              <Button symbol="8" handleClick={addToText}/>
              <Button symbol="5" handleClick={addToText}/>
              <Button symbol="2" handleClick={addToText}/>
              <Button symbol="." handleClick={addToText}/>
            </div>

            <div className="bt_col3">
              <Button symbol="x" handleClick={addToText}/>
              <Button symbol="9" handleClick={addToText}/>
              <Button symbol="6" handleClick={addToText}/>
              <Button symbol="3" handleClick={addToText}/>
              <Button symbol="/" handleClick={addToText}/>
            </div>

            <div className="bt_col4">
              <Button className="btClear" symbol="AC" handleClick={clearText}/>
              <Button className="btEnter" symbol="=" handleClick={checkResult}/>

            </div>

               
        </div>
      </div>
    </div>
  );
}

export default App;
