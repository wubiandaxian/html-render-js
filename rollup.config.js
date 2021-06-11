import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const dev = process.env.NODE_ENV == 'dev'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/main.js',
        format: 'iife',
        name: 'HtmlRender',
        sourcemap: dev && true,
    },
    plugins: [
        resolve({
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        }),
        uglify(),
        serve({
            port: 4000,
            path: '/index.html',
        }),
        dev && livereload({
            verbose: true,
            watch: ['dist', 'index.html', 'index.css'],
        })
    ],
};
