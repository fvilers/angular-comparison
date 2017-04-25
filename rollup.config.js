export default {
  dest: 'dist/bundles/comparison.umd.js',
  entry: 'dist/index.js',
  format: 'umd',
  globals: {
    '@angular/core': 'ng.core',
  },
  moduleName: 'ng.comparison',
  sourceMap: false
}
