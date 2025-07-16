import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "./ui/card";
import { SimplePost } from "@idkwtm/simple-posts";

interface PostProps {
    post: SimplePost
}

const Post = (props: PostProps) => {

    const { post } = props;

    return (
        <article className="markdown">
            <Card title={post.title}>
                <CardContent>
                    <ReactMarkdown children={post.content} />
                </CardContent>
            </Card>
        </article>
    )
}

export default Post;