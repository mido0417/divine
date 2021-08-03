<template lang="pug">
.services-item
  .img-wrap
    img(:src="services.img")
  .title-wrap
    h3 {{ services.title }}
</template>

<script>
export default {
  props: ["services"],
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

h3 {
  color: $dsc;
  text-align: center;
  font-size: 1.05rem;
}

.services-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  padding: 20px 0;
  border: 1px solid $mbc;
  border-top: none;
  @media (min-width: $md) {
    flex: 1;
    padding: 20px 0;
    margin: 0;
    border-top: 1px solid $mbc;
    border-bottom: 1px solid $mbc;
    border-right: 1px solid $mbc;
    border-left: none;
    &:nth-child(2) {
      border-left: 1px solid $mbc;
    }
  }
}

.title-wrap {
  margin-top: 9px;
}

.img-wrap {
  max-width: 150%;
  width: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: $md) {
    width: 120px;
    height: 120px;
  }
  @media (min-width: $xl) {
    width: 150px;
    height: 150px;
  }
}
</style>