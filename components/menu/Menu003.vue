<template lang="pug">
.main-menu
  .logo
    p Logo圖來自Keyi@i11w11
  nav.menu
    ul
      li
        nuxt-link(to="/") HOME
      li
        nuxt-link(to="/blog") BLOG
      li
        a.no-drop service
      li
        a.no-drop PODCAST
</template>

<script>
export default {
  mounted() {
    $(document).ready(function (e) {
      var xPos = 0;
      var yPos = 0;
      var lastScrolled = 0;

      var menu_scroll_top1 = $(".main-menu nav").offset().top;
      check_main_menu();

      $(window).scroll(function (e) {
        check_main_menu();
      });

      function check_main_menu() {
        var wt = $(window).scrollTop();
        var menu_scroll_top2 = $(".main-menu nav").offset().top;

        if (wt >= menu_scroll_top2) {
          $(".main-menu nav").addClass("fix");
          // console.log('wt >= menu_scroll_top2')
        }

        if (wt < menu_scroll_top1) {
          $(".main-menu nav").removeClass("fix");
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.no-drop {
  cursor: no-drop;
}

.main-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: transparent;
  position: absolute;
  z-index: 1;
  max-width: 100%;
  width: 100%;

  .menu {
    transition: padding 0.3s;
    // &.fix {
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   right: 0;
    //   box-shadow: 0px 0px 10px 0px rgb(255 255 255 / 0.35);
    //   background-color: rgba(0, 0, 0);
    //   z-index: 10;
    //   padding: 10px 0;
    // }

    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;

      li {
        margin: 0 10px;

        a {
          text-decoration: none;
          text-transform: uppercase;
          color: rgb(255 255 255 / 0.35);
          padding: 10px 0;
          display: block;
          transition: 0.3s;

          &:hover {
            color: #fff;
          }
          &.nuxt-link-exact-active {
            color: #fff;
          }
        }
      }
    }
  }

  .logo {
    width: 50px;
    height: 50px;
    background-image: url("https://images.plurk.com/3rNys2JdaYjm2Y39jCqAwj.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    margin: 20px 0 10px;
    position: relative;

    p {
      background-color: #fff;
      border-radius: 5px;
      padding: 5px;
      position: absolute;
      left: 45px;
      top: 45px;
      opacity: 0;
      transition: 0.3s;
    }

    &:hover {
      p {
        opacity: 1;
      }
    }
  }
}
</style>