<template lang="pug">
div
  Nuxt
  .footer
    .wrap.copy
      p Copyright © 2021 Mido. All rights reserved.
</template>>


<script>
export default {
 
 mounted() {
   new WOW().init();
 },

};
</script>

<style lang="scss">
.footer {
  background-color: #fff;

  .wrap {
    padding: 10px 0;
  }

  p {
    margin: 0;
    padding: 0;
    color: #000;
    text-align: center;
  }
}
</style>>

