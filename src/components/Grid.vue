<template lang="html">
     <div class="work">
          <div class="container">
               <h2 class="subtitle">Development Work</h2>
          </div>
          <div class="tile is-ancestor projects">
               <port-card  projectImage="./static/web-development-cambodia.jpeg" title="CRM" siteLink="https://www.responsiblemanagement.org.uk" description="The Centre for Resposonsible Management was developed for the University of Winchester to empower responsible managers & leaders to make a positive impact on the planet."></port-card>
               <port-card   projectImage="./static/web-development-dog-walking-cambodia.jpeg" title="Happy Schnozzles" siteLink="https://www.happyschnozzles.com/" description="Happy Schnozzles was developed to help a local dog walking company grow their online presence. Since launch the site is receving an average of 500 views per month with a bounce rate of only 1%."></port-card>
          </div>
          <div class="tile is-ancestor projects">
               <port-card   projectImage="./static/freelance-web-developer-phnom-penh.jpeg" title="S-Mango House Resort" siteLink="http://smangohouse-cambodia.com" description="SMango House Resort in Cambodia came to me looking for a complete site re-design &amp build. Using Bootstrap, GruntJS and some PHP magic the result was a clean and speedy site that drives more bookings."></port-card>
               <port-card   projectImage="./static/web-development-dog-walking-cambodia.jpeg" title="S-Mango House Resort" siteLink="https://www.happyschnozzles.com/" description="Happy Schnozzles was developed to help a local dog walking company grow their online presence. Since launch the site is receving an average of 500 page views per month with a bounce rate of only 1%."></port-card>
          </div>
          <div class="container">
               <h2 class="subtitle">Personal Project</h2>
          </div>
          <div class="tile is-ancestor projects">
               <port-card  projectImage="./static/web-development-cambodia.jpeg" title="Cambodia Weather" description="To help improve my development skills, in particular vuejs, I deceided to take on the challenge of creating a native weather app for Cambodia"></port-card>
               <port-card   projectImage="./static/web-development-dog-walking-cambodia.jpeg" title="Happy Schnozzles" description="Happy Schnozzles was developed to help a local dog walking company grow their online presence. Since launch the site is receving an average of 500 page views per month with a bounce rate of only 1%."></port-card>
          </div>
          <playlist></playlist>
     </div>

</template>

<script>
import Card from './Card.vue'
import Spotify from './Spotify.vue'
export default {
     name: 'Grid',
     components: {
          'port-card': Card,
          'playlist': Spotify
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
          font-size: 23px;
          line-height: 1.5em;
          font-weight: 300;
     }

     .work {
          padding: 30px;
     }

     .projects {
          @include element-margin;
     }

</style>
