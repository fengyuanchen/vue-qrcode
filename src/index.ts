import { defineComponent, h } from 'vue';
import { toCanvas, toDataURL, toString } from 'qrcode';

export default defineComponent({
  name: 'VueQrcode',

  props: {
    /**
     * The value of the QR code.
     */
    value: {
      type: String,
      default: undefined,
    },

    /**
     * The options for the QR code generator.
     * {@link https://github.com/soldair/node-qrcode#qr-code-options}
     */
    options: {
      type: Object,
      default: undefined,
    },

    /**
     * The tag name of the component's root element.
     */
    tag: {
      type: String,
      default: 'canvas',
    },
  },

  watch: {
    $props: {
      deep: true,
      immediate: true,

      /**
       * Update the QR code when props changed.
       */
      handler() {
        if (this.$el) {
          this.generate();
        }
      },
    },
  },

  mounted() {
    this.generate();
  },

  methods: {
    /**
     * Generate QR code.
     */
    generate() {
      const options = this.options || {};
      const value = String(this.value);

      switch (this.tag) {
        case 'canvas':
          toCanvas(this.$el, value, options, (error) => {
            if (error) {
              throw error;
            }
          });
          break;
        case 'img':
          toDataURL(value, options, (error, url) => {
            if (error) {
              throw error;
            }

            this.$el.src = url;
          });
          break;

        default:
          toString(value, options, (error, string) => {
            if (error) {
              throw error;
            }

            this.$el.innerHTML = string;
          });
      }
    },
  },

  render() {
    return h(this.tag, this.$slots.default);
  },
});
