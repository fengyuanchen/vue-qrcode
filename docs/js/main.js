window.onload = function () {
  Vue.component(VueQrcode.name, VueQrcode);

  new Vue({
    el: '#app',
  });
};
