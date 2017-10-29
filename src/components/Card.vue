<template lang="html">
     <div class="tile is-parent">
          <article class="tile is-child box" id="development-work">
               <img v-bind:src="projectImage" class="project-image" alt="">
               <div class="project-description">
                    <p class="title">{{title}}</p>
                    <p class="subtitle">{{description}}</p>
                    <a class="button is-medium is-danger is-outlined" :href="siteLink" target="_blank">{{BtnText}}</a>
               </div>
          </article>
     </div>
</template>

<script>
export default {
     props: ['title', 'description', 'cta-btn', 'projectImage', 'siteLink'],
     data () {
          return {
               BtnText: "View Project"
          }
     }
}
</script>

<style lang="sass" scoped>
     .tile {
          margin-right: 25px;
     }
     .title {
          margin-bottom: 40px;
          font-size: 1.25em;
          font-weight: 500;
     }
     .subtitle {
          font-size: 1rem;
          font-weight: 400;
          color: #4a4a4a;
          line-height: 1.5;
     }

     .project-image {
          margin-bottom: 20px;
          transition: opacity .5s
     }

     .box {
          border: none;
          background: none;
          box-shadow: none;
     }
</style>
