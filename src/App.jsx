import React,{ useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'


import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
// computer SE

import SE_CompList from './Components/Computer_Engineering/SE/SE_CompList';
import DiscreteMathematics from './Components/Computer_Engineering/SE/DiscreteMathematics/DiscreteMathematics'
import FundamentalsofDataStructures from './Components/Computer_Engineering/SE/Fundamentals_of_DataStructures/Fundamentals_of_DataStructures'
import ObjectOrientedProgramming from './Components/Computer_Engineering/SE/Object_Oriented_Programming/Object_Oriented_Programming';
import ComputerGraphics from './Components/Computer_Engineering/SE/ComputerGraphics/ComputerGraphics'
import DigitalElectronicsDesign from './Components/Computer_Engineering/SE/Digital_Electronics_&_Design/Digital_ElectronicsDesign'
import EngineeringMathematics3 from './Components/Computer_Engineering/SE/Engineering_Mathematics_3/Engineering_Mathematics_3'
import DataStructuresAlgorithms from './Components/Computer_Engineering/SE/Data_Strucutures_&_Algorithms/Data_Strucutures_Algorithms'
import SoftwareEngineering from './Components/Computer_Engineering/SE/Software_Engineering/Software_Engineering'
import MicroProcessor from './Components/Computer_Engineering/SE/Microprocessor/Microprocessor'
import PrincipalofProgrammingLanguage from './Components/Computer_Engineering/SE/Principal_of_Programming_Language/Principal_of_Programming_Language'


// computer TE
import TE_CompList from './Components/Computer_Engineering/TE/TE_CompList';



function App() {
  const tracking_id = 'G-2KZEXK355Y';
ReactGA.initialize(tracking_id);
ReactGA.pageview("/" + window.location.search);

const tagManagerArgs = {
  gtmId: 'GTM-MS5GRWFH'
}
TagManager.initialize(tagManagerArgs)

  // useEffect(() => {
  //   // Disable right-click context menu
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };
  
  //   // Disable "Print Screen" key
  //   const handleKeyDown = (event) => {
  //     if (event.key === 'PrintScreen') {
  //       event.preventDefault();
  //     }
  //   };
  
  //   // Disable copy and text selection
  //   const handleCopy = (event) => {
  //     event.preventDefault();
  //   };
  
  //   const handleSelectStart = (event) => {
  //     event.preventDefault();
  //   };
  
  //   // Add event listeners
  //   document.addEventListener('contextmenu', handleContextMenu);
  //   document.addEventListener('keydown', handleKeyDown);
  //   document.addEventListener('copy', handleCopy);
  //   document.addEventListener('selectstart', handleSelectStart);
  
  //   // Clean up event listeners on component unmount
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
          {/* SE_computer */ }
          <Route path="/computer/SEsubList" element={<SE_CompList />} /> {/* Route for SE_CompList */}
          <Route path="/questions/Discrete-Mathematics" element={<DiscreteMathematics />} /> {/* Route for Computer Graphics */}
          <Route path="/questions/Fundamentals-of-Data-Structures" element={<FundamentalsofDataStructures />} /> {/* Route for Computer Graphics */}
          <Route path="/questions/Object-Oriented-Programming" element={<ObjectOrientedProgramming  />} /> {/* Route for Computer Graphics */}
          <Route path="/questions/computer-graphics" element={<ComputerGraphics />} /> {/* Route for Computer Graphics */}
          <Route path="/questions/Digital-Electronics-&-Design" element={<DigitalElectronicsDesign />} /> {/* Route for Computer Graphics */}
          <Route path="/questions/Engineering-Mathematics-3" element={<EngineeringMathematics3 />} /> {/* Route for Computer Graphics */}
          <Route path="/questions/Data-Structures-&-Algorithms" element={<DataStructuresAlgorithms />} /> {/* Route for Computer Graphics */}
          <Route path="/questions/Software-Engineering" element={<SoftwareEngineering />} /> {/* Route for Computer Graphics */}
          <Route path="/questions/MicroProcessor" element={<MicroProcessor />} /> {/* Route for Computer Graphics */}
          <Route path="/questions/Principal-of-ProgrammingLanguage" element={<PrincipalofProgrammingLanguage />} /> {/* Route for Computer Graphics */}
                  {/* TE_computer */ }
          <Route path="/computer/TEsubList" element={<TE_CompList />} /> {/* Route for TE_CompList */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
