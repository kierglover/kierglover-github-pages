<template lang="html">

     <div class="hero-container">
          <div class="hero-container__content">
               <img class="profile-pic" src="./dist/images/Kieran.jpg">
               <h1 class="title">Kieran Glover</h1>
               <h2 class="subtitle">Front end designer &amp developer <a href="https://www.xn--md-via.com/" target="_blank" style="color: #e81c4f;">@Mäd.</a> Aspiring maker.</h2>
               <p>👋 Hi, I'm Kieran. Front end designer &amp developer Mäd Creative Consultancy. I also 😍 love
                    🚢 shipping my own side projects with the hope to make some 📈 MRR. 
               </p>
          </div>
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

</template>

<script>
export default {
     components: {
     }
}
</script>

<style lang="sass" scoped>

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

     .hero-container {
          @include element-margin;
          padding: 30px;
          width: 100%;
          &__content {
               padding: 0px 225px 0px 225px;
               text-align: center;
          }
          &__social-icons {
               border-radius: 0%!important;
               margin: 50px 0px 50px 0px;
               display: flex;
               justify-content: center;
               align-self: center;
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

     .title {
          margin: 30px 0px 50px 0px!important;
          font-size: 3rem;
          line-height: 2.2rem;
          font-weight: 600;
     }

     .subtitle {
          font-size: 1.4rem;
          font-weight: 400;
     }

     .button {
          font-size: 1.25rem;
          color: $red!important;
          border-color: $red;
          transition:all 0.25s ease;
          }

          .button:hover {
          color: white!important;
          background-color: $red!important;
          }

     .profile-pic {
          filter: grayscale(75%);
          border-radius: 100%;
          max-width: 15em;
          max-height: 15em;
     }

</style>
