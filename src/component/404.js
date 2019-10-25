import random from 'lodash.random'
import config from '../config'
import './404.css'

export default {
  asyncData({ env }) {
    return {
      options: env.p404,
    }
  },
  render(h) {
    const names = this.options.names || Object.keys(config)
    const randomIndex = random(0, names.length - 1)
    const name = names[randomIndex]

    const properties = config[name]
    const title = this.options.title || properties.title
    const description =
      this.options.description === null
        ? null
        : this.options.description || properties.description
    const backgroundColor = this.options.colorBg || properties.colorBg
    const textColor = this.options.colorText || properties.colorText

    return h(
      'div',
      {
        class: 'p404',
        style: {
          backgroundColor,
          color: textColor,
        },
      },
      [
        h(
          'div',
          {
            class: 'p404__content',
          },
          [
            h(
              'h1',
              {
                class: 'p404__content__title',
              },
              title
            ),
            h(
              'p',
              {
                class: 'p404__content__description',
              },
              description
            ),
            h(
              'div',
              {
                class: 'p404__content__illustration',
                style: {
                  maxWidth: properties.maxWidth,
                },
              },
              [
                h('img', {
                  attrs: {
                    src: properties.illustration,
                    alt: title,
                  },
                  class: 'p404__content__illustration__img',
                }),
              ]
            ),
            h(
              'div',
              {
                class: 'p404__content__link',
              },
              [
                'In the meantime, ',
                h(
                  'a',
                  { attrs: { href: '/' } },
                  'click here to return to home'
                ),
                '.',
              ]
            ),
          ]
        ),
      ]
    )
  },
}
