import { useParams, useNavigate } from "react-router-dom";
import pages from '@/content/pages.json';
import { useEffect, useState } from "react";
import { IPost } from "@/build/process-posts";

const Page = () => {

    const navigate = useNavigate();
    const { slug } = useParams();
    const [page, setPage] = useState<IPost>()

    const loadPageData = async () => {
        
        let foundPage = pages.find((page: IPost) => page.slug === slug) as IPost | undefined;
        
        if (!foundPage) {
            navigate('/404');
            return;
        }

        setPage(foundPage);
    }

    useEffect(() => {
        loadPageData();
    }, []);

    return (
        <div>Page {page?.title}</div>
    )
};

export default Page;