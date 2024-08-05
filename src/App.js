import logo from './logo.svg';
import './App.css';
import Confetti from 'react-confetti';
import MainCard from './MainCard';
import ChangingTextComponent from './ChangingTextComponent';
import LightUp from './LightUp';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Describe from './Describe';



function App() {
  return (
    <div >
      
      <center>

 <BrowserRouter>
    
     <Routes>
     <Route index element={<LightUp/>}/>
     <Route path='/BirthDayWish' element={<MainCard/>}/>
     <Route path='/Describe' element={<Describe/>}/>
      </Routes>
  </BrowserRouter>
  
      </center>
    </div>
  );
}

export default App;
