import { SimplePost } from "@idkwtm/simple-posts"
import ReactMarkdown from "react-markdown";

interface PostProps {
    post: SimplePost
}

const Post = (props: PostProps) => {

    const { post } = props;

    return (
        <article>
            <h1>{post.title}</h1>
            <ReactMarkdown children={post.content} />
        </article>
    )
}

export default Post;