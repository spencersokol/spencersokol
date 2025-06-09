import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import posts from '@/content/posts.json';
import Post from "@/components/Post";
import PaginatePosts from "@/components/PaginatePosts";
import { useSimplePostsContext } from '@idkwtm/simple-posts'
import type { SimplePost } from '@idkwtm/simple-posts'

const Blog = () => {

    const simplePosts = useSimplePostsContext();

    const navigate = useNavigate();
    const { slug } = useParams();
    const [post, setPost] = useState<SimplePost>()

    useEffect(() => {
        
        if (slug && !post) {
            
            const _post = simplePosts.getPostBySlug(slug);

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
                <PaginatePosts posts={posts} />
            }
        </div>
    )
}

export default Blog;