import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignup from "./components/LoginSignup/LoginSignup.jsx";
import GameScreen from "./components/GameScreen/GameScreen.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup/>} />
        <Route path="/gamescreen" element={<GameScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
