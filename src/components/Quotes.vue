<template lang="html">
     <div class="container has-text-centered" id="randomQuote">
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

$purple: #b72a67;
$peach: #fde8cb;

     #randomQuote {
          margin-top: 30px;
     }

     .subtitle {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 15px;
     }
     #quote {
          margin-top: 15px;
          padding-left: 75px;
          padding-right: 75px;
     }
</style>
