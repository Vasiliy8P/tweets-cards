import Home from "pages/Home/Home";
import Tweets from "pages/Tweets/Tweets";
import { NavLink, Route, Routes } from "react-router-dom";
import './App.css';

export const App = () => {
  return (
    <div className="Container">
      <header className="Header">
        <nav>
          <ul className="Main-nav">
            <li className="Nav-item"><NavLink to="/" className="Nav-item__link">Home</NavLink></li>
            <li className="Nav-item"><NavLink to="/tweets" className="Nav-item__link">Tweets</NavLink></li>
          </ul> 
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Routes>
      </main>      
    </div>
  )
};
