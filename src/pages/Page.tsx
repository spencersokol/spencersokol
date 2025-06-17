import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSimplePostsContext } from '@idkwtm/simple-posts'
import { MySimplePost } from "@/utils/simple-post";
import ReactMarkdown from "react-markdown";
import Post from "@/components/Post";

const Page = () => {

    const simplePosts = useSimplePostsContext();
    const navigate = useNavigate();
    const { slug = '' } = useParams();
    const [page, setPage] = useState<MySimplePost>()

    useEffect(() => {
        
        if (!slug)
            throw new Error('No slug found for page.');

        if (!simplePosts.isLoaded()) // wait for data fetch
            return; 

        const _page = simplePosts.getPageBySlug(slug) as MySimplePost;
        
        if (!_page) {
            navigate('/404');
            return;
        }

        setPage(_page);

    });

    return (
        <>
            { page &&
                <>
                    <Post post={page} />
                </>
            }
        </>
    )
};

export default Page;