import Vue from "vue";
import constants from "./constants";
import NetworkRestPlugin from "@apok/admin/vue/plugins/network/rest/NetworkRestPlugin";
import NetworkGraphQLPlugin from "@apok/admin/vue/plugins/network/graphql/NetworkGraphQLPlugin";

/**
 *Network plugins installation
 */
Vue.use(NetworkRestPlugin, {
	baseURL: 'https://reqres.in/api',
	sessionCookie: constants.SESSION_COOKIE
});

Vue.use(NetworkGraphQLPlugin, {
	baseURL: 'your api URL goes here',
	sessionCookie: constants.SESSION_COOKIE
});

