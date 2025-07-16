import { useNavigate } from "react-router-dom";
import { SimplePost, useSimplePostsContext } from '@idkwtm/simple-posts'
import PaginatePosts from "@/components/PaginatePosts";
import { SkeletonPage } from "@/components/ui/skeleton";

const Portfolio = () => {

    const simplePosts = useSimplePostsContext();
    const navigate = useNavigate();

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
            <PaginatePosts 
                title='A Select Body of Work' 
                prefix='portfolio' 
                posts={simplePosts.getPostsOfType('portfolio') as SimplePost[]}>
                    <p>
                        We all must survive under capitalism, and I have mostly done this in the field of software development over the past 30 years. I have a wide range of experience across languages and toolsets, from C# to PHP to TypeScript to React, Vue and more. 
                    </p>
                    <p>
                        These are a few examples of the value I have provided to various shareholders as a laborer in the industry.
                    </p>
            </PaginatePosts>
        </>
    )
};

export default Portfolio;