<template lang="pug">
a(:href="socials.link", target="_blank", :class="socials.name" v-if="socials.ready")
  .icon(:class="socials.icon")
</template>

<script>
export default {
  props: ["socials"],
};
</script>

<style lang="scss" scoped>
a {
  //   color: $dsc;
  color: $lsc;
  font-size: 2rem;
  margin: 0 10px;
}
</style>