<template>
  <div id="app">
       <port-hero id="hero"></port-hero>
       <port-subtitle id="subtitle"></port-subtitle>
      <port-level></port-level>
       <port-work></port-work>
       <port-footer></port-footer>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Subtitle from './components/Subtitle.vue'
import Level from './components/Level.vue'
import Work from './components/Grid.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
       'port-hero': Hero,
       'port-subtitle': Subtitle,
       'port-level': Level,
       'port-work': Work,
       'port-footer': Footer
 },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600');

$font-stack: 'Montserrat', sans-serif;

@mixin body-padding {
     padding-left: 75px;
     padding-right: 75px;
}

@mixin element-padding {
     padding-top: 30px;
     padding-bottom: 30px;
}

p,
body {
     font-family: $font-stack;
}

p,
h1,
h2,
strong {
  color: #333;
}

     p {
          font-weight: 300;
     }

     a {
          color: #ff3860;
     }
     
     #hero {
          @include body-padding;
     }

     #subtitle {
          @include body-padding;
          @include element-padding;
     }

</style>
