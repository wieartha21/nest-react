 
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/signup.component'
import Navbar from './components/navbar.component'
import Footer from './components/footer.component'
import Film from './components/film.component'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login, { MyProps }  from "./components/login.component"; 
  
function App() {    

    return (
      <>
       <Router>
        <Navbar/>    
          <Routes>
            <Route path="/" element={<Login name="Judul Login"/> } />
            <Route path="/sign-in" element={<Login name="Judul Login" />} />  
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/film-data" element={ <Film />  } /> 
          </Routes>
        </Router> 
        <Footer/>
      </>
    );  

} 

export default App;