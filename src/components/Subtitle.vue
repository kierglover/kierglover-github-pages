<template lang="html">

     <div class="hero-container">
          <div class="hero-container__content">
               <img class="profile-pic" src="./dist/images/Kieran.jpg">
               <h1 class="title">Kieran Glover.</h1>
               <h1 class="title--last">I build stuff for the web.</h1>
               <p>👋Hey, thanks for checking out my portfolio!</p>
               <br>
               <p>I'm a front end developer currently based in Phnom  Penh, specialising in building (and designing) high-quality websites and applications.   
               </p>
               <div class="hero-container__social-icons">
                    <a class="social-link" href="https://github.com/kierglover" target="_blank">
                         <img src="https://png.icons8.com/GitHub" > 
                    </a>
                    <a class="social-link" href="https://dribbble.com/kiergloverdesign" target="_blank">
                         <img src="https://png.icons8.com/Dribbble" > 
                    </a>
                    <a class="social-link" href="https://twitter.com/kierglover" target="_blank">
                         <img src="https://png.icons8.com/twitter"> 
                    </a>
                    <a class="social-link" href="https://youtube.com/KieranGloverDesign" target="_blank">
                         <img src="https://png.icons8.com/youtube"> 
                    </a>
                    <a class="social-link" href="https://instagram.com/kiergloverdesign" target="_blank">
                         <img src="https://png.icons8.com/Instagram"> 
                    </a>
                    <a class="social-link" href="https://medium.com/@kierglover" target="_blank">
                         <img src="https://img.icons8.com/Medium"> 
                    </a>
               </div>
          </div>
     </div>

</template>

<script>
export default {
     components: {
     }
}
</script>

<style lang="scss" scoped>

@import './static/css/global.css';

$black: #555;
$red: #e81c4f;

@mixin element-margin {
     margin-top: 25px;
     margin-bottom: 25px;
}

@mixin full-height {
     height: 100vh;
}

     a {
          font-weight: 400;
     }

     .title {
          &--last {
               margin: 0em 0em 0.5em 0em;
               color: #363636;
               font-size: 3rem!important;
               font-weight: bold!important;
          }
     }

     .hero-container {
          &__content {
               padding: 3em 10em 3em 10em;
          }
          &__social-icons {
               border-radius: 0%!important;
               margin: 50px 0px 50px 0px;
               display: flex;
          }
     }

     .social-link {
          margin: 0em 1.5em 0em 1.5em;
          max-width: 1.6em;
          width: auto;
          transition: all 0.3s;
          &:hover {
               transform: translateY(-5px);
          }
     }

     .profile-pic {
          filter: grayscale(75%);
          border-radius: 100%;
          max-width: 15em;
          max-height: 15em;
          margin: 0em 0em 2em 0em;
     }

</style>
