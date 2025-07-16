import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SimplePost, useSimplePostsContext } from '@idkwtm/simple-posts'
import Post from "@/components/Post";
import { SkeletonPage } from "@/components/ui/skeleton";

const Page = () => {

    const simplePosts = useSimplePostsContext();
    const navigate = useNavigate();
    const { slug = '' } = useParams();
    const [page, setPage] = useState<SimplePost>()

    useEffect(() => {
        
        if (!slug)
            throw new Error('No slug found for page.');

        if (!simplePosts.isLoaded()) // wait for data fetch
            return; 

        const _page = simplePosts.getPageBySlug(slug) as SimplePost;
        
        if (!_page) {
            navigate('/404');
            return;
        }

        setPage(_page);

    });

    return (
        <>
            { page ? (
                <Post post={page} />
            ) : (
                <SkeletonPage />
            )}
        </>
    )
};

export default Page;