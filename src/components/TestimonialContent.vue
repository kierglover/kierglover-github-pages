<template lang="html">
     <div class="card">
          <div class="card-content">
               <p class="card-footer-item" id="client-review">
                    {{clientReview}}
               </p>
          </div>
          <footer class="card-footer">
               <p class="card-footer-item subtitle"><strong style="color:  #e81c4f; font-weight: bold;">{{clientName}}</strong></p>
          </footer>
     </div>
</template>

<script>
export default {
     name: 'TestimonialContent',
     props: ['clientImage', 'clientName', 'clientReview'],
}
</script>

<style lang="sass" scoped>

     .card-footer {
         border-top: none;
    }

     .card {
          box-shadow: none;
     }
</style>
