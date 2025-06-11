import { SimplePostFactory, ISimplePost, ISimplePostMetaData } from "@idkwtm/simple-posts";

export interface MySimplePostMetaData extends ISimplePostMetaData {
    description: string
}

export interface MySimplePost extends MySimplePostMetaData, ISimplePost {}

export class MySimplePostFactory extends SimplePostFactory {

    createPost(meta: MySimplePostMetaData, content: string): MySimplePost {
        
        const post = super.createPost(meta, content) as MySimplePost;

        post.description = meta.description ?? '';

        return post;
    }
    
}