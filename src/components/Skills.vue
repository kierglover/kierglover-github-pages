<template>
    <div class="section-wrap">
          <div class="text-container">
               <h2 class="subtitle">My Skills</h2>
                <p class="lead">Both personally and professionally I have gained a range of design and development skills.</p>
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

    .subtitle {
          font-size: 1.5em;
          font-weight: bold;
     }

    .lead {
         width: 50%;
     }

    .section-wrap {
          display: flex;
          flex-direction: column;
          background-color: #f8fafc;
          padding: 3em;
          @include element-padding;
     }

</style>
