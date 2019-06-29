Vue.component(VueQrcode.name, VueQrcode);

describe('props', () => {
  describe('options', () => {
    it('should apply the options', (done) => {
      new Vue({
        template: '<qrcode value="1" :options="{ width: 200 }"></qrcode>',
        mounted() {
          setTimeout(() => {
            expect(this.$el.width).to.equal(200);
            done();
          }, 100);
        },
      }).$mount();
    });

    it('should update the QR code automatically when the options changed', (done) => {
      new Vue({
        data() {
          return {
            options: {
              margin: 0,
              color: {
                dark: '#000',
              },
            },
          };
        },
        template: '<qrcode value="1" :options="options"></qrcode>',
        mounted() {
          setTimeout(() => {
            const context = this.$el.getContext('2d');
            let { data } = context.getImageData(0, 0, 1, 1);

            // #000 (black)
            expect(data[0]).to.equal(0);
            expect(data[1]).to.equal(0);
            expect(data[2]).to.equal(0);
            expect(data[3]).to.equal(255);
            this.options.color.dark = '#007bff';
            setTimeout(() => {
              ({ data } = context.getImageData(0, 0, 1, 1));

              // #007bff (blue)
              expect(data[0]).to.equal(0);
              expect(data[1]).to.equal(123);
              expect(data[2]).to.equal(255);
              expect(data[3]).to.equal(255);
              done();
            }, 100);
          }, 100);
        },
      }).$mount();
    });
  });

  describe('tag', () => {
    it('should be "canvas" by default', (done) => {
      new Vue({
        template: '<qrcode value="1"></qrcode>',
        mounted() {
          expect(this.$el.tagName.toLowerCase()).to.equal('canvas');
          done();
        },
      }).$mount();
    });

    it('should be "img"', (done) => {
      new Vue({
        template: '<qrcode tag="img" value="1"></qrcode>',
        mounted() {
          expect(this.$el.tagName.toLowerCase()).to.equal('img');
          done();
        },
      }).$mount();
    });

    it('should be "div"', (done) => {
      new Vue({
        template: '<qrcode tag="div" value="1"></qrcode>',
        mounted() {
          expect(this.$el.tagName.toLowerCase()).to.equal('div');
          done();
        },
      }).$mount();
    });
  });

  describe('value', () => {
    it('should be undefined by default', (done) => {
      new Vue({
        template: '<qrcode ref="qrcode"></qrcode>',
        mounted() {
          expect(this.$refs.qrcode.value).to.be.undefined;
          done();
        },
      }).$mount();
    });

    it('should match the given value', (done) => {
      new Vue({
        template: '<qrcode ref="qrcode" value="1"></qrcode>',
        mounted() {
          expect(this.$refs.qrcode.value).to.equal('1');
          done();
        },
      }).$mount();
    });

    it('should update the QR code automatically when the value changed', (done) => {
      new Vue({
        data() {
          return {
            value: '1',
          };
        },
        template: '<qrcode :value="value"></qrcode>',
        mounted() {
          setTimeout(() => {
            const dataURL = this.$el.toDataURL();

            this.value = '2';
            setTimeout(() => {
              expect(this.$el.toDataURL()).to.not.equal(dataURL);
              done();
            }, 100);
          }, 100);
        },
      }).$mount();
    });
  });
});
