module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    function (css) {
      css.append(`
        /* Safari 7.1+ Specific Styles, after SCSS processing */
        _::-webkit-full-page-media, _:future, :root .headlines-container {
          background: rgba(85, 85, 85, 0.498);
          backdrop-filter: none;
        }

        /* Safari 7.1+ Specific Keyframes */
        _::-webkit-full-page-media, _:future, :root @keyframes scrollLeft {
          0% {
            transform: translate3d(calc(100vw + 5px), 0, 0);
            -webkit-transform: translate3d(calc(100vw + 5px), 0, 0);
          }

          100% {
            transform: translate3d(-100%, 0, 0);
            -webkit-transform: translate3d(-100%, 0, 0);
          }
        }

        _::-webkit-full-page-media, _:future, :root .headline-list {
          animation: scrollLeft 200s linear infinite;
        }
      `);
    }
  ]
};
