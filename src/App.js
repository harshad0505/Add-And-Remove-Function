import "./App.css";
import PhotoLIst from "./Components/PhotoLIst";
import photoContext from "./Context/context";

import { useContext } from "react";
import Navigation from "./Pages/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  const { handelAddClick, handelDeleteClick } = useContext(photoContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      <div className="compo">
        <PhotoLIst />
      </div>
      
      <div className="btn">
        {/* THis Onclick will Add the Object to the arrya */}
        <button className="btnn Add" onClick={handelAddClick}>
          ADD
        </button>
          {/* THis Onclick will Remove the Object to the arrya */}
        <button className="btnn Remove" onClick={handelDeleteClick}>
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default App;
