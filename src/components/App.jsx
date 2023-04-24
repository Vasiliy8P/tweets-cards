import { NavLink, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import './App.css';
const Home = lazy(() => import("pages/Home/Home"));
const Tweets = lazy(() => import("pages/Tweets/Tweets"));

export const App = () => {
  return (
    <div className="Container">
      <header className="Header">
        <nav className="Header__nav">
          <ul className="Main-nav">
            <li className="Nav-item"><NavLink to="/" className="Nav-item__link">Home</NavLink></li>
            <li className="Nav-item"><NavLink to="/tweets" className="Nav-item__link">Tweets</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
};
