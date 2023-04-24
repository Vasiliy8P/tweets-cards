import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>User page</h1>
            <button type="button" to="/tweets">
                <NavLink to="/tweets">Tweets</NavLink>
            </button>
        </>
        
    )
}

export default Home;