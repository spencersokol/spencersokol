import ReactMarkdown from "react-markdown";
import { MySimplePost } from "@/utils/simple-post";
import { Card, CardContent, CardHeader } from "./ui/card";

interface PostProps {
    post: MySimplePost
}

const Post = (props: PostProps) => {

    const { post } = props;

    return (
        <article className="markdown">
            <Card>
                <CardHeader className="-mt-[115px] text-8xl text-white font-bold">{post.title}</CardHeader>
                <CardContent>
                    <ReactMarkdown children={post.content} />
                </CardContent>
            </Card>
        </article>
    )
}

export default Post;