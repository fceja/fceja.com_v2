module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    function (css) {
      /* Safari 7.1+ Specific Styles, after scss processing */
      css.append(`
        _::-webkit-full-page-media, _:future, :root .headlines-container {
          background: rgba(85, 85, 85, 0.498);
          backdrop-filter: none;
        }
      `);
    }
  ]
}
