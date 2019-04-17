<template lang="html">
     <a class="box" :href="siteLink" target="_blank">
                    <img :src="projectImage" class="box__image" alt="freelance-web-developer-phnom-penh">
                    <div class="content">
                         <p class="box__title">{{title}}</p>
                         <p class="box__description">{{description}}</p>
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

<style lang="sass" scoped>
$darkest: #3d4852;
$grey: #b8c2cc;

     .box {
          width: 33.3%;
          margin: 0.75em;
          background-color: white;
          padding: 0px;
          height: 20em;
          &__image {
               min-height: auto;
               width: 100%;
               border-radius: 5px 5px 0px 0px;
          }
          &__title {
               font-size: 1.2em;
               color: $darkest;
               font-weight: bold;
          }
          &__description {
               color: $grey;
          }
          &:hover {
               box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
          }
     }
     .content {
          height: 50%;
          padding: 1em;
     }
</style>
