<template>
    <div class="section-wrap">
         <div class="columns">
              <div class="column">
                    <h2 class="subtitle">More about me</h2>
                    <p class="lead">Hello! I'm Kieran, a front-end developer with a keen eye for design currently based in Phnom Penh Cambodia. I develop exceptional websites and web apps that provide user-centric interfaces with modern and efficent front-end technolgy.</p>
                    <br>
                    <p class="lead">Since 2018, I have been working at <a href="https://www.xn--md-via.com/" target-="_blank">Mäd Creative Consultancy</a>, bridging the gap between design and development for some of South East Asias leading companies.</p>
                    <br>
                    <p class="lead">Here's some of the technology I have been using recently</p>
                    <!-- List of tech here -->
                    <div class="columns">
                         <div class="column">
                              <div class="columns is-mobile">
                                   <div class="column">
                                        <div class="content">
                                             <ul>
                                                  <li>Webflow</li>
                                                  <li>Vue</li>
                                                  <li>HTML &amp (S)CSS</li>
                                                  <li>Node.js</li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div class="column">
                                        <div class="content">
                                             <ul>
                                                  <li>Webflow</li>
                                                  <li>Vue</li>
                                                  <li>HTML &amp (S)CSS</li>
                                                  <li>Node.js</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
              <div class="column" style="align-items: center; display: flex;">
                   <!-- Skills items to go here -->
                   
              </div>
         </div>
    </div>
</template>

<script>


export default {
    name: 'Skills',
    components: {

    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>

@import './static/css/global.css';

$darkest: #3d4852;
$grey: #b8c2cc;
$light-grey: #f8fafc;

@mixin stripe-shadow  {
     -webkit-box-shadow: 0 13px 15px -5px rgba(50,50,93,.25), 0 8px 10px -8px rgba(0,0,0,.3), 0 -6px 10px -6px rgba(0,0,0,.025);
    box-shadow: 0 13px 15px -5px rgba(50,50,93,.25), 0 8px 10px -8px rgba(0,0,0,.3), 0 -6px 10px -6px rgba(0,0,0,.025);
    -webkit-transition-property: color,background-color,-webkit-box-shadow,-webkit-transform;
}

.portfolio-image {
     @include stripe-shadow;
     border-radius: 0.5em;
}


</style>
