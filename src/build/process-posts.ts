import { Plugin, ResolvedConfig } from 'vite';
import path from 'path';
import { PathLike, PathOrFileDescriptor, readdirSync, readFileSync, writeFileSync } from 'fs';
import parseMD from 'parse-md';

export interface IPostMetaData {
    title: string,
    slug: string,
    description: string
}

export interface IPost extends IPostMetaData {
    content: string
}

class Post implements IPost {

    readonly title: string = '';
    readonly content: string = '';
    readonly slug: string = '';
    readonly description: string = '';

    constructor(markdown: string) {

        const { metadata, content } = parseMD(markdown);
        const meta : IPostMetaData = metadata as IPostMetaData;

        this.title = meta.title;
        this.description = meta.description || '';
        this.slug = meta.slug;

        this.content = content;

    }

}

export type ProcessPostOptions = {
    pretty?: boolean,
    outputDir?: string,
    pagesInputDir?: string,
    postsInputDir?: string
}

export default function ProcessPosts(options : ProcessPostOptions = {}) : Plugin {

    let config: ResolvedConfig;

    return {
        name: 'process-posts:build',
        apply: 'build',
        configResolved(_config) {
            config = _config;
        },
        buildStart() {

            // set defaults for empty options
            options.outputDir = (!options.outputDir) ? path.join(config.root, '/src/content') : options.outputDir;
            options.pagesInputDir = (!options.pagesInputDir) ? path.join(config.root, '/src/content/pages') : options.pagesInputDir;
            options.postsInputDir = (!options.postsInputDir) ? path.join(config.root, '/src/content/posts') : options.postsInputDir;
            options.pretty = (!options.pretty) ? false : options.pretty;

            console.log('Processing pages and posts.');
            console.log('Posts Dir:', options.postsInputDir);
            console.log('Pages Dir:', options.pagesInputDir);

            const pages = ReadDirectory(options.pagesInputDir);
            const posts = ReadDirectory(options.postsInputDir);

            writeFileSync(`${options.outputDir}/pages.json`, (options.pretty) ? JSON.stringify(pages, null, 4) : JSON.stringify(pages));
            writeFileSync(`${options.outputDir}/posts.json`, (options.pretty) ? JSON.stringify(posts, null, 4) : JSON.stringify(posts));
            
        }
    }
};

function ReadDirectory(dirpath: PathLike): Post[] {

    const posts: Post[] = [];

    try {
        const files: String[] = readdirSync(dirpath);

        files.forEach((file, index) => {
            console.log(`Reading ${file} (#${index})`);

            let post = ParseFile(`${dirpath}/${file}`);

            if (post)
                posts.push(post);
        });

        return posts;
    } catch(err) {
        console.error('Failed to read directory.', dirpath);
        return posts;
    }

}

function ParseFile(filepath: PathOrFileDescriptor) : Post | null {

    try {
        const content: string = readFileSync(filepath, 'utf-8');
        const post = new Post(content);
        return post;
    } catch (err) {
        console.error('Could not read file:', filepath);
        return null;
    }

}