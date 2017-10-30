<template lang="html">
               <div class="content has-text-centered">
                    <p id="client-review">{{clientReview}}</p>
                    <p id="client-name"><strong>{{clientName}}</strong></p>
               </div>
</template>

<script>
export default {
     props: ['clientImage', 'clientName', 'clientReview'],
}
</script>

<style lang="sass" scoped>
     #client-review {
          margin-top: 15px;
          padding-left: 75px;
          padding-right: 100px;

     }
     .subtitle {
          font-size: 23px;
          line-height: 1.5em;
          font-weight: 300;
     }
</style>
