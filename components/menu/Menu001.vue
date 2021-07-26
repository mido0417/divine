<template lang="pug">
.menu-wrap
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

      var menu_scroll_top1 = $(".menu-wrap nav").offset().top;
      check_main_menu();

      $(window).scroll(function (e) {
        check_main_menu();
      });

      function check_main_menu() {
        var wt = $(window).scrollTop();
        var menu_scroll_top2 = $(".menu-wrap nav").offset().top;

        if (wt >= menu_scroll_top2) {
          $(".menu-wrap nav").addClass("fix");
          // console.log('wt >= menu_scroll_top2')
        }

        if (wt < menu_scroll_top1) {
          $(".menu-wrap nav").removeClass("fix");
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

.menu-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: rgba(0, 0, 0);

  .menu {
    transition: padding 0.3s;
    &.fix {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      box-shadow: 0px 0px 10px 0px rgb(255 255 255 / 0.35);
      background-color: rgba(0, 0, 0);
      z-index: 10;
      padding: 10px 0;
    }

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
    width: 100px;
    height: 100px;
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