import './App.css';
import Hero from './Components/Hero/Hero';
import About from './Pages/About';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
// import Navbar from './Components/Navbar/Navbar';


function App() {
  return (

    <>
    
      <BrowserRouter>
      <Routes>
        <Route index element={<Hero/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
