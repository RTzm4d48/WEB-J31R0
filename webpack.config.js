const path = require('path');

module.exports = {
  entry: {
    responsive_index: './static/js/responsive/responsive-index/responsive_index.js',
    components_index: './static/js/lit-element/element-index/components_index.js',
    modules: './static/js/lit-element/element-index/modules.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Ruta de salida de los archivos compilados
    filename: '[name].js' // Nombre del archivo de salida
  },
  mode: 'development' // Establecer el modo de desarrollo
};
