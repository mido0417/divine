<template lang="pug">
#service.service-page
  .menu-wrap.full-content
    Menu
  .banner.full-content
    h2.page-title 服務項目
  .container
    .service-content-wrap
      .service-item(
        :services="item",
        v-for="(item,index) of services",
        :key="services.index",
        :data-wow-delay="'0.' + index + 's'"
      )
        .img-wrap
          img.intro-img(:src="item.img", :alt="item.subtitle")
        .intro-content-wrap
          .title-wrap
            h3.title {{ item.name }}
            h3.subtitle {{ item.subtitle }}
          .intro-wrap
            p(v-if="item.content01") {{ item.content01 }}
            p(v-if="item.content02") {{ item.content02 }}
            p(v-if="item.content03") {{ item.content03 }}
</template>

<script>
import Menu from "@/components/menu/Menu003.vue";
export default {
  components: {
    Menu,
  },
  layout: "default-layout",

  data() {
    return {
      services: [
        {
          name: "故事劇情推演",
          subtitle: "雷諾曼預言占卜",
          intro:
            "利用雷諾曼強大的劇情推演能力，來推測所問之事的未來發展與走向。",
          img: require("@/assets/image/service/le-card.png"),
          content01: "",
          content02: "",
          content03: "",
        },
        {
          name: "探索自我",
          subtitle: "塔羅占卜",
          intro:
            "受過往經驗束縛而失去前進的勇氣，想探索靈魂深處真實的自己，讓塔羅牌來輔佐你看到不一樣的自己",
          img: require("@/assets/image/service/tarot-card.png"),
          content01: "",
          content02: "",
          content03: "",
        },
        {
          name: "靈魂記憶",
          subtitle: "前世回朔引導觀想",
          intro:
            "藉由引導冥想帶你進入前世記憶中，探尋靈魂深處那顆深埋已久的因。",
          img: require("@/assets/image/service/recode.png"),
          content01: "",
          content02: "",
          content03: "",
        },
        {
          name: "來自大地的禮物",
          subtitle: "個人專屬精油調製",
          intro:
            "精油是大地贈與我們的禮物，利用精油調製出適合你當前能量狀態的專屬精油。",
          img: require("@/assets/image/service/potion.png"),
          content01: "",
          content02: "",
          content03: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  display: block;
}

.service-page {
  overflow: hidden;
  padding: 0 10px;
  background-color: $lsc;
  @media (min-width: $md) {
    padding: 0 40px;
  }

  .menu-wrap {
    padding: 0 10px 0 0;
    @media (min-width: $md) {
      padding: 0 10px;
    }
    // background-color: $lac;
  }
}

.banner {
  background-image: url(https://images.unsplash.com/photo-1589289113362-2d177b108bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80);
  background-size: cover;
  // background-position: 0 -10px;
  background-position: bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (min-width: $md) {
    height: 50vh;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: $dsc;
    opacity: 0.2;
    pointer-events: none;
    z-index: 0;
  }
  .page-title {
    position: relative;
    z-index: 1;
    font-size: 2.02rem;
    color: $lsc;
    text-shadow: 0 0 10px $dsc;
    @media (min-width: $md) {
      font-size: 4.02rem;
    }
  }
}

.service-content-wrap {
}

.service-item {
  display: flex;
  flex-direction: row;
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
}

.img-wrap {
  width: 120px;
}
.intro-content-wrap {
  .title-wrap {
    display: flex;
    flex-direction: column;
  }
}
</style>