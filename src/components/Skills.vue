<template>
    <div class="section-wrap">
         <div class="columns">
              <div class="column is-half" id="about-wrapper">
                    <h2 class="subtitle">More about me</h2>
                    <p class="lead">Hello! I'm Kieran, a front-end developer with a keen eye for design currently based in Phnom Penh Cambodia. I develop exceptional websites and web apps that provide user-centric interfaces with modern and efficent front-end technolgy.</p>
                    <br>
                    <p class="lead">Since 2018, I have been working at <a href="https://www.xn--md-via.com/" target-="_blank">Mäd Creative Consultancy</a>, bridging the gap between design and development for some of South East Asias leading companies.</p>
               </div>
               <!-- List of tech here -->
               <div class="column is-half" id="skills-wrapper">
                    <p class="lead">Here's some of the technology I have been using recently</p>
                    <div class="content" id="skills-wrapper__list">
                         <ul>
                              <h3 class="skills-wrapper__title">Development</h3>
                              <li>Webflow</li>
                              <li>Vue</li>
                              <li>HTML &amp (S)CSS</li>
                              <li>Node.js</li>
                         </ul>
                         <ul>
                              <h3 class="skills-wrapper__title">Design</h3>
                              <li>Sketch</li>
                              <li>Adobe XD</li>
                              <li>InVision</li>
                              <li>Adobe Suite</li>
                         </ul>
                    </div>
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

@mixin about-cols-margin {
     margin: 0 2em 2em 0;
}

ul {
     list-style: none!important;
     margin: 2em 6em 0 0em!important;
}

h3 {
     font-size: 1.3em;
}

#about-wrapper {
     @include about-cols-margin();
}

#skills-wrapper {
     @include about-cols-margin();
     padding: 3.75em 0 0 0;
     &__list {
          display: flex;
     }
}


</style>
