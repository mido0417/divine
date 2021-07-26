<template>
  <div id="divine" class="divine-wrap">
    <Menu002 />
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
.divine-wrap {
  // background: linear-gradient(0deg, #ffddbf 5%,#dd4a68 20%, #5f0738 45%);
  // background: -moz-linear-gradient(0deg, #ffddbf 5%,#dd4a68 20%, #5f0738 45%);
  // background: -webkit-linear-gradient(0deg, #ffddbf 5%,#dd4a68 20%, #5f0738 45%);
  // background: -o-linear-gradient(0deg, #ffddbf 5%,#dd4a68 20%, #5f0738 45%);

  background: linear-gradient(0deg, #2a5aa1 20%, #020b3a 45%);
  background: -moz-linear-gradient(0deg, #2a5aa1 20%, #020b3a 45%);
  background: -webkit-linear-gradient(0deg, #2a5aa1 20%, #020b3a 45%);
  background: -o-linear-gradient(0deg, #2a5aa1 20%, #020b3a 45%);
}

.footer {
  background-color: transparent;
  p {
    color: #fff;
  }
}
</style>

