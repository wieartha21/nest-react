 
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/signup.component'
import Navbar from './components/navbar.component'
import Footer from './components/footer.component'
import Film from './components/film.component'
import Login, { MyProps }  from "./components/login.component"; 

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

    const [keyword, setKeyword] = React.useState("");

    function handleSetKeyword(word : string) {
        setKeyword(word);
    }

    return (
      <>
       <Router>
        <Navbar/>    
          <Routes>
            <Route path="/" element={<Login name="Judul Login"/> } />
            <Route path="/sign-in" element={<Login name="Judul Login" />} />  
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/film-data" element={<Film keyword={keyword} setKeyword={handleSetKeyword} />} /> 
          </Routes>
        </Router> 
        <Footer/>
      </>
    );  

} 

export default App;