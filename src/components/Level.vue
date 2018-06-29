<template lang="html">
     <div class="level-wrapper">
     <nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <!-- <p class="heading">Tweets</p> -->
      <p class="title">Progress</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">🚀 Shipped</p>
      <p class="title">2</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading"> ✅ To Do's Completed</p>
      <p class="title">50</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
   <div>
      <p class="heading"> ☕️ Weekly Coffee Count</p>
      <p class="title">10</p>
   </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">📈 MRR</p>
      <p class="title">0</p>
    </div>
  </div>
</nav>
</div>

</template>

<script>
export default {
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

.level {
     @include box-shadow-style;
     padding: 30px;
     margin: 0px, 50px, 0px, 50px;
     border-radius: 0.5em;
}
</style>
