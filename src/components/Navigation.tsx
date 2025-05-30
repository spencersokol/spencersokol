import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/portfolio/'}>Portfolio</Link>
            <Link to={'/blog/'}>Blog</Link>
        </div>
    )
};

export default Navigation;