import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <>
            <h1>User page</h1>
            <NavLink to="/tweets" className='Btn-tweets-link'>
                <button className="Btn-tweets" type="button" to="/tweets">Tweets</button>
            </NavLink>
        </>
    )
};

export default Home;