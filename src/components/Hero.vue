<template lang="html">
     <section class="hero">
       <!-- Hero header: will stick at the top -->
       <div class="hero-body">
         <header class="nav">
           <div class="container">
             <div class="nav-left">
               <h1 class="nav-title">Kieran Glover</h1>
             </div>
           </div>
         </header>
       </div>
 </section>
</template>

<script>
export default {
     data () {
          return {
               msg: 'Kieran Glover'
          }
     }
}
</script>

<style lang="sass" scoped>

     .nav {
          padding: 10px 0px 20px 0px;
     }

     a.nav-item {
          font-size: 14px;
          padding: 30px;
          transition: color 0.3s;
     }

     a.nav-item:hover {
          color: #ff3860;
     }

     .nav-title {
          color: #4a4a4a;
          font-size: 1.5em;
     }

     .hero-body {
          padding: 0px;
     }

</style>
