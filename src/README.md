# QR Code

> Easy to use QR code component, bases on [node-qrcode](https://github.com/soldair/node-qrcode).

## Basic usage

```html
<template>
  <vue-qrcode value="Hello, World!"></vue-qrcode>
  <vue-qrcode value="https://fengyuanchen.github.io/vue-qrcode"></vue-qrcode>
</template>
```

## Add options

```html
<template>
  <vue-qrcode value="https://fengyuanchen.github.io/vue-qrcode"></vue-qrcode>
  <vue-qrcode value="https://fengyuanchen.github.io/vue-qrcode" :options="{ color: { dark: '#0074d9', light: '#7fdbff' } }"></vue-qrcode>
</template>
```

## Custom tag

```html
<template>
  <vue-qrcode value="https://fengyuanchen.github.io/vue-qrcode" tag="img"></vue-qrcode>
  <vue-qrcode value="https://fengyuanchen.github.io/vue-qrcode" tag="svg" :options="{ width: 148 }"></vue-qrcode>
</template>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| value | `string` | - | - | The value of the QR code. |
| options | `Object` | - | [Checkout the available options](https://github.com/soldair/node-qrcode#qr-code-options) | The options for the QR code generator.
| tag | `string` | `"canvas"` | canvas, img, svg | The tag of the QR code. |
