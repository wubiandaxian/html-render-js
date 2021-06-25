import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import clear from 'rollup-plugin-clear'

const dev = process.env.NODE_ENV == 'dev'

export default {
    input: 'src/index.js',
    output: [{
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'HtmlRender',
        sourcemap: dev && true,
    }, {
        file: 'dist/index.esm.js',
        format: 'esm',
        name: 'HtmlRender',
        sourcemap: dev && true,
    }],
    plugins: [
        clear({
            targets: ['dist']
        }),
        resolve({
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }),
        uglify(),
        dev && serve({
            port: 4000,
            path: '/index.html',
        }),
        dev && livereload({
            verbose: true,
            watch: ['dist', 'index.html', 'index.css'],
        })
    ],
};
