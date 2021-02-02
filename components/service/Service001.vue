<template>
  <div class="sv-card" :class="{ lock: !services.ready }">
    <div class="photo"></div>
    <div class="title-wrap">
      <h3 class="name">{{ services.name }}</h3>
      <h3 v-if="services.subtitle" class="subtitle">{{ services.subtitle }}</h3>
    </div>
    <p class="separate">◊</p>
    <p class="intro">{{ services.intro }}</p>
    <div class="link"><nuxt-link :to="services.link">了解更多</nuxt-link></div>
  </div>
</template>

<script>
export default {
  props: ["services"],
};
</script>

<style lang="scss" scoped>
.sv-card {
  position: relative;
  flex-basis: 20%;
  max-width: 20%;
  //   text-align: center;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  min-height: 400px;
  //   margin: 0 10px;
  padding: 20px;

  &.lock {
    &::after {
      content: "即將開放";
      color: #fff;
      font-size: 30px;
      position: absolute;
      top: 45%;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      text-align: center;
      z-index: 2;
    }
    &::before {
      border-radius: 10px;
      content: "";
      background: #000;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
      opacity: 0.9;
      backdrop-filter: blur(5px);
    }
  }

  p,
  h3,
  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
  }
  .photo {
    width: 150px;
    height: 150px;
    background-color: papayawhip;
    margin: 0 auto 15px;
  }
  .title-wrap {
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    h3 {
      font-size: 1.2rem;
      line-height: 1;
    }
  }
  .link {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  }

  .separate {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    font-size: 30px;
    width: 100%;

    &::after {
      content: "";
      display: block;
      width: 40%;
      height: 2px;
      background-color: #fff;
      margin-left: 10px;
    }

    &::before {
      content: "";
      display: block;
      width: 40%;
      height: 2px;
      background-color: #fff;
      margin-right: 10px;
    }
  }
}
</style>