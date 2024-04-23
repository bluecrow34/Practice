import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/candy" element={<Candy/>}/>
        <Route path="/chips" element={<Chips/>}/>
        <Route path="/soda" element={<Soda/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
