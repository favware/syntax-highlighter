import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'favware-syntax-highlighter-core',
  taskQueue: 'async',
  buildEs5: false,
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@favware/syntax-highlighter-core',
      proxiesFile: '../react/src/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: false
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
  ]
};
