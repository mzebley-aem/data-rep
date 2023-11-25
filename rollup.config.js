import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import litCss from 'rollup-plugin-lit-css';


export default {
    input: 'src/index.ts',
    output: {
        file: 'public/bundle.js',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        resolve({
            browser: true
        }),
        typescript({
            tsconfig: './tsconfig.json'
        }),
        litCss(),
        terser({
            safari10: true,
            ecma: 2015,
        })
    ]
};
