# vue-qrcode

> QR code component for [Vue 2](https://v2.vuejs.org/), bases on [node-qrcode](https://github.com/soldair/node-qrcode).

- [Website](https://fengyuanchen.github.io/vue-qrcode)

## Table of contents

- [vue-qrcode](#vue-qrcode)
  - [Table of contents](#table-of-contents)
  - [Main files](#main-files)
  - [Getting started](#getting-started)
    - [Install](#install)
    - [Usage](#usage)
  - [Props](#props)
    - [value](#value)
    - [options](#options)
    - [tag](#tag)
  - [Browser support](#browser-support)
  - [Versioning](#versioning)
  - [License](#license)

## Main files

```text
dist/
├── vue-qrcode.js        (UMD)
├── vue-qrcode.min.js    (UMD, compressed)
├── vue-qrcode.common.js (CommonJS)
└── vue-qrcode.esm.js    (ES Module)
```

## Getting started

### Install

```shell
npm install vue@2 @chenfengyuan/vue-qrcode@1
```

In browser:

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-qrcode.js"></script>
<script>Vue.component(VueQrcode.name, VueQrcode);</script>
```

### Usage

```js
import Vue from 'vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';

Vue.component(VueQrcode.name, VueQrcode);
```

```html
<qrcode value="Hello, World!" :options="{ width: 200 }"></qrcode>
```

[⬆ back to top](#table-of-contents)

## Props

### value

- Type: `String`
- Default: `undefined`

The value of the QR code.

### options

- Type: `Object`
- Default: `undefined`

The options for the QR code generator. References the [node-qrcode's options](https://github.com/soldair/node-qrcode#qr-code-options).

### tag

- Type: `String`
- Default: `'canvas'`
- Options: `'canvas'`, `'img'` and other element tags.

The tag name of the component's root element.

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)

[⬆ back to top](#table-of-contents)
