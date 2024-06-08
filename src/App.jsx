import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SE_CompList from './Components/Computer_Engineering/SE/SE_CompList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/computer/subList" element={<SE_CompList />} /> {/* Route for SE_Comp */}
          {/* Other routes for TE_Comp, BE_Comp, etc. */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
