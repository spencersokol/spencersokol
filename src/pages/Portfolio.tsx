import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSimplePostsContext } from '@idkwtm/simple-posts'
import { MySimplePost } from "@/utils/simple-post";
import Post from "@/components/Post";
import PaginatePosts from "@/components/PaginatePosts";

const Portfolio = () => {

    const simplePosts = useSimplePostsContext();
    const navigate = useNavigate();
    const { slug = '' } = useParams();
    const [portfolio, setPortfolio] = useState<MySimplePost>()

    useEffect(() => {
        
        if (slug && !portfolio) {
            
            if (!simplePosts.isLoaded()) // wait for data fetch
                return;

            const _portfolio = simplePosts.getPostOfTypeBySlug('portfolio', slug) as MySimplePost;

            if (!_portfolio) {
                navigate('/404');
                return;
            }

            setPortfolio(_portfolio);
        }
        
    });

    return (
        <>
            { !simplePosts.hasPostsOfType('portfolio') &&
                <h1>No portfolio items</h1>
            }
            { (portfolio && slug) &&
                <Post post={portfolio} />
            }
            { !slug &&
                <PaginatePosts title='Portfolio' prefix='portfolio' posts={simplePosts.getPostsOfType('portfolio') as MySimplePost[]} />
            }
        </>
    )
};

export default Portfolio;