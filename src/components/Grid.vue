<template lang="html">
     <div class="work">

          <!-- RECENT PROJECTS SECTION -->
          <div class="container">
               <h2 class="subtitle">Client Projects</h2>
               <hr class="hr-short">
          </div>
          <div class="tile is-ancestor projects">
               <port-card  projectImage="./static/Pancier-residence-Web-Development.jpg" title="Pancier Residence" siteLink="http://www.pancier-residence.com/" description="Pancier Residence is one of Phnom Penh's newest premier residential and commercial developments. With exclusive link house and shop house options providing a modern lifestyle." btnText="View Project"></port-card>
               <port-card   projectImage="./static/happy-schnozzles-winchester-web-development.jpg" title="Happy Schnozzles" siteLink="https://www.happyschnozzles.com/" description="Happy Schnozzles was developed to help a local dog walking company grow their online presence. Since launch the site is receving an average of 500 views per month with a bounce rate of only 1%." btnText="View Project"></port-card>
               <port-card   projectImage="./static/Smango-House-Website-Development.jpg" title="SMango House Resort" siteLink="http://smangohouse-cambodia.com/" description="SMango House Cambodia is a tranquil and relaxing eco-friendly resort just on the outskirts of Phnom Penh Cambodia. The resort is ready to welcome visitors with pool, restaurant and more." btnText="View Project"></port-card>
          </div>

          <!-- Testominials Section -->
          <div class="container">
               <h2 class="subtitle">Testimonials</h2>
               <hr class="hr-short">
          </div>

          <port-testimonials class="has-text-centered"></port-testimonials>

          <!-- Personal Project -->
          <div class="container">
               <h2 class="subtitle">Personal Project</h2>
               <hr class="hr-short">
          </div>
          <div class="tile is-ancestor projects">
               <port-card  projectImage="./static/kieran-glover-random-quotes.jpg" title="Random Quote Generator" description="To practice my Vue.js skills and displaying data from a simple API, I created a simple quote generator website." siteLink="quoteGen.html" btnText="View Project"></port-card>
               <port-card  projectImage="./static/kieran-glover-trick-shot.jpg" title="Trick Shot" description="Trick Shot is an addictive Android game build with Corona SDK - a  Lua based mobile framework." btnText="Demo Coming Soon"></port-card>
               <port-card   projectImage="./static/kieran-glover-codepen.jpg" title="Code Explorations" description="I recently started using Codepen to practice and sketch out rough ideas. Take a look at my pens to see more" btnText="See Pens" siteLink="https://codepen.io/kiroid123/"></port-card>
          </div>
     </div>

</template>

<script>
import Card from './Card.vue'
import Testimonials from './Testimonials.vue'
import Quotes from './Quotes.vue'
export default {
     name: 'Grid',
     components: {
          'port-card': Card,
          'port-testimonials': Testimonials,
          'port-quotes': Quotes
     }
}
</script>

<style lang="sass" scoped>

$purple: #b72a67;
$peach: #fde8cb;

@mixin element-margin {
     margin-top: 25px;
     margin-bottom: 25px;
}

     .subtitle {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 15px;
     }

     .work {
          padding: 50px;
     }

     .projects {
          @include element-margin;
     }

     .hr-short {
          width: 7%;
          height: 5px;
          background-color: $peach;
     }

</style>
