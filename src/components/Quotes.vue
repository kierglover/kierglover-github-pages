<template lang="html">
     <div class="container">
          <div id="row" v-bind="quote in quotes">
               <h2 class="subtitle">Quote of the Day</h2>
               <p id="quote">{{quotes.quote}}</p>
               <br>
               <p><strong>{{quotes.author}}</strong></p>
          </div>
     </div>
</template>

<script>
import axios from 'axios'
     export default {
       name: 'Quotes',
       data() {
         return {
              quotes: []
          }
     },
          mounted() {
                axios.get("http://quotes.stormconsultancy.co.uk/random.json")
                   .then(response => {this.quotes = response.data})
          }
     }
</script>

<style lang="sass" scoped>
     .subtitle {
          font-size: 23px;
          line-height: 1.5em;
          font-weight: 300;
     }

     #quote {
          padding-right: 85px;
     }
</style>
