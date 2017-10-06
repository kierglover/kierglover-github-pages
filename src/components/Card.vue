<template lang="html">
     <div class="tile is-parent">
          <article class="tile is-child box" id="development-work">
               <img v-bind:src="projectImage" class="project-image" alt="">
               <div class="project-description" v-if="active">
                    <p class="title">{{title}}</p>
                    <p class="subtitle">{{description}}</p>
                    <span class="tag is-danger">{{tag}}</span>
               </div>
          </article>
     </div>
</template>

<script>
export default {
     props: ['title', 'description', 'tag', 'projectImage'],
     data () {
       return {
            active: false
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
          border-radius: 10px;
          margin-bottom: 20px;
          transition: opacity .5s
     }

     .project-image:hover {
          border-radius: 10px;
          margin-bottom: 20px;
          opacity: 0.8;
     }

     .box {
          border: none;
          background: none;
          box-shadow: none;
     }
</style>
