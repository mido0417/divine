<template lang="pug">
.card-item
  img.card-back.wow.anima-float(
    @click="toggleActive",
    :data-wow-delay="cards.value + 's'",
    src="https://images.unsplash.com/photo-1537420327992-d6e192287183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
  )
  .card-content-wrap(v-if="isActive")
    .photo
      img(:src="cards.img")
      h2 {{ cards.title }}
    .content-wrap
      p {{ cards.content1 }}
      p(v-if="cards.content2") {{ cards.content2 }}
      p(v-if="cards.content3") {{ cards.content3 }}
</template>

<script>
export default {
  props: ["cards"],

  data() {
    return {
      isActive: false,
      isCardclose: false,
    };
  },

  methods: {
    toggleActive: function () {
      this.isActive = !this.isActive;
      this.isCardclose = !this.isCardclose;
      this.$emit('cardClose', this.isCardclose);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-item {
  display: flex;
  justify-content: center;
  align-items: flex-start;

&.card-back-close{
    .card-back{
        animation-play-state: paused;
        opacity: 0;
        pointer-events: none;
    }
}


  img {
    width: 189px;
    height: 340px;
    border-radius: 5px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .card-back {
    transform: translateY(20px);
    border: 1px solid #4a4a4a;
    transition: all 0.3s;
    opacity: 1;
    &:hover {
      filter: sepia(100%) brightness(2);
      box-shadow: 0px 0px 40px 5px rgba(255, 255, 255, 0.7);
      cursor: pointer;
    }
  }
  .card-content-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p,
    h2 {
      color: #fff;
    }

    p {
      margin: 10px 0;
    }

    h2 {
      text-align: center;
      margin: 10px 0;
      font-size: 18px;
    }

    .photo {
      //   display: flex;
      //   justify-content: center;
      //   align-items: flex-start;
    }
  }
}

.anima-float {
  animation-name: float;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1.8s;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes float {
  0% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>