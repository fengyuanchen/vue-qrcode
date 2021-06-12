# vue-qrcode

[![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/vue-qrcode.svg)](https://codecov.io/gh/fengyuanchen/vue-qrcode) [![Downloads](https://img.shields.io/npm/dm/@chenfengyuan/vue-qrcode.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-qrcode) [![Version](https://img.shields.io/npm/v/@chenfengyuan/vue-qrcode/next.svg)](https://www.npmjs.com/package/@chenfengyuan/vue-qrcode) [![Gzip Size](https://img.shields.io/bundlephobia/minzip/@chenfengyuan/vue-qrcode.svg)](https://unpkg.com/@chenfengyuan/vue-qrcode/dist/vue-qrcode.js)

> QR code component for Vue 3, bases on [node-qrcode](https://github.com/soldair/node-qrcode).

- [Docs](src/README.md)
- [Demo](https://fengyuanchen.github.io/vue-qrcode)

## Main files

```text
dist/
├── vue-qrcode.js         (UMD, default)
├── vue-qrcode.min.js     (UMD, compressed)
├── vue-qrcode.esm.js     (ECMAScript Module)
└── vue-qrcode.esm.min.js (ECMAScript Module, compressed)
```

## Getting started

### Installation

```shell
npm install vue@next qrcode @chenfengyuan/vue-qrcode@next
```

In browser:

```html
<script src="/path/to/vue.js"></script><!-- Vue.js is required -->
<script src="/path/to/qrcode.js"></script><!-- qrocde is required -->
<script src="/path/to/vue-qrcode.js"></script>
```

### Usage

```js
import { createApp } from 'vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';

const app = createApp({});

app.component(VueQrcode.name, VueQrcode);
```

```html
<vue-qrcode value="Hello, World!" :options="{ width: 200 }"></vue-qrcode>
```

## Browser support

Same as Vue 3.

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)
