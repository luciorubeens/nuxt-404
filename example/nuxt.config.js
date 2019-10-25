module.exports = {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap',
      },
    ],
  },
  mode: 'spa',
  css: ['./app.css'],
  modules: [['../module.js']],
}
