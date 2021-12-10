import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import {Home} from './Components/HomeScreenContainer'
import { NavBar } from './Components/NavBar';
import {TableExample}from './Components/Table'
const App=()=> <BrowserRouter>
    <NavBar />
    <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/SecondPage" element={<TableExample/>}/>
    <Route  path="/ThirdPage" element={<Home/>}/>
    </Routes>
  </BrowserRouter> 


export default App;
