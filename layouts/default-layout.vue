<template lang="pug">
#default-layout.default-layout
  Nuxt
  Footer
</template>


<script>
import Footer from "@/components/footer/Footer002.vue";
export default {
  components: {
    Footer,
  },
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss">
.default-layout {
  overflow: hidden;
}
</style>

