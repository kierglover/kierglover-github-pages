<template lang="html">
     <div class="work">
          <div class="container">
               <h2 class="subtitle">Recent Projects</h2>
               <hr class="hr-short">
          </div>
          <div class="tile is-ancestor projects">
               <port-card  projectImage="./static/web-development-cambodia.jpeg" title="CRM" siteLink="https://www.responsiblemanagement.org.uk" description="The Centre for Resposonsible Management was developed for the University of Winchester to empower responsible managers & leaders to make a positive impact on the planet." btnText="View Project"></port-card>
               <port-card   projectImage="./static/web-development-dog-walking-cambodia.jpeg" title="Happy Schnozzles" siteLink="https://www.happyschnozzles.com/" description="Happy Schnozzles was developed to help a local dog walking company grow their online presence. Since launch the site is receving an average of 500 views per month with a bounce rate of only 1%." btnText="View Project"></port-card>
          </div>
          <div class="tile is-ancestor projects">
               <port-card   projectImage="./static/freelance-web-developer-phnom-penh.jpeg" title="S-Mango House Resort" siteLink="http://smangohouse-cambodia.com" description="SMango House Resort in Cambodia came to me looking for a complete site re-design &amp build. Using Bootstrap, GruntJS and some PHP magic the result was a clean and speedy site that drives more bookings." btnText="View Project"></port-card>
               <port-card   projectImage="./static/kieran-glover-freelance-web-developer-phnom-penh.jpeg" title="Beaumont Park Music" siteLink="https://www.beaumontparkmusic.com" description="Beuamont Park Music was a brand new, responsive site build for a small music tuition buisness. Since it's launch, the website has converted several customers and has reached the first page of Google." btnText="View Project"></port-card>
          </div>

          <!-- Testominials Section -->
          <div class="container">
               <h2 class="subtitle has-text-centered">Testimonials</h2>
          </div>
          <port-testimonials clientImage="" clientName="Molika Suy - SMango House Resort" clientReview="Kieran, Chnai Studio, provided great service and was very thoughtful, reliable, and organized when considering my needs for our website. They helped produce my vision and imitate very well as it is showcased through the website's innovative design and functionality. I'm very pleased with the outcome and would recommend their services to anyone looking to have a spectacular website or receive any graphic design inputs for their business and other needs."></port-testimonials>
          <port-testimonials clientImage="" clientName="Dr Karen Blakely - Centre for Responsible Management" clientReview="Kieran was an extremely hard worker who quickly engaged with the project showing an ability to listen as well as offering plenty of ideas of his own. He had an instinctive ability to understand what I was trying to convey through the website and was excellent in amending it in response to feedback I provided. Not only this but Kieran was a pleasure to work with; he is friendly with a good sense of humour, hard-working and extremely keen to do a good job. He worked extremely well as part of a team, helping out other members and sharing his knowledge and expertise. I really enjoyed my year of working with Kieran and will miss his guidance and enthusiasm as he goes on to new challenges. I would thoroughly recommend him to future employers and clients."></port-testimonials>
          <port-testimonials clientImage="" clientName="Peta Tait - Happy Schnozzles" clientReview="Kieran has been amazing with helping me build my website. He has been very patient when it comes to seeing my vision and has succeeded in creating me a website to be proud of. He also continues to help with keeping my website up to date, any changes I need, including SEO and maintenance.I wouldn't hesitate in recommending him. Thanks Kieran."></port-testimonials>

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
