// import './App.css'
// import Header from './components/Header' 


// function App() {
//   return (
//     <>
//       <div className="body-container" style={{
//         background:"#3AAfA9",
//         padding:"0px",
//       }}>
//         <Header></Header>
//         <div>
//           hello world
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


// // index.js




import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Til from "./pages/Til";
// import Diary from "./pages/Diary";

 const App = ()=> {
  return (
    <BrowserRouter>
      <div className="body-container">
        <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Til" element={<Til />} />
          <Route path="/diary" element={<Diary />} />
        </Routes> */}
        <Body />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
