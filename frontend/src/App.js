import "./App.css";

// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route Component={HomePage} path="/" exact />
          <Route Component={LoginPage} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
