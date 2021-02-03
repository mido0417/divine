<template>
  <div class="sv-card" :class="{ lock: !services.ready }">
  <!-- <div class="sv-card"> -->
    <div class="wrap">
      <div class="photo"><img v-if="services.img" :src="services.img" /></div>
      <div class="title-wrap">
        <h3 class="name">{{ services.name }}</h3>
        <h3 v-if="services.subtitle" class="subtitle">
          {{ services.subtitle }}
        </h3>
      </div>
      <p class="separate">◊</p>
      <p class="intro">{{ services.intro }}</p>
      <div class="link">
        <nuxt-link :to="services.link">了解更多</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["services"],
};
</script>

<style lang="scss" scoped>
.sv-card {
  transition: all 0.3s;
  position: relative;
  flex-basis: 100%;
  max-width: 100%;
  opacity: 0.3;
  border-radius: 10px;

  @media (min-width: $md) {
    flex-basis: 50%;
    max-width: 50%;
    margin-left: -5px;
    margin-right: -5px;
  }

  @media (min-width: $lg) {
    flex-basis: 25%;
    max-width: 25%;
  }

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
      left: 1px;
      right: 1px;
      top: 1px;
      bottom: 1px;
      z-index: 1;
      opacity: 0.9;
      backdrop-filter: blur(5px);
    }
  }

  &:hover:not(.lock) {
    opacity: 1;
  }

  > .wrap {
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    min-height: 400px;
    padding: 20px;
    margin: 10px;
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 10px;
  }

  p,
  h3,
  a {
    text-decoration: none;
    color: #fff;
  }
  .photo {
    width: 150px;
    height: 150px;
    margin: 0 auto 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 150px;
      height: 150px;
    }
  }
  .title-wrap {
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    h3 {
      font-size: 1.2rem;
      line-height: 1;
    }
  }
  .link {
    position: absolute;
    bottom: 33px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    a {
      border: 1px solid #fff;
      border-radius: 5px;
      padding: 5px 10px;
      transition: all .3s;
      &:hover {
        background: #fff;
        color: #000;
      }
    }
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
      width: 20%;
      height: 2px;
      background-color: #fff;
      margin-left: 10px;
      @media (min-width: $lg) {
        width: 40%;
      }
    }

    &::before {
      content: "";
      display: block;
      width: 20%;
      height: 2px;
      background-color: #fff;
      margin-right: 10px;
      @media (min-width: $lg) {
        width: 40%;
      }
    }
  }
}
</style>