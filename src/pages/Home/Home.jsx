import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Users page</h1>
            <button type="button" to="/tweets">
                <NavLink to="/tweets">Tweets</NavLink>
            </button>
        </>
        
    )
}

export default Home;