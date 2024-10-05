import './App.css';
import Navbar from './components/Navbar';
import Textform  from './components/Textform';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Main,
  Route,
  Routes
} from 'react-router-dom';
function App() {
  const[mode,setMode]=useState('dark')
  const[alert,setalert]=useState("null")
  // const[change,setchange]=useState("hy")
  const showalert = (message,type) => {
 setalert({
   msg: message,
   type: type
  })
 
  setTimeout(()=>{
setalert("null");
  },1000);
}
// const changetext =(textt)=>{
//   setchange({
//     tex:textt
//   })
// }
  const toggleMode=()=>{
    if(mode ==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#202020'
    showalert("dark mode has enabled","success");
    // changetext("Enable Light Mode");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert("light mode has enabled","success");
      // changetext("Enable Dark Mode");
      }
  }
  return (
    <>
    <Main>
    <Navbar title="texttutils" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
 <div className="container my-3">
    <Routes>
          <Route exact path='/' element={<Textform showalert={showalert} heading="Enter text to analyze" mode={mode}/>}/>
          <Route exact path='/about' element={<About/>}/>
          </Routes>
          </div>
        </Main>
  </>
  );
}
export default App;
