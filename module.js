module.exports = function(moduleOptions) {
  const defaultOptions = {
    linkText: 'Click here to return to home.',
  }

  const options = Object.assign(
    {},
    defaultOptions,
    this.options.p404,
    moduleOptions
  )

  this.options.env = {
    ...this.options.env,
    p404: options,
  }

  this.options.router = {
    ...this.options.router,
    extendRoutes(routes, resolve) {
      routes.push({
        name: '404',
        path: '*',
        component: resolve(__dirname, './src/component/404.js'),
      })
    },
  }
}

module.exports.meta = require('./package.json')
