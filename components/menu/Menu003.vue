<template lang="pug">
.main-menu
  .logo-wrap
    nuxt-link(to="/")
      .logo
    .slogan
      p Flower Witch
      p.name Claire Lin
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
        a(href="https://hellomido.com/") BLOG
      li
        nuxt-link(to="/service") Services
      //- li
        //- a.no-drop PODCAST
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
    background-color: $mbc;
    display: block;
    transition: all 0.3s;
    &::after,
    &::before {
      position: absolute;
      display: block;
      content: "";
      width: 100%;
      height: 2px;
      background-color: $mbc;
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
    position: fixed;
    right: 2rem;
    top: 2rem;
    .navbar-icon {
      background-color: transparent;
      &::after,
      &::before {
        background-color: $mbc;
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

.menu a {
  text-decoration: none;
  text-transform: uppercase;
  color: $mbc;
  padding: 10px 0;
  display: block;
  transition: 0.3s;
  text-align: center;
  font-size: 1.25rem;
  opacity: 0.5;
  position: relative;

  @media (min-width: $md) {
    font-size: 1rem;
    padding: 0;
  }

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background-color: $mbc;
    position: absolute;
    bottom: 5px;
    transition: all 0.3s;
    @media (min-width: $md) {
      bottom: -5px;
    }
  }

  &:hover {
    opacity: 1;
    &::after {
      width: 30%;
    }
  }
  &.nuxt-link-exact-active {
    opacity: 1;
    &::after {
      width: 100%;
    }
  }
}

.main-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: transparent;

  @media (min-width: $md) {
    // padding: 0 40px;
  }
  // max-width: 100%;
  // width: 100%;
}
.navbar {
  @media (min-width: $md) {
    display: none;
  }
}

.fix {
  .logo {
    // background-image: url("~assets/image/logo/logo_fix.png");
    -webkit-filter: brightness(500%);
    filter: brightness(500%);
    background-size: contain;
    width: 60px;
    height: 60px;
  }

  .slogan {
    p {
      color: $lsc;
    }
  }

  button {
    .navbar-icon {
      background-color: $lsc;
      &::after,
      &::before {
        background-color: $lsc;
      }
    }

    &.nav-open {
      .navbar-icon {
        &::after,
        &::before {
          background-color: $mbc;
        }
      }
    }
  }

  .main-menu {
    position: static;
    padding: 0 10px;
  }
  a {
    color: $mbc;
    &.nuxt-link-active {
      color: $mbc;
    }
    @media (min-width: $md) {
      color: $lsc;
      &.nuxt-link-active {
        color: $lsc;
      }
    }
  }
}

.menu {
  transition: padding 0.3s;
  background-color: $lsc;
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

.logo-wrap {
  display: flex;
  align-items: center;
}

.slogan {
  margin-left: 5px;
  margin-top: 7px;
  p {
    font-family: "Caudex";
    color: $mbc;
  }
  .name {
    font-size: 1.25rem;
    margin-top: 2px;
  }
}

.logo {
  width: 80px;
  height: 80px;
  display: block;
  max-width: 100%;
  background-image: url("~assets/image/logo/logo.png");
  background-size: contain;
  transition: all 0.5s;
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