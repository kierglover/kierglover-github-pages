<template lang="html">
     <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
               <header class="modal-card-head">
                    <p class="modal-card-title">{{title}}</p>
               </header>
               <section class="modal-card-body">
                    <p class="subtitle">{{description}}</p>
                    <span class="tag is-danger">{{tag}}</span>     
               </section>
                    <button class="modal-close" v-on:click="$emit('close')"></button>
          </div>
     </div>
</template>

<script>
export default {
     props:['title', 'description', 'tag'],
}
</script>

<style lang="sass" scoped>
     .modal-background {
          background: #ff7e5f;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #feb47b, #ff7e5f);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #feb47b, #ff7e5f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     }
</style>
