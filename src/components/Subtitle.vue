<template lang="html">

     <div class="container" id="main-body">
          <img src="./static/web-developer-phnom-pehn-kieran-glover.jpeg" alt="web-developer-phnom-peh-kieran-glover">
          <h2 class="subtitle">I'm Kieran - an experienced designer and developer passionate about building fast, modern and beautiful experiences for web and mobile. From startups to established companies, I have worked on a variety of projects worldwide.</h2>
          <a class="button is-danger is-medium" href="mailto:kier.p.glover@gmail.com?Subject=Project%20enquiry" target="_top">Get in Touch</a>
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

     a {
          font-weight: 600;
          color: #fff !important;
     }

     .subtitle {
          margin-top: 15px;
          font-size: 23px;
          line-height: 1.5em;
          font-weight: 300;
     }

     #main-body {
          @include element-margin;
          padding: 30px;
          width: 100%;
     }
</style>
