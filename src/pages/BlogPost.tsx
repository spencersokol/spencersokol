import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "@/components/Post";
import { SimplePost, useSimplePostsContext } from '@idkwtm/simple-posts'
import { SkeletonPage } from "@/components/ui/skeleton";

const BlogPost = () => {

    const simplePosts = useSimplePostsContext();

    const navigate = useNavigate();
    const { slug } = useParams();
    const [post, setPost] = useState<SimplePost>()

    useEffect(() => {
        
        setPost(undefined);

        if (slug) {
            
            if (!simplePosts.isLoaded()) // wait for data fetch
                return;

            const _post = simplePosts.getPostBySlug(slug) as SimplePost;

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

    return (
        <>
            { (post && slug) &&
                <Post post={post} />
            }
        </>
    )
}

export default BlogPost;