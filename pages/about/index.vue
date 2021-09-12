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
      .photo-wrap.wow.animate__animated.animate__fadeIn(data-wow-offset="30")
        .color-box
        img.avatar(src="~assets/image/8.png", alt="avatar")
      .intro-content-wrap
        p 在還沒接觸到精油的時候，路上時常聞到的香水和擴香都是我的剋星。
        p 那些香精的氣味會讓我的鼻子過敏到鼻塞流鼻水兼打噴嚏，說有多不舒服就有多不舒服⋯
        //- p 直到我遇到了一位調香師，他用精油幫我調製了一支屬於我個人的精油香水。
        //- p 我才終於知道，香氣帶來的感受是如此舒服美妙而且不會造成身體的不適。
        p 直到我開始接觸精油後才終於知道
        p 香氣帶來的感受是如此舒服美妙而且不會造成身體的不適
        p 而我也相信，從花草樹木等植物身上所萃取出來的天然精油
        p 是大地母親給予我們最大的禮物
        p 也是大地母親對於我們的愛與關懷
        p 只要妥善使用，就能改善生活
        .btn-wrap
          nuxt-link.contact-btn.more-btn(to="") 預約諮詢
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
          subtitle: "美好自己，便能連結世界",
          img: "https://images.unsplash.com/photo-1589289113362-2d177b108bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  color: $dsc;
}

.about-content-wrap {
  display: flex;
  flex-direction: row-reverse;
  margin: 50px auto;
  max-width: 860px;

  > div {
    max-width: 50%;
    flex-basis: 50%;
    margin: 30px;
  }
}

.photo-wrap {
  position: relative;
  .color-box {
    background-color: $mbc;
    height: 50%;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}

.avatar {
  display: block;
  max-width: 400px;
  width: 100%;
  position: relative;
  z-index: 1;
  background-color: $lsc;
  border: 1px solid $mbc;
  box-sizing: border-box;
  // box-shadow: none;
  // @media (min-width: $md) {
  //   box-shadow: 10px 10px 0px 1px $mbc;
  // }
}

.intro-content-wrap {
  p {
    margin: 1rem 0;
  }
}

.btn-wrap {
  margin-top: 10px;
  text-align: center;

  .more-btn {
    // box-shadow: 2px 2px 10px 0px $dsc;
    background-color: $mbc;
    color: $lsc;
    border: none;
    padding: 13px 25px;
    border-radius: 2px;
    letter-spacing: 3px;
    font-size: 0.9rem;
    margin-top: 20px;
    transition: all 0.3s;
    display: inline-block;
    text-decoration: none;
    &:hover {
      background-color: $dsc;
      cursor: pointer;
    }
  }
}
</style>