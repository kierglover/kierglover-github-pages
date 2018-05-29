<template lang="html">

     <div class="columns" id="main-body">
          <div class="column">
               <h2 class="subtitle">I'm Kieran - an experienced designer and developer passionate about building fast, modern and beautiful experiences for web and mobile. From startups to established companies, I have worked on a variety of projects worldwide.</h2>
               <a class="button is-danger is-medium" href="mailto:kier.p.glover@gmail.com?Subject=Project%20enquiry" target="_top">Get in Touch</a>
          </div>
          <div class="column">
          </div>
     </div>

</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@mixin element-margin {
     margin-top: 25px;
     margin-bottom: 25px;
}

@mixin full-height {
     height: 100vh;
}

     a {
          font-weight: 600;
          color: #fff !important;
     }

     #main-body {
          @include element-margin;
          padding: 30px;
          width: 100%;
          }

     .subtitle {
          // @include full-height;
          margin-top: 100px;
          font-size: 23px;
          line-height: 1.5em;
          font-weight: 300;
     }

</style>
