<template lang="pug">
.main-menu
  .logo
    p Logo圖來自Keyi@i11w11
  button.navbar(
    type="button",
    @click="navToggle",
    :class="{ 'nav-open': isNavToggle }"
  )
    span.navbar-icon
  nav.menu(:class="{ 'nav-open': isNavToggle }")
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
      // console.log("11111");
    },
  },

  mounted() {
    $(document).ready(function (e) {
      var xPos = 0;
      var yPos = 0;
      var lastScrolled = 0;
      var __this = this;

      var menu_scroll_top1 = $(".main-menu").offset().top;
      mainMenuScroll();

      $(window).scroll(function (e) {
        mainMenuScroll();
      });

      function mainMenuScroll() {
        var wt = $(window).scrollTop();
        var menu_scroll_top2 = $(".main-menu").offset().top;

        if (wt >= menu_scroll_top2) {
          $(".main-menu").addClass("fix");
          // console.log('wt >= menu_scroll_top2')
        }

        if (wt < menu_scroll_top1) {
          $(".main-menu").removeClass("fix");
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

button {
  background-color: transparent;
  border: none;
  color: #fff;
  padding: 0;
  position: relative;
  z-index: 11;
  width: 24px;
  height: 20px;

  .navbar-icon {
    width: 100%;
    height: 2px;
    background-color: #675c58;
    display: block;
    transition: all 0.3s;
    &::after,
    &::before {
      position: absolute;
      display: block;
      content: "";
      width: 100%;
      height: 2px;
      background-color: #675c58;
      transition: all 0.5s;
    }
    &::before {
      top: 0px;
    }

    &::after {
      bottom: 0;
    }
  }

  &.nav-open {
    .navbar-icon {
      background-color: transparent;
      &::after,
      &::before {
        background-color: #675c58;
        animation-delay: 0.8s;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }

      &::before {
        top: initial;
        transform: rotate(135deg);
        // animation-name: nav_bef;
      }

      &::after {
        bottom: initial;
        // animation-name: nav_aft;
        transform: rotate(225deg);
      }
    }
  }
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
  padding: 0 10px;
  @media (min-width: $md) {
    padding: 0 40px;
  }
  // max-width: 100%;
  // width: 100%;

  &.fix {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(103, 92, 88);
    a {
      
      color: #a9a0a4;
      &.nuxt-link-active {
        color: #fbfaf9;
      }
    }
  }
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
  transform: translateX(100%);
  transition: all 0.3s;

  @media (min-width: $md) {
    display: block;
    background-color: transparent;
    position: static;
    transform: translateX(0%);
  }

  &.nav-open {
    transform: translateX(0%);
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

@keyframes nav_bef {
  100% {
    transform: rotate(45deg);
  }
}

@keyframes nav_aft {
  100% {
    transform: rotate(-45deg);
  }
}
</style>