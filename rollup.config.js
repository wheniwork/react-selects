// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

export default {
	entry: 'src/Select.js',
	dest: 'dist/Select.js',
	format: 'cjs',
	external: ['react', 'prop-types', 'react-dom'],
	plugins: [
		resolve({
			jsnext: true,
			main: true,
		}),
		sass({
			output: 'dist/Select.css',
			processor: css => postcss([autoprefixer])
					.process(css)
					.then(result => result.css),
		}),
		commonjs(),
		babel({
			babelrc: false,
			presets: [
				[
					'latest',
					{
						'es2015': {
							'modules': false,
						},
					},
				],
				'stage-0',
				'react',
			],
			plugins: [
				'external-helpers',
			],
			exclude: 'node_modules/**' // only transpile our source code
		}),
	],
};
