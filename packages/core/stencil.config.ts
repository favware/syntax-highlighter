import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
	namespace: 'favware-syntax-highlighter-core',
	buildEs5: false,
	outputTargets: [
		reactOutputTarget({
			componentCorePackage: '@favware/syntax-highlighter-core',
			proxiesFile: '../react/src/index.ts'
		}),
		{
			type: 'dist',
			empty: true,
			esmLoaderPath: '../loader'
		},
		{
			type: 'docs-readme',
			strict: true
		},
		{
			type: 'www',
			serviceWorker: null
		}
	],
	plugins: [sass()]
};
