import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardFooter } from "./ui/card";
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
                <CardFooter className="justify-center font-(family-name:--font-inconsolata) my-5">
                    &bull; {post.date.toLocaleDateString()} &bull;
                </CardFooter>
            </Card>
        </article>
    )
}

export default Post;