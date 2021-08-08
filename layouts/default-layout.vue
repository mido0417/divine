<template lang="pug">
#default-layout.default-layout
  Nuxt
</template>


<script>
export default {
  mounted() {
    new WOW().init();
    $(document).ready(function (e) {
      var xPos = 0;
      var yPos = 0;
      var lastScrolled = 0;
      var __this = this;

      // get menu height
      var MenuH = $(".main-menu").height();
      $(".banner").css("margin-bottom", MenuH);

      $(window).resize(function () {
        var MenuH = $(".main-menu").height();
        $(".banner").css("margin-bottom", MenuH);
      });

      var menu_scroll_top1 = $(".menu-wrap").offset().top;
      mainMenuScroll();

      $(window).scroll(function (e) {
        mainMenuScroll();
      });

      function mainMenuScroll() {
        var wt = $(window).scrollTop();
        var menu_scroll_top2 = $(".menu-wrap").offset().top;

        if (wt >= menu_scroll_top2) {
          $(".menu-wrap").addClass("fix");
          // console.log('wt >= menu_scroll_top2')
        }

        if (wt < menu_scroll_top1) {
          $(".menu-wrap").removeClass("fix");
        }
      }
    });
  },
};
</script>

<style lang="scss">
</style>

