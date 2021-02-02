<template lang="pug">
div
  Nuxt
  .footer
    .wrap.copy
      p Copyright © 2020 Mido. All rights reserved.
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
  background-color: #000;

  .wrap {
    padding: 10px 0;
  }

  p {
    margin: 0;
    padding: 0;
    color: rgba(255, 255, 255, 0.35);
    text-align: center;
  }
}
</style>>

