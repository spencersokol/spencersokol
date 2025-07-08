import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSimplePostsContext } from '@idkwtm/simple-posts'
import { MySimplePost } from "@/utils/simple-post";
import Post from "@/components/Post";
import PaginatePosts from "@/components/PaginatePosts";
import { SkeletonPage } from "@/components/ui/skeleton";

const Portfolio = () => {

    const simplePosts = useSimplePostsContext();
    const navigate = useNavigate();
    const { slug = '' } = useParams();
    const [portfolio, setPortfolio] = useState<MySimplePost>()

    useEffect(() => {
        
        if (slug) {
            
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

    if (!simplePosts.isLoaded())
        return (
            <SkeletonPage />
        );

    if (!simplePosts.hasPostsOfType('portfolio')) {
        navigate('/404');
        return;
    }

    return (
        <>
            { (portfolio && slug) &&
                <Post post={portfolio} />
            }
            { !slug &&
                <PaginatePosts 
                    title='A Select Body of Work' 
                    prefix='portfolio' 
                    posts={simplePosts.getPostsOfType('portfolio') as MySimplePost[]}>
                        <p>
                            We all must survive under capitalism, and I have mostly done this in the field of software development. I have a wide range of experience across languages and toolsets, from C# to PHP to TypeScript to React to Vue and more. 
                        </p>
                        <p>
                            These are a few examples of the value I have provided to various shareholders as a laborer in the industry.
                        </p>
                </PaginatePosts>
            }
        </>
    )
};

export default Portfolio;