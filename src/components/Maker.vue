<template lang="html">
     <div class="section-wrap" style="background-color: white;">
          <!-- Personal Project -->
          <div class="text-container">
               <h2 class="subtitle">Some things I've built</h2>
                <p class="lead">In my free-time and to level up my skills I like build quick MVP's and launch them over on <a href="https://www.producthunt.com/@kierglover1" target="_blank">Product Hunt.</a></p>
          </div>
          <div class="columns">
               <div class="column">
                    <port-card  projectImage="https://cdn.blinkloader.com/express/DALbJCwDxCZl5lYFenV5owt8E/Screen Shot 2019-04-17 at 12.16.42 PM.png" title="Millennial Money Management" description="A curated directory of fintech apps." siteLink="https://millennialmoneymanagement.xyz"></port-card>
               </div>
               <div class="column">
                    <port-card  projectImage="https://cdn.blinkloader.com/express/guiCDCuGzgYNiaSPEEVhtdUI3/Screen Shot 2019-04-17 at 12.40.34 PM.png" title="Boltflow" description="Boost performance of code exported from Webflow" siteLink="https://boltflow.xyz"></port-card>
               </div>
               <div class="column">
                    <port-card   projectImage="https://cdn.blinkloader.com/express/34RL1oS47IDQODW018JMHFmVJ/Screen Shot 2019-04-17 at 2.10.27 PM.png" title="Blog Posts" description="Ocassionally I write design & development articles." siteLink="https://medium.com/@kierglover"></port-card>
               </div>
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

<style lang="scss" scoped>

@import './static/css/global.css';

$darkest: #3d4852;
$grey: #b8c2cc;
$light-grey: #f8fafc;

    .lead {
         width: 50%;
     }

     .section-wrap {
          display: flex;
          flex-direction: column;
     }

     .text-container {
          margin: 0em 0em 3em 0em;
     }

     .hr-short {
          width: 7%;
          height: 5px;
     }

</style>
