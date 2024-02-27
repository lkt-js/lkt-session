import { resolve } from 'path';

const src = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'build');
const test = resolve(__dirname, 'test');
const snapshots = resolve(__dirname, 'snapshots');

export default {
  plugins: [],
  resolve: {
    alias: { '@': src, '@test': test },
  },
  build: {
    lib: {
      entry: `${src}/index.ts`,
      name: 'LktSession',
      formats: ['es']
    },
    outDir,
    minify: true,
    rollupOptions: {
      external: ['lkt-string-tools', 'lkt-date-tools', 'lkt-control-tools'],
      output: {
        globals: {
          'lkt-date-tools': 'LktDateTools',
          'lkt-string-tools': 'LktStringTools',
          'lkt-control-tools': 'LktControlTools',
        },
        sourcemapExcludeSources: true,
      },
    },
  },
  test: {
    coverage: {
      reporter: ['text', 'lcov'],
    },
    resolveSnapshotPath: (testPath, snapExtension) => {
      const path = testPath.split('/').splice(-2);
      return `${snapshots}/${path[0]}/${path[1]}${snapExtension}`;
    },
  },
};
