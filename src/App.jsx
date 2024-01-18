import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Profile from "./components/Profile/Profile";
import BgChanger from "./components/BgChanger/BgChanger";
import { useEffect } from "react";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/1" element={<Profile />}></Route>
          <Route path="/2" element={<BgChanger />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
