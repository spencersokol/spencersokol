import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSimplePostsContext } from '@idkwtm/simple-posts'
import type { SimplePost } from '@idkwtm/simple-posts'
import ReactMarkdown from "react-markdown";

const Page = () => {

    const simplePosts = useSimplePostsContext();
    const navigate = useNavigate();
    const { slug = '' } = useParams();
    const [page, setPage] = useState<SimplePost>()

    useEffect(() => {
        
        if (!slug)
            throw new Error('No slug found for page.');

        const _page = simplePosts.getPageBySlug(slug);
        
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
                    <article className="markdown">
                        <h1>{page.title}</h1>
                        <ReactMarkdown children={page.content} />
                    </article>
                </>
            }
        </>
    )
};

export default Page;