import createBanner from 'create-banner';
import typescript from 'rollup-plugin-typescript2';
import { pascalCase } from 'change-case';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const name = pascalCase(pkg.name.replace(/^.+\//, ''));
const banner = createBanner({
  data: {
    year: '2018-present',
  },
  template: 'inline',
});

export default ['umd', 'esm'].map((format) => ({
  input: 'src/index.ts',
  output: ['development', 'production'].map((mode) => {
    const output = {
      banner,
      format,
      name,
      file: pkg.main,
      globals: {
        vue: 'Vue',
        qrcode: 'QRCode',
      },
    };

    if (format === 'esm') {
      output.file = pkg.module;
    }

    if (mode === 'production') {
      output.compact = true;
      output.file = output.file.replace(/(\.js)$/, '.min$1');
      output.plugins = [
        terser(),
      ];
    }

    return output;
  }),
  external: Object.keys(pkg.peerDependencies),
  plugins: [
    typescript(),
  ],
}));
