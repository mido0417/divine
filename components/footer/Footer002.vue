<template lang="pug">
footer.footer
  .social-menu-wrap
    SocialMenu(
      :socials="item",
      v-for="(item,index) of socials",
      :key="socials.index"
    )
  p.copyright Copyright © By ClaireLin. All rights reserved.
</template>

<script>
import SocialMenu from "@/components/menu/SocialMenu001.vue";
export default {
  components: {
    SocialMenu,
  },
  data() {
    return {
      socials: [
        {
          name: "fb",
          icon: "fab fa-facebook",
          link: "",
          ready: false,
        },
        {
          name: "ig",
          icon: "fab fa-instagram",
          link: "https://www.instagram.com/claire.lin417/",
          ready: true,
        },
        {
          name: "mail",
          icon: "far fa-envelope",
          link: "mailto:claire.lin@clairelin.space",
          ready: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {

  // background: $lac; /* Old browsers */
  // background: -moz-linear-gradient(top, $lac 0%, $mbc 100%); /* FF3.6-15 */
  // background: -webkit-linear-gradient(
  //   top,
  //   $lac 0%,
  //   $mbc 100%
  // ); /* Chrome10-25,Safari5.1-6 */
  // background: linear-gradient(
  //   to bottom,
  //   $lac 0%,
  //   $mbc 100%
  // ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#937d79', endColorstr='#675c58',GradientType=0 ); /* IE6-9 */
  background-color: $mbc;
  .social-menu-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 10px;
  }
  .copyright {
    background-color: $mbc;
    padding: 10px 0;
  }
}
</style>