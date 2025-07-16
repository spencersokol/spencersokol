import { useNavigate } from "react-router-dom";
import PaginatePosts from "@/components/PaginatePosts";
import { SimplePost, useSimplePostsContext } from '@idkwtm/simple-posts'
import { SkeletonPage } from "@/components/ui/skeleton";

const Blog = () => {

    const simplePosts = useSimplePostsContext();

    const navigate = useNavigate();

    if (!simplePosts.isLoaded())
        return (
            <SkeletonPage />
        );

    if (!simplePosts.hasPosts()) {
        navigate('/404');
        return;
    }

    return (
        <>
            <PaginatePosts title='Sometimes I Write...' posts={simplePosts.getPosts() as SimplePost[]}>
                <p>
                    I remember when blogging was in its heyday: Movable Type, Wordpress, web-rings, "mom-bloggers". What a time to be alive. I miss that energy of free writing and the community of the early internet, before things got weird. So this is my attempt to spit words onto the page again. Except without the spitting. And the "pages" are virtual.
                </p>
                <p>And besides... I still have many, many unsettling things to say.</p>
            </PaginatePosts>
        </>
    )
}

export default Blog;