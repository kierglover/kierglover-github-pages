<template lang="html">

     <div class="container" id="main-body">
          <img src="./static/" alt="">
          <h2 class="subtitle">I'm Kieran - an experienced designer and developer passionate about building fast, modern and beautiful experiences for web and mobile. From startups to established companies, I have worked on a variety of projects worldwide.</h2>
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
@mixin emoji-padding {
     padding: 5px;
     margin-left: 10px;
     margin-bottom: 20px;
}
     .em {
          @include emoji-padding;
     }

     a {
          font-weight: 600;
          color: #4a4a4a;
          transition: color 0.3s;
     }

     a:hover {
          color: #ff3860;
     }

     .subtitle {
          font-weight: 500;
     }

     #main-body {
          @include element-margin;
          padding: 30px;
          width: 100%;
     }
</style>
