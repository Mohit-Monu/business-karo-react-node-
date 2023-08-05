import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DisplayDetails from './components/DisplayDetails/DisplayDetails';
function App() {
  const [theme,setTheme]= useState("light")

  function themechanger(theme){
    setTheme(theme)
  }
  return (
    <>
    <Navbar theme={theme} onThemeHandler={themechanger}/>
    <DisplayDetails theme={theme}/>
    </>
  )
}

export default App;
