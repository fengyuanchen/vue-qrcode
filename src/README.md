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
  <vue-qrcode
    value="https://fengyuanchen.github.io/vue-qrcode"
    :options="{
      color: {
        dark: '#0074d9',
        light: '#7fdbff',
      },
    }"
  ></vue-qrcode>
</template>
```

## Custom tag

```html
<template>
  <vue-qrcode value="https://fengyuanchen.github.io/vue-qrcode" tag="img"></vue-qrcode>
  <vue-qrcode value="https://fengyuanchen.github.io/vue-qrcode" tag="svg" :options="{ width: 148 }"></vue-qrcode>
</template>
```

## Add logo

```html
<template>
  <figure class="qrcode">
    <vue-qrcode
      value="https://github.com/fengyuanchen"
      tag="svg"
      :options="{
        errorCorrectionLevel: 'Q',
        width: 200,
      }"
    ></vue-qrcode>
    <img
      class="qrcode__image"
      src="https://avatars.githubusercontent.com/u/3456749"
      alt="Chen Fengyuan"
    />
  </figure>
</template>

<style scoped>
.qrcode {
  border: 1px solid #eee;
  border-radius: 0.5rem;
  display: inline-block;
  font-size: 0;
  margin-bottom: 0;
  overflow: hidden;
  position: relative;
}

.qrcode__image {
  background-color: #fff;
  border: 0.25rem solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
}
</style>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| value | `string` | - | - | The value of the QR code. |
| options | `Object` | - | [Checkout the available options](https://github.com/soldair/node-qrcode#qr-code-options) | The options for the QR code generator. |
| tag | `string` | `"canvas"` | canvas, img, svg | The tag of the QR code. |
