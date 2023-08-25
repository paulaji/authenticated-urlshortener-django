import "./App.css";

// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages import
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

// components import
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route Component={HomePage} path="/" exact />
          <Route Component={LoginPage} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
