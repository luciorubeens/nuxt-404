module.exports = function(moduleOptions) {
  const options = Object.assign({}, this.options.p404, moduleOptions)

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
