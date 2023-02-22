import './App.css';
import './Button.css';
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
          <OutputSection/>
        </div>
        <div className='calc_button'>
          
            <div className="bt_col1">
              <Button symbol="+"/>
              <Button symbol="7"/>
              <Button symbol="4"/>
              <Button symbol="1"/>
              <Button symbol="0"/>
            </div>

            <div className="bt_col2">
              <Button symbol="-"/>
              <Button symbol="8"/>
              <Button symbol="5"/>
              <Button symbol="2"/>
              <Button symbol="."/>
            </div>

            <div className="bt_col3">
              <Button symbol="x"/>
              <Button symbol="9"/>
              <Button symbol="6"/>
              <Button symbol="3"/>
              <Button symbol="/"/>
            </div>

            <div className="bt_col4">
              <Button className="btClear" symbol="AC"/>
              <Button className="btEnter" symbol="="/>

            </div>

               
        </div>
      </div>
    </div>
  );
}

export default App;
