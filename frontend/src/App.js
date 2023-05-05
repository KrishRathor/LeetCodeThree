import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Problems from './components/Problems';
import SpecificProblem from './components/SpecificProblem';
import Footer from './components/Footer';
import SingUp from './components/SingUp';
import Login from './components/Login';
import { UserContext } from './components/UserContext';

function App() {

  const [showOtherComponent, setShowOtherComponent] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [solordesc, setSolordesc] = useState('desc');

  const [userData, setUserData] = useState("");

  const handleClick = () => {
    setShowOtherComponent(true);
  };

  const handleNextClick = () => {
    setShowOtherComponent(false);
  };

  return (
    <UserContext.Provider value={userData}>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={
          <>
            <Navbar loginStatus={'login'} />
            <SingUp/>
          </>
        }></Route>
        <Route 
          path="/problems"
          element = {
            <>
              <Navbar loginStatus={'logout'} userData={userData} />
              {
                showOtherComponent === true ? <SpecificProblem selectedIndex={selectedIndex} onClick={handleNextClick} currentPage={currentPage} /> : <Problems setSelectedIndex={setSelectedIndex} solordesc={solordesc} setSolordesc={setSolordesc} onClick={handleClick} currentPage={currentPage} setCurrentPage={setCurrentPage} />
              }
              <Footer/>
            </>
          }
        ></Route>
        <Route path="/" element={
          <>
            <Navbar loginStatus={'signup'} />
            <Login />
          </>
        }></Route>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
