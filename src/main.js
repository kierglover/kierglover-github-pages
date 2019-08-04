import Vue from 'vue'
import cssify from 'cssify'
import App from './App.vue'

cssify.byUrl('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.css')

new Vue({
  el: '#app',
  render: h => h(App)
})
