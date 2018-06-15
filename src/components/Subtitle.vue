<template lang="html">

     <div class="columns" id="main-body">
          <div class="column">
               <h2 class="subtitle"> 👋 I'm Kieran - a designer and developer passionate about building fast, modern and beautiful experiences for web and mobile. Currently at the beginning of my indie maker journey with the goal of making 📈 <strong> $600 in MRR </strong> from stuff I ⚒ build.</h2>
               <a class="button is-medium" href="mailto:kier.p.glover@gmail.com?Subject=Project%20enquiry" target="_top">Let's chat 🤘 </a>
          </div>
          <div class="column">
               <!-- Add something here someday -->
          </div>
     </div>

</template>

<script>
export default {
     components: {
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

@mixin full-height {
     height: 100vh;
}

     a {
          font-weight: 400;
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

     .button {
          font-size: 1.25rem;
          color: $purple!important;
          border-color: $purple;
          transition:all 0.25s ease;
          }

          .button:hover {
          color: white!important;
          background-color: $purple!important;
          }

</style>
