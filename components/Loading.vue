<template>
  <transition name="fade">
    <div class="loading-page" v-if="loading">
      <div class="pix">
        <div class="top">
          <div class="dot"></div>
        </div>
        <div class="beam-wrap">
          <div class="beam"></div>
          <div class="beam"></div>
          <div class="star-wrap">
            <i class="fas fa-star star"></i>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  transition: {
    name: "fade",
    mode: "out-in"
  },

  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.pix {
  width: 50px;

  div {
    background: #fff;
  }
  .top {
    width: 100%;
    height: 20px;
    border-radius: 55px 55px 0 0;
    position: relative;
    .dot {
      position: absolute;
      bottom: 100%;
      left: 0;
      right: 0;
      margin: auto;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: "";
        background: #000;
        width: 4px;
        height: 4px;
        display: block;
        border-radius: 50%;
      }
    }
  }
  .beam-wrap {
    background: transparent;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    position: relative;
    .beam {
      width: 5px;
      height: 50px;
    }
    .star-wrap {
      background: transparent;
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      animation-name: spin;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-timing-function: linear;

      &::after {
        content: "";
        display: block;
        width: 30px;
        height: 30px;
        box-shadow: 0px 0px 20px 2px yellow;
        border-radius: 50%;
        position: absolute;
        background: rgba(255, 255, 0, 0.45);
        opacity: 0.7;
        animation-name: flashing;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }
    }
    .star {
      color: yellow;
      -webkit-filter: drop-shadow(0px 0px 5px yellow);
      filter: drop-shadow(0px 0px 5px yellow);
    }
  }
  .bottom {
    width: 100%;
    height: 5px;
  }
}

.fade-leave-active,.fade-enter-active {
  transition: all .3s ease;
}

.fade-leave {
  opacity: 1;
}


.fade-leave-to {
  opacity: 0;
}

@keyframes flashing {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(365deg);
  }
}
</style>
