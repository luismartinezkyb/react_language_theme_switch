import {createContext, useState, useEffect} from 'react'
import TextWithImage from './components/TextWithImage'
import NavBar from './components/AppBar';
import CenterText from './components/CenterText';

import {Button, createTheme, colors, ThemeProvider} from '@mui/material';
import './App.css'

export const ThemeContext = createContext(null);


function App() {

  
  const [themeColor, setThemeColor] = useState("light")

  useEffect(() =>{
    const storedTheme = localStorage.getItem('themecolor')
    if(storedTheme===null){
      setThemeColor('light');
    }else{
      setThemeColor(storedTheme)
    }
  },[])

  //THEME PROVIDER FROM MATERIAL UI
  const theme = createTheme({
    palette:{
      mode:themeColor,
      
    }
  })
  
  const toggleTheme =()=>{
    //ANOTHER WAY TO DO THIS IS
    //setTheme((curr)=>(curr==="ligh"?'dark':'light'));
    if(themeColor ==="light"){
      setThemeColor('dark')
      localStorage.setItem('themecolor', 'dark');
    }else{
      setThemeColor('light');
      localStorage.setItem('themecolor', 'light');
    }
    console.log("The theme has changed to ",themeColor)
    
    
  }

  

  const text = [
    "Now you can meet all my personal work in this web, let's create some personal blog Lorem ipsum dolor sit sdasdasdasd consectetur, adipisicing elit. Facere, ex ab velit laudantium", 
    "eligendi distinctio, animi temporibus aperiam necessitatibus fugiat perferendis qui et, nemo corrupti laborum ipsam numquam tenetur. Neque!",
    
    "eligendi distinctio, animi temporibus aperiam necessitatibus fugiat perferendis qui et, nemo corrupti laborum ipsam numquam tenetur. Neque!",
    "eligendi distinctio, animi temporibus aperiam necessitatibus fugiat perferendis qui et, nemo corrupti laborum ipsam numquam tenetur. Neque!"
  ]

  return (
    <ThemeContext.Provider value={{toggleTheme, themeColor}}>
      <ThemeProvider theme={theme}>
        <div className="App" id={themeColor}>
          <NavBar themeColor={themeColor} toggleTheme={toggleTheme}/>
          {/* <Button variant='contained' color='primary'>HOLA BOTONNNN</Button>
          <Button variant='contained' color='secondary'>HOLA BOTONNNN</Button> */}
          <CenterText/>
          <TextWithImage title="WELCOME" text={text} direction="right" urlImage="https://avatars.githubusercontent.com/u/89945446?v=4"/>
          <TextWithImage title="PORTFOLIO" text={text} direction="left" urlImage="https://avatars.githubusercontent.com/u/89945446?v=4"/>
          
        </div>  
      </ThemeProvider>
      
    </ThemeContext.Provider>
    
    
  )
}

export default App
