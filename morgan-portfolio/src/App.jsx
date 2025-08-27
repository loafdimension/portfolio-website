import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home-Page";
import About from "./pages/About-Page";
import Works from "./pages/Works-Page";
import Header from "./intro/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </>
  );
}

export default App;
