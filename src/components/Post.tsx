import ReactMarkdown from "react-markdown";
import { MySimplePost } from "@/utils/simple-post";
import { Card, CardContent } from "./ui/card";

interface PostProps {
    post: MySimplePost
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