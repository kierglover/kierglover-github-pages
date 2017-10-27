<template lang="html">
     <div class="work">
          <div class="container">
               <h2 class="subtitle">Development Work</h2>
          </div>
          <div class="tile is-ancestor projects">
               <port-card  projectImage="./static/web-development-cambodia.jpeg" title="CRM" tag="Web Development" description="The Centre for Resposonsible Management was developed for the University of Winchester to empower responsible managers & leaders to make a positive impact on the planet."></port-card>
               <port-card   projectImage="./static/web-development-dog-walking-cambodia.jpeg" title="Happy Schnozzles" tag="Web Development" description="Happy Schnozzles was developed to help a local dog walking company grow their online presence. Since launch the site is receving an average of 500 page views per month with a bounce rate of only 1%."></port-card>
          </div>
          <div class="container">
               <h2 class="subtitle">Personal Project</h2>
          </div>
          <div class="tile is-ancestor projects">
               <port-card  projectImage="./static/web-development-cambodia.jpeg" title="CRM" tag="Web Development" description="The Centre for Resposonsible Management was developed for the University of Winchester to empower responsible managers & leaders to make a positive impact on the planet."></port-card>
               <port-card   projectImage="./static/web-development-dog-walking-cambodia.jpeg" title="Happy Schnozzles" tag="Web Development" description="Happy Schnozzles was developed to help a local dog walking company grow their online presence. Since launch the site is receving an average of 500 page views per month with a bounce rate of only 1%."></port-card>
          </div>
          <div class="container">
               <h2 class="subtitle">Design & Illustration<i class="em em-computer"></i></h2>
          </div>
          <div class="tile is-ancestor projects">
               <port-card  projectImage="./static/web-development-cambodia.jpeg" title="CRM" tag="Web Development"></port-card>
               <port-card   projectImage="./static/web-development-dog-walking-cambodia.jpeg" title="Happy Schnozzles" tag="Web Development"></port-card>
               <port-card   projectImage="./static/web-development-dog-walking-cambodia.jpeg" title="Happy Schnozzles" tag="Web Development"></port-card>
          </div>
     </div>

</template>

<script>
import Card from './Card.vue'
export default {
     name: 'Grid',
     components: {
          'port-card': Card
     }
}
</script>

<style lang="sass" scoped>
@mixin element-margin {
     margin-top: 25px;
     margin-bottom: 25px;
}
@mixin emoji-padding {
     padding: 5px;
     margin-left: 15px;
     margin-bottom: 20px;
}
     .em {
          @include emoji-padding;
     }
     .subtitle {
          font-size: 1.25em;
          margin-bottom: 25px;
          font-weight: 500;
          padding-right: 50px;
     }

     .work {
          padding: 30px;
     }

     .projects {
          @include element-margin;
     }

</style>
