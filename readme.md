<h1 align="center" >🔦 Nuxt 404 Module</h1>
<p align="center">Nuxt.js module to render trendy 404 pages.</p>

<p align="center">
  <img src="https://badgen.net/npm/v/@luciorubeens/nuxt-404" />
  <img src="https://badgen.net/badge/license/MIT/blue" />
  <a title="Netlify Status" href="https://app.netlify.com/sites/nuxt-404-module/deploys">
    <img src="https://api.netlify.com/api/v1/badges/02178e55-a0ef-40b6-8749-fa914086a527/deploy-status">
  </a>
</p>

<p align="center">
  <a href="https://nuxt-404-module.netlify.com/404">Open Preview</a>
</p>

## Installation

```bash
yarn add @luciorubeens/nuxt-404
# or
npm i @luciorubeens/nuxt-404
```

## Setup

Add `@luciorubeens/nuxt-404` to modules section of `nuxt.config.js`:

```js
{
  modules: [
    '@luciorubeens/nuxt-404',
  ],
  p404: {
    // Manipulate module options (see below)
  }
}
```

## Options

| Option | Default | Description |
| ------ | ------- | ----------- |
| `names` | [See list below](#Illustrations) | Array of illustration names to display randomly |
| `title` | Illustration title | Page title |
| `description` | Illustration description | Page subtitle |
| `colorBg` | Illustration background | Page background color |
| `colorText` | Illustration color | Text color |
| `linkText` | `Click here to return to home.` | Text to display on anchor link |

## Usage

### Specific illustrations

```js
{
  modules: [
    '@luciorubeens/nuxt-404',
  ],
  p404: {
    names: ['Confused Travolta', 'Space']
  }
}
```

### Custom options

```js
{
  modules: [
    '@luciorubeens/nuxt-404',
  ],
  p404: {
    title: '404',
    colorBg: '#FFFFFF',
    colorText: '#333333'
  }
}
```

## Illustrations

Click on the name to see the illustration.

| Name | Source |
| ---- | ------ |
| [Space](./src/images/Space.png) | Ionic Framework |
| [UnDraw](./src/images/UnDraw.png) | unDraw |
| [Confused Travolta](./src/images/ConfusedTravolta.png) | Nuxt.js |
| [Mailchimp](./src/images/Mailchimp.png) | Mailchimp |
| [Astronaut](./src/images/Astronaut.png) | Kapwing | 
| [Ballon Lost](./src/images/BallonLost.png) | Kapwing | 
| [Boat Leak](./src/images/BoatLeak.png) | Kapwing | 
| [Broken Clock](./src/images/BrokenClock.png) | Kapwing | 
| [Broken Mug](./src/images/BrokenMug.png) | Kapwing | 
| [Burnt Toast](./src/images/BurntToast.png) | Kapwing | 
| [Caution Tape](./src/images/CautionTape.png) | Kapwing | 
| [Dog Ate](./src/images/DogAte.png) | Kapwing | 
| [Ghost](./src/images/Ghost.png) | Kapwing | 
| [Ice Cream Spill](./src/images/IceCreamSpill.png) | Kapwing | 
| [Kids Toy](./src/images/Kid_sToy.png) | Kapwing | 
| [Loch Ness](./src/images/LochNess.png) | Kapwing | 
| [Lost Keys](./src/images/LostKeys.png) | Kapwing | 
| [Lost Tourist](./src/images/LostTourist.png) | Kapwing | 
| [Ostrich](./src/images/Ostrich.png) | Kapwing | 
| [Pizza Box](./src/images/PizzaBox.png) | Kapwing | 
| [Shoes Tied](./src/images/ShoesTied.png) | Kapwing | 
| [Spilled Milk](./src/images/SpilledMilk.png) | Kapwing | 
| [Trash](./src/images/Trash.png) | Kapwing |

## Disclaimer

The illustrations are not my own, most are from Kapwing including the texts and colors. Below you can see the original page not found from the source:

- [Kapwing 404 Illustrations](https://www.kapwing.com/404-illustrations)
- [Ionic Framework](https://ionicframework.com/404)
- [unDraw](https://undraw.co/)
- [Nuxt.js](https://nuxtjs.org/404)
- [Mailchimp](https://mailchimp.com/404/)

## Contribute

1.  [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2.  Install dependencies using Yarn: `yarn install`
3.  Make the necessary changes and ensure that the tests are passing using `yarn test`
4.  Send a pull request 🙌