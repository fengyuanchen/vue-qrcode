import { mount } from '@vue/test-utils';
import VueQrcode from '../src';

describe('events', () => {
  describe('custom', () => {
    it('should trigger the custom `ready` event', (done) => {
      mount({
        components: {
          VueQrcode,
        },
        methods: {
          onReady(element: HTMLCanvasElement) {
            expect(element).toBeInstanceOf(HTMLCanvasElement);
            done();
          },
        },
        template: '<vue-qrcode @ready="onReady" />',
      });
    });
  });
});
