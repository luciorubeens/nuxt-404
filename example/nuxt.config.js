module.exports = {
  generate: {
    fallback: true,
  },
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
  p404: {
    names: [
      'Confused Travolta',
      'Space',
      'Mailchimp',
      'UnDraw',
      'Ghost',
      'Trash',
      'Lost Keys',
    ],
  },
}
