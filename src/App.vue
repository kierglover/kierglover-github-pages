<template>
  <div id="app">
       <port-hero id="hero"></port-hero>
       <port-subtitle id="subtitle"></port-subtitle>
       <port-work></port-work>
       <port-footer></port-footer>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Subtitle from './components/Subtitle.vue'
import Work from './components/Grid.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
       'port-hero': Hero,
       'port-subtitle': Subtitle,
       'port-work': Work,
       'port-footer': Footer
 },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
@mixin body-padding {
     padding-left: 75px;
     padding-right: 75px;
}
     
@mixin element-padding {
     padding-top: 30px;
     padding-bottom: 30px;
}
     #hero {
          @include body-padding;
     }

     #subtitle {
          @include body-padding;
          @include element-padding;
     }

     a {
          color: #ff3860;
     }

</style>
