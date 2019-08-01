<template>
    <div class="section-wrap">
          <div class="text-container">
               <h2 class="subtitle">More about me</h2>
                <p class="lead">Hello! I'm Kieran, a front-end developer with a keen eye for design currently based in Phnom Penh Cambodia. I develop exceptional websites and web apps that provide user-centric interfaces with modern and efficent front-end technolgy.</p>
                <br>
               <p class="lead">Since 2018, I have been working at Mäd Creative Consultancy, bridging the gap between design and development for some of South East Asias leading companies.</p>
          </div>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    components: {
        
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="sass" scoped>
$darkest: #3d4852;
$grey: #b8c2cc;
$light-grey: #f8fafc;


@mixin element-padding {
     padding: 3em;
}

     a {
          color: #ff3860;
          font-weight: bold;
     }

     .text-container {
         @include element-padding;

     }

    .lead {
         width: 50%;
     }

    .section-wrap {
          display: flex;
          flex-direction: column;
          // background-color: #f8fafc;
          padding: 3em;
          @include element-padding;
     }

</style>
