import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";
import { SimplePost } from "@idkwtm/simple-posts";

interface PostProps {
    posts: SimplePost[],
    prefix?: string,
    title: string,
    children?: ReactNode
}

const PaginatePosts = (props: PostProps) => {

    const { posts, prefix = 'blog', title, children } = props;

    return (
        <>
            <Card title={title} className="mb-6">
                <CardContent>{children}</CardContent>
            </Card>
            {
                posts.map((post, index) => {
                    return(
                        <article key={index} className="block m-4">
                            <Link to={`/${prefix}/${post.slug}/`} className="font-bold">{post.title}</Link>
                            &nbsp;&mdash;&nbsp;
                            <span className="italic">
                                {post.description}
                            </span>
                        </article>
                    )
                })
            }
        </>
    )
}

export default PaginatePosts;