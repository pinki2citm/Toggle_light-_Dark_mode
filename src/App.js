import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  const [text, setText] = useState('Switch to Dark Mode');
  const [bgColor, SetBgColor] = useState('light');
  const [textColor, SetTextColor] = useState('dark');

  const toggle = () => {
    if (bgColor === 'light') {
      SetBgColor('dark');
      document.body.style.backgroundColor = 'black';
      setText('Switch to Light Mode');
      SetTextColor('light');
    } else {
      SetBgColor('light');
      document.body.style.backgroundColor = 'white';
      setText('Switch to Dark Mode');
      SetTextColor('dark');
    }
  };
  return (
    <div className='App'>
      <Navbar text={text} bgColor={bgColor} textColor={textColor} toggle={toggle}/>   
      <About text={text} bgColor={bgColor} textColor={textColor} />
    </div>
  );
}

export default App;
