import { Link } from "react-router-dom";
import { MySimplePost } from "@/utils/simple-post";

interface PostProps {
    posts: MySimplePost[],
    prefix?: string,
    title: string
}

const PaginatePosts = (props: PostProps) => {

    const { posts, prefix = 'blog', title } = props;

    return (
        <>
            <h1>{title}</h1>
            {
                posts.map((post, index) => {
                    return(
                        <article key={index} className="block my-4">
                            <Link to={`/${prefix}/${post.slug}/`} >{post.title}</Link>
                        </article>
                    )
                })
            }
        </>
    )
}

export default PaginatePosts;