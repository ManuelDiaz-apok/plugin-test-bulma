import Vue from 'vue'
import App from './App.vue'
import './config/index';
import router from './router';
import store from './store/index';
import BulmaAdminComponents from '@apok/admin-components-bulma';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

Vue.use(BulmaAdminComponents, {});
