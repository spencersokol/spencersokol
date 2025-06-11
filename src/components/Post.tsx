import ReactMarkdown from "react-markdown";
import { MySimplePost } from "@/utils/simple-post";

interface PostProps {
    post: MySimplePost
}

const Post = (props: PostProps) => {

    const { post } = props;

    return (
        <article className="markdown">
            <h1>{post.title}</h1>
            <ReactMarkdown children={post.content} />
        </article>
    )
}

export default Post;