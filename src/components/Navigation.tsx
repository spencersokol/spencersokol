import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <Link to={'/'} className="mx-4">Home</Link>
            <Link to={'/portfolio/'} className="mx-4">Portfolio</Link>
            <Link to={'/blog/'} className="mx-4">Blog</Link>
            <Link to={'/about/'} className="mx-4">About</Link>
        </>
    )
};

export default Navigation;