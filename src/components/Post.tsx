import { IPost } from "@/build/process-posts";

interface PostProps {
    post: IPost | undefined
}

const Post = (props: PostProps) => {

    const { post } = props;

    return (
        <article>
            <h1>{post?.title}</h1>
        </article>
    )
}

export default Post;