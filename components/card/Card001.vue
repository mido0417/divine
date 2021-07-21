<template lang="pug">
.card-item.wow.anima-float
  .photo
    img(:src="cards.img")
    img.card-back(
      src="https://images.unsplash.com/photo-1537420327992-d6e192287183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
    )
</template>

<script>
export default {
  props: ["cards"],
};
</script>

<style lang="scss" scoped>
.card-item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transform: translateY(20px);
  .photo {
    // width: 40%;
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
      border: 1px solid #4a4a4a;
      transition: all 0.3s;
      &:hover {
        filter: sepia(100%) brightness(2);
        box-shadow: 0px 0px 40px 5px rgba(255, 255, 255, 0.7);
        cursor: pointer;
      }
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