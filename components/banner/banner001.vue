<template lang="pug">
.banner.full-content(:style="{'background-image': 'url(' + pageinfo.img + ')'}")
  h2.page-title {{ pageinfo.title }}
</template>

<script>
export default {
 props:["pageinfo"],
};
</script>

<style lang="scss" scoped>
.banner {
  background-size: cover;
  // background-position: 0 -10px;
  background-position: bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (min-width: $md) {
    height: 50vh;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: $dsc;
    opacity: 0.2;
    pointer-events: none;
    z-index: 0;
  }
  .page-title {
    position: relative;
    z-index: 1;
    font-size: 2.02rem;
    color: $lsc;
    text-shadow: 0 0 10px $dsc;
    @media (min-width: $md) {
      font-size: 4.02rem;
    }
  }
}
</style>