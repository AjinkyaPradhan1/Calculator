import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="calc_wrapper">
      <div className='calc_main'>
        <div className='calc_output_screen'></div>
        <div className='calc_button'>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
