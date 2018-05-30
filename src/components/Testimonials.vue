<template lang="html">
     <carousel class="carousel">
          <slide>
               <test-content clientName="Molika Suy - SMango House Resort" clientReview="Kieran, Chnai Studio, provided great service and was very thoughtful, reliable, and organized when considering my needs for our website. They helped produce my vision and imitate very well as it is showcased through the website's innovative design and functionality. I'm very pleased with the outcome and would recommend their services to anyone looking to have a spectacular website or receive any graphic design inputs for their business and other needs.">
               </test-content>
          </slide>
          <slide>
               <test-content clientName="Dr Karen Blakely - Centre for Responsible Management" clientReview="Kieran was an extremely hard worker who engaged with the project showing an ability to listen and offer plenty of ideas. He had the ability to understand what I was trying to convey through the website and was excellent in amending it in response to feedback. Not only this but Kieran was a pleasure to work with; he is friendly with a good sense of humour, hard-working and extremely keen to do a good job. He worked extremely well as part of a team, helping other members and sharing his expertise.">
               </test-content>
          </slide>
          <slide>
               <test-content clientName="Peta Tait - Happy Schnozzles" clientReview="Kieran has been amazing with helping me build my website. He has been very patient when it comes to seeing my vision and has succeeded in creating me a website to be proud of. He also continues to help with keeping my website up to date, any changes I need, including SEO and maintenance.I wouldn't hesitate in recommending him. Thanks Kieran.">
               </test-content>
          </slide>
     </carousel>
</template>

<script>
import TestimonialContent from './TestimonialContent.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
     name: 'Testimonials',
     components: {
          'carousel': Carousel,
          'slide': Slide,
          'test-content': TestimonialContent,
     },
}
</script>

<style lang="sass" scoped>
     #client-review {
          margin-top: 15px;
          padding-left: 75px;
          padding-right: 100px;

     }
     .subtitle {
          font-size: 23px;
          line-height: 1.5em;
          font-weight: 300;
     }

     .carousel {
          margin: 10px 0px 10px 0px;
     }
</style>
