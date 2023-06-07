import { defineConfig } from 'vite';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssCustomMedia from 'postcss-custom-media';
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                postcssImport(),
                postcssCustomProperties(),
                postcssCustomMedia(),
                postcssNested(),
                postcssPresetEnv(),
                autoprefixer(),
            ]
        },
    },
    build: {
        rollupOptions: {
            output: {

            }
        }
    }
});