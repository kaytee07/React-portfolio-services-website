import logo from './logo.svg';
import PageWrapper from './Components/Pagewrapper';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Components/Pages/Home";
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </PageWrapper>
    </div>
  );
}

export default App;
