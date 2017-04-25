export default {
  dest: 'dist/bundles/comparison.umd.js',
  entry: 'dist/index.js',
  format: 'umd',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms'
  },
  moduleName: 'ng.comparison',
  sourceMap: false
}
