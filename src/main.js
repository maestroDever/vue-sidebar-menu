import Vue from "vue";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueSidebarMenu);

new Vue({
  render: h => h(App)
}).$mount("#app");
