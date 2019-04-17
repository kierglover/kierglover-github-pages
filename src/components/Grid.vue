<template lang="html">
     <div class="work">
          <!-- RECENT PROJECTS SECTION -->
          <!-- Personal Project -->
          <div class="container">
               <h2 class="subtitle">Stuff I've Made </h2>
          </div>
          <div class="container">
               <port-card  projectImage="https://cdn.blinkloader.com/express/DALbJCwDxCZl5lYFenV5owt8E/Screen Shot 2019-04-17 at 12.16.42 PM.png" title="Millennial Money Management" description="millennialmoneymanagement.xyz" siteLink="https://millennialmoneymanagement.xyz"></port-card>
               <port-card  projectImage="https://cdn.blinkloader.com/express/guiCDCuGzgYNiaSPEEVhtdUI3/Screen Shot 2019-04-17 at 12.40.34 PM.png" title="Boltflow" description="https://boltflow.xyz" siteLink="https://boltflow.xyz"></port-card>
               <port-card   projectImage="https://cdn.blinkloader.com/express/34RL1oS47IDQODW018JMHFmVJ/Screen Shot 2019-04-17 at 2.10.27 PM.png" title="Blog Posts" description="https://medium.com/@kierglover" siteLink="https://medium.com/@kierglover"></port-card>
          </div>

     </div>

</template>

<script>
import Card from './Card.vue'
import Quotes from './Quotes.vue'
export default {
     name: 'Grid',
     components: {
          'port-card': Card,
          'port-quotes': Quotes
     }
}
</script>

<style lang="sass" scoped>

$light-grey: #f8fafc;

@mixin element-padding {
     padding: 3em;
}
     .container {
          display: flex;
     }

     .subtitle {
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 2em;
     }

     .work {
              background-color: #f8fafc;
              padding: 3em;
              @include element-padding;
     }

     .projects {
          @include element-padding;
          background-color: $light-grey;
     }

     .hr-short {
          width: 7%;
          height: 5px;
     }

</style>
