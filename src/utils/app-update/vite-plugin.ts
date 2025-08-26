import { PluginOption, ResolvedConfig } from 'vite';
import packageInfo from '../../../package.json';
import { writeFileSync } from 'fs';
import path from 'path';

export default function VersionBuilder() : PluginOption {

    let config: ResolvedConfig;

    return {
        name: 'version-builder:build',
        apply: 'build',
        configResolved(_config) {
            config = _config;
        },
        async buildStart() {

            // extract version from package.json
            const version = { version: packageInfo.version };

            // write version.json file to public directory
            writeFileSync(path.join(config.root, '/public/version.json'), JSON.stringify(version));

            // write version.json to src directory
            writeFileSync(path.join(config.root, '/src/version.json'), JSON.stringify(version));

        }
    }
};
