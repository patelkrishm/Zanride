import React from "react";
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css'
import Logo from './assets/Logo.png'
 import Home from './Components/Home'
 import About_us from './Components/About_Us'
 import Careers from './Components/Careers'
 import Contect_Us from './Components/Contect_Us'
 import Become_a_Driver from './Components/Become_a_Driver'
 import Login from "./Components/Login";
 import Sign from "./Components/Sign";


const App = () => {
  return (
    <>
    <div className="navbar">

    <Router>
    <span className='header'>
           <img src={Logo} alt="ZanRide" />
         </span>
    <div className="btn">
           <Link to="/Login"><button>Login</button></Link>
         </div>
      <Navbar />
      <Routes>
            <Route path="/Sign" element={<Sign/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/" index element={<Home />} />
            <Route path="/Become_a_Driver" element={<Become_a_Driver />} />
            <Route path="/About_Us" element={<About_us />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/Contect_Us" element={<Contect_Us />} />
           </Routes>
    </Router>
    </div>
    </>
  );
};

export default App;

















// import './App.css'
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
// import Logo from './assets/Logo.png'
// import Home from './Components/Home'
// import About_us from './Components/About_Us'
// import Careers from './Components/Careers'
// import Contect_Us from './Components/Contect_Us'
// import Become_a_Driver from './Components/Become_a_Driver'
// import Footer from './Components/Footer'
// import Letter from './Components/Letter'
// import Blog from './Components/Blog'
// import Blog_Details from './Components/Blog_Details'
// import Login from './Components/Login'
// import Navbar from './Components/Navbar'
// function App() {
//   return (
//     <>
//       <div className="navbar">
//       <Router>
//         <span className='header'>
//           <img src={Logo} alt="ZanRide" />
//         </span>
        
//           <nav className='nav'>
//             <Link to="/Home" className='navcomponent'>Home</Link>
//             <Link to="/Become_a_Driver" className='navcomponent'>Become a Driver</Link>
//             <Link to="/About_Us" className='navcomponent'>About Us</Link>
//             <Link to="/Careers" className='navcomponent'>Careers</Link>
//             <Link to="/Contect_Us" className='navcomponent'>Contect Us</Link>
//           </nav>
//           <div className="btn">
//           <button>Login</button>
//         </div>
//           <Routes>
//             <Route path="/Home" index element={<Home />} />
//             <Route path="/Become_a_Driver" element={<Become_a_Driver />} />
//             <Route path="/About_Us" element={<About_us />} />
//             <Route path="/Careers" element={<Careers />} />
//             <Route path="/Contect_Us" element={<Contect_Us />} />
//           </Routes>
//         </Router>
        
//       </div>
//       {/* <Navbar/> */}
//       {/* <Login/> */}
//       {/* <Home/> */}
//       {/* <Become_a_Driver/> */}
//       {/* <Contect_Us/> */}
//       {/* <Careers/> */}
//       {/* <About_us/> */}
//       {/* <Letter/> */}
//       {/* <Blog/> */}
//       {/* <Blog_Details/> */}
//     </>
//   )
// }

// export default App
