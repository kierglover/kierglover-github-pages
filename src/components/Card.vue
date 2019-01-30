<template lang="html">
     <div class="tile is-parent">
          <article class="tile is-child box" id="development-work">
               <img :src="projectImage" class="project-image" alt="freelance-web-developer-phnom-penh">
               <div class="project-description">
                    <p class="title">{{title}}</p>
                    <p>{{description}}</p>
                    <a class="button is-medium is-outlined" :href="siteLink" target="_blank">{{btnText}}</a>
               </div>
          </article>
     </div>
</template>

<script>
export default {
     props: ['title', 'description', 'cta-btn', 'projectImage', 'siteLink', 'btnText'],
     data () {
          return {
               // BtnText: "View Project"
          }
     }
}
</script>

<style lang="sass" scoped>
$red: #e81c4f;
     .tile {
          margin-right: 25px;
     }
     .title {
          margin-bottom: 40px;
          font-size: 1.4em;
          font-weight: bold;
          color: $red;
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

     .button.is-medium {
          margin: 30px 0px 0px 0px;
          font-size: 1.25rem;
          color: $red!important;
          border-color: $red;
          transition:all 0.25s ease;
          font-weight: 400;
     }

     .button.is-medium:hover {
          color: white!important;
          background-color: $red!important;
          }

     .box {
          border: none;
          background: none;
          box-shadow: none;
     }

     //ANIMATIONS

     @keyframes bgFade {
    from {background-color: none;}
    to {background-color: $red;}
}
</style>
