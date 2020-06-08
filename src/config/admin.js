import Vue from 'vue'
import NetworkRestPlugin from "@apok/admin/vue/plugins/network/rest/NetworkRestPlugin";

Vue.use(NetworkRestPlugin, {
    baseURL: 'http://localhost:8080/',
});