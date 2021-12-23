# chronoa

[![Website iskore.github.io](https://img.shields.io/website-up-down-green-red/https/iskore.github.io/chronoa.svg)](https://iskore.github.io/chronoa/)

[![Generate GitHub Pages Example](https://github.com/iskore/chronoa/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/iskore/chronoa/actions/workflows/gh-pages.yml)

Testing:

[![ESLint Test](https://github.com/iskore/chronoa/actions/workflows/lint.yml/badge.svg)](https://github.com/iskore/chronoa/actions/workflows/lint.yml)

[![User Acceptance Testing](https://github.com/iskore/chronoa/actions/workflows/user-acceptance-testing.yml/badge.svg)](https://github.com/iskore/chronoa/actions/workflows/user-acceptance-testing.yml)

Guides

- [getting started](#getting-started)
    - [cloning and setup](#cloning-and-setup)
    - [development startup](#development-startup)
    - [building for production](#building-for-production)
- [auxiliary](#auxiliary)
- [CHANGELOG](#changelog)

<hr/>

### [getting started](#top)

the following applications are required to run in `production`:

- [Node.js](https://nodejs.org/en/download/) (recommended: `v14.17.5`)

##### [cloning and setup](#top)

```
# clone full-stack template
git clone git@github.com:iskore/chronoa.git
cd template-vue-dashboard/
```

Project setup

```
npm install
```

##### [development startup](#top)

Compiles and hot-reloads for development

```
npm i
npm run serve
# access live ui at http://localhost:8080/
```

Run your tests

```
npm run test
```

Lints and fixes files

```
npm run lint
```

##### [building for production](#top)

### Compiles and minifies for production

```
npm run build
```

### [auxiliary](#top)

###### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### [CHANGELOG](#top)

**v1.0.0**

- initial release
