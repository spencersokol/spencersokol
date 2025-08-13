import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SimplePost, useSimplePostsContext } from '@idkwtm/simple-posts'
import PageContent from "@/components/PageContent";
import { SkeletonPage } from "@/components/ui/skeleton";

const PortfolioItem = () => {

    const simplePosts = useSimplePostsContext();
    const navigate = useNavigate();
    const { slug = '' } = useParams();
    const [portfolio, setPortfolio] = useState<SimplePost>()

    useEffect(() => {
        
        setPortfolio(undefined);

        if (slug) {
            
            if (!simplePosts.isLoaded()) // wait for data fetch
                return;

            const _portfolio = simplePosts.getPostOfTypeBySlug('portfolio', slug) as SimplePost;

            if (!_portfolio) {
                navigate('/404');
                return;
            }

            setPortfolio(_portfolio);
        }
        
    });

    if (!simplePosts.isLoaded())
        return (
            <SkeletonPage />
        );

    return (
        <>
            { (portfolio && slug) &&
                <PageContent post={portfolio} />
            }
        </>
    )
};

export default PortfolioItem;