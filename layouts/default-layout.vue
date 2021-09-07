<template lang="pug">
#default-layout.default-layout
  Nuxt
  Footer
</template>


<script>
import Footer from "@/components/footer/Footer002.vue";
export default {
  components: {
    Footer,
  },
  mounted() {
    new WOW().init();
  },
  mounted() {
    $(document).ready(function (e) {
      var xPos = 0;
      var yPos = 0;
      var lastScrolled = 0;
      var __this = this;
      var MenuH = $(".main-menu").height();

      var menu_scroll_top1 = $(".menu-wrap").offset().top;
      mainMenuScroll();

      $(window).scroll(function (e) {
        mainMenuScroll();
      });

      function mainMenuScroll() {
        var wt = $(window).scrollTop();
        var menu_scroll_top2 = $(".banner").offset().top;
        // console.log(menu_scroll_top2);
        if (wt == 0) {
          $(".menu-wrap").removeClass("fix");
        } else {
          $(".menu-wrap").addClass("fix");
        }
      }
    });
  },
};
</script>

<style lang="scss">
.default-layout {
  > div {
    overflow: hidden;
    padding: 0 10px;
    background-color: $lsc;
    @media (min-width: $md) {
      padding: 0 40px;
    }
  }
}

.fix {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: $lac;
  padding: 3px 0 5px 0;
  max-width: 100%;
  opacity: 0.9;

  a::after {
    background-color: $lsc !important;
  }
  .nav-open {
    a::after {
      background-color: $mbc !important;
    }
  }
}

.menu-wrap {
  // padding: 0 10px 0 3px;
  // @media (min-width: $md) {
  //   padding: 0 10px;
  // }
}
</style>

