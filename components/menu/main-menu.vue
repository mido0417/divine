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
        a(href="#") CONTACT
      li
        a(href="https://open.firstory.me/user/life-circle/platforms") PODCAST
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: rgba(0, 0, 0);

  .menu {
    &.fix {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      box-shadow: 0px 0px 10px 0px rgb(255 255 255 / 0.35);
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
          color: rgb(255 255 255 / 0.35);
          padding: 10px 0;
          display: block;
          transition: 0.3s;

          &:hover {
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
      transition: .3s;
    }

    &:hover {
      p {
        opacity: 1;
      }
    }
  }
}
</style>