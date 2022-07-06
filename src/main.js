import { createApp } from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import Vue from 'vue'




Vue.config.productionTip =false
Vue.use(Vuelidate);

createApp(App).mount('#app')
