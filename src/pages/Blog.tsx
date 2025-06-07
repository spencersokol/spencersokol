import { IPost } from "@/build/process-posts";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import posts from '@/content/posts.json';
import Post from "@/components/Post";
import PaginatePosts from "@/components/PaginatePosts";

const Blog = () => {

    const navigate = useNavigate();
    const { slug } = useParams();
    const [post, setPost] = useState<IPost>()

    const loadPostData = async () => {
        
        let foundPost = posts.find((post: IPost) => post.slug === slug) as IPost | undefined;
        
        if (!foundPost) {
            navigate('/404');
            return;
        }

        setPost(foundPost);
    }

    useEffect(() => {
        
        if (0 === posts.length) {
            navigate('/404');
            return;
        }

        if (slug)
            loadPostData();
        
    }, []);

    return (
        <div>
            { slug ?
                <Post post={post} />
                :
                <PaginatePosts posts={posts} />
            }
        </div>
    )
}

export default Blog;