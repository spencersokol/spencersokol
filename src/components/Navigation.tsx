import { Link } from "react-router-dom";
import { useSimplePostsContext } from "@idkwtm/simple-posts";

const Navigation = () => {

    const simplePosts = useSimplePostsContext();

    return (
        <>
            <Link to={'/'} className="mr-4 flex-none">Home</Link>
            <span className="grow"></span>
            <Link to={'/music'} className="mx-4 flex-none">Music</Link>
            { simplePosts.hasPosts() &&
                <Link to={'/blog/'} className="mx-4 flex-none">Blahg</Link>
            }
            <Link to={'/portfolio/'} className="mx-4 flex-none">Portfolio</Link>
            <Link to={'/about/'} className="ml-4 px-2 rounded-full flex-none font-(family-name:--font-savate) bg-white text-tertiary">?</Link>
        </>
    )
};

export default Navigation;