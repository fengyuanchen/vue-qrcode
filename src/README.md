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

## Add a logo

### Covering

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
  display: inline-block;
  font-size: 0;
  margin-bottom: 0;
  position: relative;
}

.qrcode__image {
  background-color: #fff;
  border: 0.25rem solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  height: 15%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
}
</style>
```

### Drawing

> Only available to canvas elements.

```html
<template>
  <vue-qrcode
    value="https://github.com/fengyuanchen"
    :options="{
      errorCorrectionLevel: 'Q',
      width: 200,
    }"
    @ready="onReady"
  ></vue-qrcode>
</template>

<script>
export default {
  methods: {
    onReady(canvas) {
      const context = canvas.getContext('2d');
      const image = new Image();

      image.src = 'https://avatars.githubusercontent.com/u/3456749';
      image.crossorigin = 'anonymous';
      image.onload = () => {
        const coverage = 0.15;
        const width = Math.round(canvas.width * coverage);
        const x = (canvas.width - width) / 2;

        this.drawImage(context, image, x, x, width, width);
      };
    },

    drawImage(context, image, x, y, width, height, radius = 4) {
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 2;
      context.shadowBlur = 4;
      context.shadowColor = '#00000040';
      context.lineWidth = 8;
      context.beginPath();
      context.moveTo(x + radius, y);
      context.arcTo(x + width, y, x + width, y + height, radius);
      context.arcTo(x + width, y + height, x, y + height, radius);
      context.arcTo(x, y + height, x, y, radius);
      context.arcTo(x, y, x + width, y, radius);
      context.closePath();
      context.strokeStyle = '#fff';
      context.stroke();
      context.clip();
      context.fillStyle = '#fff';
      context.fillRect(x, x, width, height);
      context.drawImage(image, x, x, width, height);
    },
  },
}
</script>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| value | `string` | - | - | The value of the QR code. |
| options | `Object` | - | [Checkout the available options](https://github.com/soldair/node-qrcode#qr-code-options) | The options for the QR code generator. |
| tag | `string` | `"canvas"` | canvas, img, svg | The tag of the QR code. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| ready | `($el)` | Fire when the QR code is generated. |
