import { Link } from "react-router-dom";
import { MySimplePost } from "@/utils/simple-post";

interface PostProps {
    posts: MySimplePost[]
}

const PaginatePosts = (props: PostProps) => {

    const { posts } = props;

    return (
        <div>
            <h3>{posts.length} Posts</h3>
            {
                posts.map((post, index) => {
                    return(
                        <article key={index} className="block my-4">
                            <Link to={`/blog/${post.slug}/`} >{post.title}</Link>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default PaginatePosts;