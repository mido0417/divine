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
    $(document).ready(function (e) {
      var xPos = 0;
      var yPos = 0;
      var lastScrolled = 0;
      var __this = this;
      if ($("#default-layout div:first-child").attr("class") == "index") {
        // get menu height
        var MenuH = $(".main-menu").height();
        $(".banner").css("margin-bottom", MenuH);
      }
      $(window).resize(function () {
        if ($("#default-layout div:first-child").attr("class") == "index") {
          var MenuH = $(".main-menu").height();
          $(".banner").css("margin-bottom", MenuH);
        }
      });

      var menu_scroll_top1 = $(".menu-wrap").offset().top;
      mainMenuScroll();

      $(window).scroll(function (e) {
        mainMenuScroll();
      });

      function mainMenuScroll() {
        var wt = $(window).scrollTop();
        var menu_scroll_top2 = $(".menu-wrap").offset().top;
        // console.log($("#default-layout div:first-child").attr("class"));
        if ($("#default-layout div:first-child").attr("class") == "index") {
          if (wt >= menu_scroll_top2) {
            $(".menu-wrap").addClass("fix");
            // console.log('wt >= menu_scroll_top2')
          }

          if (wt < menu_scroll_top1) {
            $(".menu-wrap").removeClass("fix");
          }
        }
      }
    });
  },
};
</script>

<style lang="scss">
.default-layout {
  overflow: hidden;
}
</style>

