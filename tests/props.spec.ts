import { mount } from '@vue/test-utils';
import VueQrcode from '../src';

describe('props', () => {
  describe('options', () => {
    it('should apply the options', (done) => {
      const wrapper = mount(VueQrcode, {
        props: {
          value: 'foo',
          options: {
            width: 200,
          },
        },
      });

      setTimeout(() => {
        expect(wrapper.vm.$el.width).toBe(200);
        done();
      }, 100);
    });

    it('should update the QR code automatically when the options changed', (done) => {
      const wrapper = mount({
        components: {
          VueQrcode,
        },
        data() {
          return {
            options: {
              width: 200,
            },
          };
        },
        mounted() {
          setTimeout(() => {
            expect(wrapper.vm.$el.width).toBe(200);
            this.options.width = 400;
            setTimeout(() => {
              expect(wrapper.vm.$el.width).toBe(400);
              done();
            }, 100);
          }, 100);
        },
        template: '<vue-qrcode :options="options" value="foo" />',
      });
    });
  });

  describe('tag', () => {
    it('should be "canvas" by default', () => {
      const wrapper = mount(VueQrcode, {
        props: {
          value: 'foo',
        },
      });

      expect(wrapper.props('tag')).toBe('canvas');
      expect(wrapper.vm.$el.tagName.toLowerCase()).toBe('canvas');
    });

    it('should be "img"', () => {
      const wrapper = mount(VueQrcode, {
        props: {
          value: 'foo',
          tag: 'img',
        },
      });

      expect(wrapper.props('tag')).toBe('img');
      expect(wrapper.vm.$el.tagName.toLowerCase()).toBe('img');
    });

    it('should be "div"', () => {
      const wrapper = mount(VueQrcode, {
        props: {
          value: 'foo',
          tag: 'div',
        },
      });

      expect(wrapper.props('tag')).toBe('div');
      expect(wrapper.vm.$el.tagName.toLowerCase()).toBe('div');
    });
  });

  describe('value', () => {
    it('should be undefined by default', () => {
      const wrapper = mount(VueQrcode);

      expect(wrapper.props('value')).toBeUndefined();
    });

    it('should match the given value', () => {
      const wrapper = mount(VueQrcode, {
        props: {
          value: 'foo',
        },
      });

      expect(wrapper.props('value')).toBe('foo');
    });

    it('should update the QR code automatically when the value changed', (done) => {
      const wrapper = mount({
        components: {
          VueQrcode,
        },
        data() {
          return {
            value: 'foo',
          };
        },
        mounted() {
          setTimeout(() => {
            const oldDataURL = wrapper.vm.$el.toDataURL();

            this.value = 'bar';
            setTimeout(() => {
              const newDataURL = wrapper.vm.$el.toDataURL();

              expect(newDataURL).not.toBe(oldDataURL);
              done();
            }, 100);
          }, 100);
        },
        template: '<vue-qrcode :value="value" />',
      });
    });
  });
});
