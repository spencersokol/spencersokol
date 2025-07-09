import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "@/components/Post";
import PaginatePosts from "@/components/PaginatePosts";
import { useSimplePostsContext } from '@idkwtm/simple-posts'
import { MySimplePost } from "@/utils/simple-post";
import { SkeletonPage } from "@/components/ui/skeleton";

const Blog = () => {

    const simplePosts = useSimplePostsContext();

    const navigate = useNavigate();
    const { slug } = useParams();
    const [post, setPost] = useState<MySimplePost>()

    useEffect(() => {
        
        setPost(undefined);

        if (slug) {
            
            if (!simplePosts.isLoaded()) // wait for data fetch
                return;

            const _post = simplePosts.getPostBySlug(slug) as MySimplePost;

            if (!_post) {
                navigate('/404');
                return;
            }

            setPost(_post);
        }
        
    });

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
            { (post && slug) &&
                <Post post={post} />
            }
            { !slug &&
                <PaginatePosts title='Sometimes I Write...' posts={simplePosts.getPosts() as MySimplePost[]}>
                    <p>
                        I remember when blogging was in its heyday: Movable Type, Wordpress, web-rings, "mom-bloggers". What a time to be alive. I miss that energy of free writing and the community of the early internet, before things got weird. So this is my attempt to spit words onto the page again. Except without the spitting. And the "pages" are virtual.
                    </p>
                    <p>And besides... I still have many, many unsettling things to say.</p>
                </PaginatePosts>
            }
        </>
    )
}

export default Blog;