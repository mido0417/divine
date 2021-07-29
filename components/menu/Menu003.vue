<template lang="pug">
.main-menu
  .logo
    p Logo圖來自Keyi@i11w11
  button.navbar(type="button", @click="navToggle")
    .navbar-icon
  nav.menu(v-show="isNavToggle")
    ul
      li
        nuxt-link(to="/") HOME
      li
        nuxt-link(to="/blog") BLOG
      li
        a.no-drop Services
      li
        a.no-drop PODCAST
</template>

<script>
export default {
  data() {
    return {
      isNavToggle: false,
    };
  },

  methods: {
    navToggle() {
      this.isNavToggle = !this.isNavToggle;
      console.log('11111')
    },
  },

  mounted() {
    $(document).ready(function (e) {
      var xPos = 0;
      var yPos = 0;
      var lastScrolled = 0;
      var __this = this;

      mainMenuResize();

      var menu_scroll_top1 = $(".main-menu nav").offset().top;
      mainMenuScroll();

      $(window).scroll(function (e) {
        mainMenuScroll();
      });

      $(window).resize(function (e) {
        mainMenuResize();
      });

      function mainMenuResize() {
        var ww = $(window).width();
        if (ww >= 768) {
          this.navToggle();
          // this.data.isNavToggle = true;
        }
      }

      function mainMenuScroll() {
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

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
  @media (min-width: $md) {
    flex-direction: row;
  }
  li {
    margin: 0 10px;
  }
}

a {
  text-decoration: none;
  text-transform: uppercase;
  color: rgba(103, 92, 88, 0.6);
  padding: 10px 0;
  display: block;
  transition: 0.3s;
  text-align: center;
  font-size: 1.25rem;

  @media (min-width: $md) {
    font-size: 1rem;
  }
  &:hover {
    color: #675c58;
  }
  &.nuxt-link-exact-active {
    color: #675c58;
  }
}

.main-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: transparent;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0 40px;
  background-color: #000;
  // max-width: 100%;
  // width: 100%;
}
.navbar {
  @media (min-width: $md) {
    display: none;
  }
}

.menu {
  transition: padding 0.3s;
  background-color: #fff2e2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: $md) {
    background-color: transparent;
    position: static;
  }
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
</style>