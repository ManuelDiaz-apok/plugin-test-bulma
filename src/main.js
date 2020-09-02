import Vue from 'vue'
import App from './App.vue'
import './config/index';
import router from './router';
import store from './store/index';
import {Server, Response} from 'miragejs'
import BulmaAdminComponents from '@apok/admin-components-bulma';
import {makeServer} from "../server";
import ChartAdminComponent from '@apok/admin-charts';

// makeServer();

/*//mirage.js server instance
const server = new Server({
  timing: 1000,
});

//server database seed
server.db.loadData({
  users: [
    {id: 1, email: 'usuario1', password: '123'},
    {id: 2, email: 'usuario2', password: '123'},
    {id: 3, email: 'usuario3', password: '123'},
  ]
});

//post request handler
server.post('/login', (schema, request) => {
  let json = JSON.parse(request.requestBody);
  let serverResponse = schema.db.users.findBy({email: json.email});
  let response;

  if(serverResponse !== null){
    if(json.password === serverResponse.password){
      response = new Response(201, {}, {message: 'logueado', access_token: '12345', status: 201});
    }else{
      response =  new Response(401, {}, {message: 'error autenticando', status: 401});
    }
  }else{
    response =  new Response(404, {}, {message: 'no existe el usuario', status: 404});
  }
  return response;
});
//GET request handler
server.get('profile', () => {
})*/

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

Vue.use(BulmaAdminComponents, {});
Vue.use(ChartAdminComponent);
