<template lang="html">
     <section class="hero">
       <!-- Hero header: will stick at the top -->
       <div class="hero-body">
         <header class="nav">
           <div class="container">
             <div class="nav-left">
               <a class="nav-item">
                    <h1 class="title">Kieran Glover</h1>
               </a>
             </div>
             <div class="nav-right nav-menu">
               <a class="nav-item is-active">
                 Portfolio
               </a>
               <a class="nav-item">
                 Work
               </a>
               <a class="nav-item">
                 Blog
               </a>
               <a class="nav-item">
                 Hire
               </a>
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

     a.nav-item {
          font-size: 14px;
          padding: 30px;
          transition: color 0.3s;
     }

     a.nav-item:hover {
          color: #ff3860;
     }

     .nav {
          background-color: #FCFCFC;
     }

     .title {
          font-size: 1.75em;
     }

     .hero-body {
          padding: 0px;
     }

</style>
