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
  color: #675d58;
  text-align: center;
  font-size: 1.05rem;
}

.services-item {
  border-top: 1px solid #675d58;
  border-bottom: 1px solid #675d58;
  border-right: 1px solid #675d58;
  margin: 25px 0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:nth-child(2) {
    border-left: 1px solid #675d58;
  }

  @media (min-width: $md) {
    padding: 20px 0;
    margin: 0;
  }
}

.title-wrap {
  // margin-top:50px;
}

.img-wrap {
  max-width: 100%;
  width: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>