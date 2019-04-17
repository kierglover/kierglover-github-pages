<template lang="html">
     <div class="work">
          <!-- Personal Project -->
          <div class="text-container">
               <h2 class="subtitle">Stuff I've Made </h2>
                <p class="lead">When I'm not busy with client work, I love building mini startups and launching them over on <a href="https://www.producthunt.com/@kierglover1" target="_blank">Product Hunt.</a></p>
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
export default {
     name: 'Maker',
     components: {
          'port-card': Card,
     }
}
</script>

<style lang="sass" scoped>
$darkest: #3d4852;
$grey: #b8c2cc;
$light-grey: #f8fafc;

@mixin element-padding {
     padding: 3em;
}
     .container {
          display: flex;

     }

     .text-container {
         @include element-padding;

     }

     .subtitle {
          font-size: 1.5em;
          font-weight: bold;
     }

    .lead {
         width: 50%;
     }

     .work {
         display: flex;
         flex-direction: column;
        background-color: #f8fafc;
        padding: 3em;
        @include element-padding;
     }

     .hr-short {
          width: 7%;
          height: 5px;
     }

</style>
