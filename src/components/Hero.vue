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
               <a class="nav-item" href="https://github.com/kierglover" target="_blank">
                 <img src="https://png.icons8.com/GitHub" >
               </a>
               <a class="nav-item" href="https://twitter.com/kierglover" target="_blank">
                 <img src="https://png.icons8.com/twitter">
               </a>
               <a class="nav-item" href="https://instagram.com/kiergloverdesign" target="_blank">
                 <img src="https://png.icons8.com/Instagram">
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
