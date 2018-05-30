import Vue from 'vue'
import cssify from 'cssify'
import Sass from 'sass'
import App from './App.vue'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

cssify.byUrl('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.css')
cssify.byUrl('https://afeld.github.io/emoji-css/emoji.css')

new Vue({
  el: '#app',
  render: h => h(App)
})
