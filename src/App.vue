<template>
  <div id="app">
       <port-hero></port-hero>
       <port-subtitle></port-subtitle>
       <port-work></port-work>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Subtitle from './components/Subtitle.vue'
import Work from './components/Grid.vue'
export default {
  name: 'app',
  components: {
       'port-hero': Hero,
       'port-subtitle': Subtitle,
       'port-work': Work
 },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
@mixin body-padding {
     padding-top: 40px;
     padding-bottom: 40px;
     padding-left: 130px;
     padding-right: 130px;
}
     #app {
          @include body-padding;
          background-color: #FCFCFC; 
     }

     a {
          color: #ff3860;
     }
</style>
