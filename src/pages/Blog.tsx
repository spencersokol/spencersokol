import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "@/components/Post";
import PaginatePosts from "@/components/PaginatePosts";
import { useSimplePostsContext } from '@idkwtm/simple-posts'
import { MySimplePost } from "@/utils/simple-post";

const Blog = () => {

    const simplePosts = useSimplePostsContext();

    const navigate = useNavigate();
    const { slug } = useParams();
    const [post, setPost] = useState<MySimplePost>()

    useEffect(() => {
        
        if (slug && !post) {
            
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

    return (
        <div>
            { !simplePosts.hasPosts() &&
                <h1>No blog posts</h1>
            }
            { (post && slug) &&
                <Post post={post} />
            }
            { !slug &&
                <PaginatePosts posts={simplePosts.getPosts() as MySimplePost[]} />
            }
        </div>
    )
}

export default Blog;