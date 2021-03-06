import Vue from 'vue';
import Dev from './serve.vue';

// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
// === library ===
// import FormBuilder from '@/entry/library/entry.esm';
// Vue.use(FormBuilder);
// === single ===
// import FormBuilder from '@/entry/single/entry.esm';
// Vue.use(FormBuilder);

Vue.config.productionTip = false;

Vue.config.devtools = true;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
