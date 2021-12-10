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
import { Container, CssBaseline } from '@mui/material';




const App=()=> <BrowserRouter>
    <NavBar />
	<CssBaseline>
		<Container maxWidth="sm">
			<Routes>
				<Route  path="/" element={<Home/>}/>
				<Route  path="/SecondPage" element={<TableExample/>}/>
				<Route  path="/ThirdPage" element={<Home/>}/>
			</Routes>
		</Container>
	</CssBaseline>
    
  </BrowserRouter> 


export default App;
