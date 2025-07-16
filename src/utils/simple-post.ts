/**
 * SimplePost extensibility example
 */

// import { SimplePostFactory, SimplePost, ISimplePost, ISimplePostMetaData } from "@idkwtm/simple-posts";

// export interface IMySimplePostMetaData extends ISimplePostMetaData {
//     youTubeURL: string
// }

// export interface IMySimplePost extends IMySimplePostMetaData, ISimplePost {
//     getYouTubeEmbedCode(): string;
// }

// export class MySimplePost extends SimplePost implements IMySimplePost {

//     youTubeURL: string;

//     constructor(data: IMySimplePost) {
//         super(data);
//         this.youTubeURL = data.youTubeURL;
//     }

//     getYouTubeEmbedCode() : string {
//         if (!this.youTubeURL)
//             return '';

//         return `<iframe width="560" height="315" src="${this.youTubeURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
//     };
// }

// export class MySimplePostFactory extends SimplePostFactory {

//     createPost(meta: IMySimplePostMetaData, content: string): IMySimplePost {
        
//         const post = super.createPost(meta, content) as IMySimplePost;

//         post.youTubeURL = meta.youTubeURL ?? '';

//         return new MySimplePost(post);
//     }
    
// }