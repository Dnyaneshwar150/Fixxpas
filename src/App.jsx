import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
//import ReactGA from 'react-ga';

// Import your components
import Home from './Components/Home/Home';
import SE_CompList from './Components/Computer_Engineering/SE/SE_CompList';
import DiscreteMathematics from './Components/Computer_Engineering/SE/DiscreteMathematics/DiscreteMathematics';
import FundamentalsofDataStructures from './Components/Computer_Engineering/SE/Fundamentals_of_DataStructures/Fundamentals_of_DataStructures';
import ObjectOrientedProgramming from './Components/Computer_Engineering/SE/Object_Oriented_Programming/Object_Oriented_Programming';
import ComputerGraphics from './Components/Computer_Engineering/SE/ComputerGraphics/ComputerGraphics';
import DigitalElectronicsDesign from './Components/Computer_Engineering/SE/Digital_Electronics_&_Design/Digital_ElectronicsDesign';
import EngineeringMathematics3 from './Components/Computer_Engineering/SE/Engineering_Mathematics_3/Engineering_Mathematics_3';
import DataStructuresAlgorithms from './Components/Computer_Engineering/SE/Data_Strucutures_&_Algorithms/Data_Strucutures_Algorithms';
import SoftwareEngineering from './Components/Computer_Engineering/SE/Software_Engineering/Software_Engineering';
import MicroProcessor from './Components/Computer_Engineering/SE/Microprocessor/Microprocessor';
import PrincipalofProgrammingLanguage from './Components/Computer_Engineering/SE/Principal_of_Programming_Language/Principal_of_Programming_Language';
import TE_CompList from './Components/Computer_Engineering/TE/TE_CompList';

// const tracking_id = 'G-F7693JH7LS';
// ReactGA.initialize(tracking_id);

import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-MS5GRWFH'
}

TagManager.initialize(tagManagerArgs)

function App() {

  window.dataLayer.push({
    event: 'pageview'
  });

  

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  // Uncomment and adjust event listeners as needed
  // useEffect(() => {
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };
  //
  //   const handleKeyDown = (event) => {
  //     if (event.key === 'PrintScreen') {
  //       event.preventDefault();
  //     }
  //   };
  //
  //   const handleCopy = (event) => {
  //     event.preventDefault();
  //   };
  //
  //   const handleSelectStart = (event) => {
  //     event.preventDefault();
  //   };
  //
  //   document.addEventListener('contextmenu', handleContextMenu);
  //   document.addEventListener('keydown', handleKeyDown);
  //   document.addEventListener('copy', handleCopy);
  //   document.addEventListener('selectstart', handleSelectStart);
  //
  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //     document.removeEventListener('keydown', handleKeyDown);
  //     document.removeEventListener('copy', handleCopy);
  //     document.removeEventListener('selectstart', handleSelectStart);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define the route for Home component */}
          {/* SE_computer */}
          <Route path="/computer/SEsubList" element={<SE_CompList />} /> {/* Route for SE_CompList */}
          <Route path="/questions/Discrete-Mathematics" element={<DiscreteMathematics />} /> {/* Route for Discrete Mathematics */}
          <Route path="/questions/Fundamentals-of-Data-Structures" element={<FundamentalsofDataStructures />} /> {/* Route for Fundamentals of Data Structures */}
          <Route path="/questions/Object-Oriented-Programming" element={<ObjectOrientedProgramming />} /> {/* Route for Object-Oriented Programming */}
          <Route path="/questions/computer-graphics" element={<ComputerGraphics />} /> {/* Route for Computer Graphics */}
          <Route path="/questions/Digital-Electronics-&-Design" element={<DigitalElectronicsDesign />} /> {/* Route for Digital Electronics & Design */}
          <Route path="/questions/Engineering-Mathematics-3" element={<EngineeringMathematics3 />} /> {/* Route for Engineering Mathematics 3 */}
          <Route path="/questions/Data-Structures-&-Algorithms" element={<DataStructuresAlgorithms />} /> {/* Route for Data Structures & Algorithms */}
          <Route path="/questions/Software-Engineering" element={<SoftwareEngineering />} /> {/* Route for Software Engineering */}
          <Route path="/questions/MicroProcessor" element={<MicroProcessor />} /> {/* Route for MicroProcessor */}
          <Route path="/questions/Principal-of-ProgrammingLanguage" element={<PrincipalofProgrammingLanguage />} /> {/* Route for Principal of Programming Language */}
          {/* TE_computer */}
          <Route path="/computer/TEsubList" element={<TE_CompList />} /> {/* Route for TE_CompList */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
