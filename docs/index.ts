import { createApp } from 'vue';
import App from './app.vue';
import DemoBlock from './components/demo-block.vue';
import VueQrcode from '../src';

const app = createApp(App);

app.component(DemoBlock.name, DemoBlock);
app.component(VueQrcode.name, VueQrcode);
app.mount('#app');
