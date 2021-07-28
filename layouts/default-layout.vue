<template lang="pug">
#default-layout.default-layout
  Nuxt
</template>


<script>
export default {
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss">
#index .footer {
  background-color: rgb(0, 0, 0);
  p {
    color: #fff;
  }
}
</style>

