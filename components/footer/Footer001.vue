<template lang="pug">
  .footer
    .social
      ul
        li
    .wrap.copy
      p Copyright ©ClaireLin. All rights reserved.
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="scss">
.footer {
  background-color: $mbc;
  .wrap {
    padding: 10px 0;
  }

  p {
    margin: 0;
    padding: 0;
    color: $lsc;
    text-align: center;
  }
}
</style>

