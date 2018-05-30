<template lang="html">
     <div class="work">
          <div class="container">
               <h2 class="subtitle">Recent Projects</h2>
               <hr class="hr-short">
          </div>
          <div class="tile is-ancestor projects">
               <port-card  projectImage="./static/Pancier-residence-Web-Development.jpg" title="Pancier Residence" siteLink="http://www.pancier-residence.com/" description="Pancier Residence is one of Phnom Penh's newest premier residential and commercial developments. With exclusive link house and shop house options providing a modern lifestyle." btnText="View Project"></port-card>
               <port-card   projectImage="./static/happy-schnozzles-winchester-web-development.jpg" title="Happy Schnozzles" siteLink="https://www.happyschnozzles.com/" description="Happy Schnozzles was developed to help a local dog walking company grow their online presence. Since launch the site is receving an average of 500 views per month with a bounce rate of only 1%." btnText="View Project"></port-card>
               <port-card   projectImage="./static/Smango-House-Website-Development.jpg" title="SMango House Resort" siteLink="http://smangohouse-cambodia.com/" description="SMango House Cambodia is a tranquil and relaxing eco-friendly resort just on the outskirts of Phnom Penh Cambodia. The resort is ready to welcome visitors with pool, restaurant and more." btnText="View Project"></port-card>
          </div>
          <div class="container">
               <h2 class="subtitle">Latest Work</h2>
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
               <port-card  projectImage="./static/freelance-web-developers-phnom-penh.jpeg" title="Cambodia Weather" description="To help improve my development skills, in particular vuejs, I deceided to take on the challenge of creating a native weather app for Cambodia" btnText="Coming Soon"></port-card>
               <port-card   projectImage="./static/kieran-glover-web-developer-phnom-penh.jpeg" title="Simple Finance Blog" description="Simple Finance Blog is a personal project aimed at helping me expand both my development knowledge and finance knowledge. I want to teach young professionals how to take advantage of modern platforms to aidtheir financial wellbeing." btnText="Coming Soon"></port-card>
          </div>
          <port-quotes></port-quotes>
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
