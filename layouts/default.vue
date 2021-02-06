<template lang="pug">
#index
  Nuxt
  Footer001
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
</style>>

