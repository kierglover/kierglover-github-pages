<template lang="html">
     <a :href="siteLink" target="_blank">
          <div class="card" style="margin: 0.5em;">
               <div class="card-image">
                    <figure class="image is-3by3">
                         <img :src="projectImage" alt="Placeholder image">
                    </figure>
               </div>
               <div class="card-content">
                    <div class="media-content">
                         <h2 class="subtitle">{{title}}</h2>
                         <p class="is-6">{{description}}</p>
                    </div>
               </div>
               </div>
          </div>
     </a>
</template>

<script>
export default {
     props: ['title', 'description', 'cta-btn', 'projectImage', 'siteLink'],
     data () {
          return {
               // BtnText: "View Project"
          }
     }
}
</script>

<style lang="scss" scoped>

@import './static/css/global.css';

$darkest: #3d4852;
$grey: #b8c2cc;
$light-grey: #f8fafc;

</style>
