import appStyles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import Home from "../Home/Home";
function App() {
  return (
    <div className={appStyles.App}>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
