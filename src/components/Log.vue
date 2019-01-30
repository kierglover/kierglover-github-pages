
<template lang="html">
  <div class="container" id="log">
      <div class="log__wrapper">
        <iframe title="Makerlog Embed" height="200" style="width:100%" scrolling="no" frameborder="0" allowtransparency="true" src="https://api.getmakerlog.com/users/1860/stats_embed"></iframe>
      </div>
  </div>

</template>

<script>
export default {
  name: 'log'
}
</script>

<style lang="scss" scoped>
@mixin box-shadow-style {
     -webkit-box-shadow: 5px 5px 50px 7px rgba(200,200,200,0.20);
     -moz-box-shadow: 5px 5px 50px 7px rgba(200,200,200,0.20);
     box-shadow: 5px 5px 50px 7px rgba(200,200,200,0.20);
}

.level-wrapper {
     margin: 75px;
}

#log {
    //  @include box-shadow-style;
     padding: 30px;
     margin: 0px, 50px, 0px, 50px;
     border-radius: 0.5em;
}
</style>
