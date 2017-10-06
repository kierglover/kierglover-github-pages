<template lang="html">
     
     <div class="container" id="main-body">
          <h2 class="subtitle">Hi there<i class="em em-wave"></i></h2>
          <p>Currently based in Phnom Pehn Cambodia, I design and develop digtial experiences. I work as a contractor &amp digital consultant. Currently I'm working as a consulatant for <a href="http://www.eurocham-cambodia.org/" target="_blank">EuroChamb</a> but you can still <a>hire me</a>. In my free time you can find me launching different startups, reading &amp illustrating.</p>
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
