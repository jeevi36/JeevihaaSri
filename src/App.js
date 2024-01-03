import React from 'react';
import Navbar from "./Navbar/Navbar";
import Home from "./Home";

import Footer from './Footer/footer';
import  {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

import About from './about';


import Contact from './contact';
import Accomodations from './accomodations';
import Dining from './dining';

import Terms from './terms';
import Privacy from './privacy';
import Faq from './faq';

import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUpForm';


function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/about" element={<About/>}></Route>
				<Route path="/accomodations" element={<Accomodations/>}></Route>
				<Route path="/dining" element={<Dining/>}></Route>
				<Route path="/contact" element={<Contact/>}></Route>
				<Route path="/terms" element={<Terms/>}></Route>
				<Route path="/privacy" element={<Privacy/>}></Route>
				<Route path="/faq" element={<Faq/>}></Route>
				<Route path="/LoginForm" element={<LoginForm/>}></Route>
				<Route path="/SignUpForm" element={<SignUpForm/>}></Route>
				
				
			</Routes>

		 
			<Footer/>
		</React.Fragment>
		
	);
}

export default App;