<template lang="pug">
.about-page
  h1(style="display: none") 生命之歌|雷諾曼、塔羅、星際瑪雅，探索自我，發現內心的光芒
  .menu-wrap
    Menu
  Banner(
    :pageinfo="item",
    v-for="(item,index) of pageinfo",
    :key="pageinfo.index"
  )
  .container
    .about-content-wrap
        .avatar-wrap.animate__animated.animate__fadeInDown(data-wow-offset="30")
          .avatar
        .intro-content-wrap.animate__animated.animate__fadeInDown(data-wow-offset="30")
          p 韻律的紅月(KIN.149)
          p 1/3顯示生產者
          p 美國NAHA國際認證初階芳療師
</template>

<script>
import Menu from "@/components/menu/Menu003.vue";
import Banner from "@/components/banner/banner001.vue";
export default {
  components: {
    Menu,
    Banner,
  },
  layout: "default-layout",
  data() {
    return {
      pageinfo: [
        {
          title: "Claire Lin",
          subtitle: "與自然共舞",
          img: "https://images.unsplash.com/photo-1589289113362-2d177b108bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>