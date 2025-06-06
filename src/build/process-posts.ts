import { Plugin, ResolvedConfig } from 'vite';
import path from 'path';
import { readdir } from 'fs';
// import { readFile, readdir } from 'fs';

export default function ProcessPosts() : Plugin {

    let config: ResolvedConfig;

    return {
        name: 'process-posts:build',
        apply: 'build',
        configResolved(_config) {
            config = _config;
        },
        buildStart() {

            const dirPages = path.join(config.root, '/src/content/pages');
            const dirPosts = path.join(config.root, '/src/content/posts');
            
            console.log('Processing pages and posts.');
            console.log('Posts Dir:', dirPosts);
            console.log('Pages Dir:', dirPages);

            readdir(dirPages, (err, files) => {
                if (err) {
                    return console.error('Failed to read pages directory.');
                }

                files.forEach((file, index) => {
                    console.log(`Reading ${file} (#${index})`);

                    //let page = ParseFile(`${dirPages}/${file}`);

                });
            });
            //read all Markdown from content directory
            // pages
            // posts
            // convert to json
        }
    }
};

// function ParseFile(filepath) {

//     readFile(filepath, 'utf-8', (err, content) => {
//         //const lines = content.split('\n');
        
//     })
// }