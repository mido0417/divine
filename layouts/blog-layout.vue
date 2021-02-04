<template>
  <div id="blog">
    <Menu001 />
    <Nuxt />
    <Footer001 />
  </div>
</template>


<script>
export default {
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss">
#blog .footer {
  background-color: #000;
  p {
    color: #fff;
  }
}
</style>

