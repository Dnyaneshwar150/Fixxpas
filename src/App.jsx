import React,{ useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
// computer
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


function App() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    // Disable "Print Screen" key
    const handleKeyDown = (event) => {
      if (event.key === 'PrintScreen') {
        event.preventDefault();
      }
    };

    // Disable copy and text selection
    const handleCopy = (event) => {
      event.preventDefault();
    };

    const handleSelectStart = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          {/* computer */}
          <Route path="/computer/subList" element={<SE_CompList />} /> {/* Route for SE_CompList */}
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
        
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
