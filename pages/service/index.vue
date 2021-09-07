<template lang="pug">
#service.service-page
  .menu-wrap
    Menu
  Banner(:pageinfo="item" v-for="(item,index) of pageinfo", :key="pageinfo.index")
  .container
    .service-content-wrap
      .service-item(
        v-for="(item,index) of services",
        :key="services.index",
        :data-wow-delay="'0.' + index + 's'"
      )
        .img-wrap
          img.intro-img(:src="item.img", :alt="item.subtitle")
        .intro-wrap
          .title-wrap
            h3.title {{ item.name }}
            h3.subtitle {{ item.subtitle }}
          .des-wrap
            p {{ item.intro }}
          .intro-content-wrap
            p(v-if="item.content01") {{ item.content01 }}
            p(v-if="item.content02") {{ item.content02 }}
            p(v-if="item.content03") {{ item.content03 }}
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
  head: {
    title: "服務介紹｜花草魔女 Claire",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "探索自我，發現內心的光芒",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "服務介紹｜花草魔女 Claire",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "探索自我，發現內心的光芒",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://clairelin.space/service",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://clairelin.space/service",
      },
    ],
  },
  data() {
    return {
      pageinfo: [
        {
          title: "服務介紹",
          img: "https://images.unsplash.com/photo-1589289113362-2d177b108bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
        },
      ],
      services: [
        {
          name: "故事劇情推演",
          subtitle: "雷諾曼預言占卜",
          intro:
            "利用雷諾曼強大的劇情推演能力，來推測所問之事的未來發展與走向。",
          img: require("@/assets/image/service/le-intro.jpg"),
          content01: "",
          content02: "",
          content03: "",
        },
        // {
        //   name: "探索自我",
        //   subtitle: "塔羅占卜",
        //   intro:
        //     "受過往經驗束縛而失去前進的勇氣，想探索靈魂深處真實的自己，讓塔羅牌來輔佐你看到不一樣的自己",
        //   img: require("@/assets/image/service/tarot-card.png"),
        //   content01: "",
        //   content02: "",
        //   content03: "",
        // },
        {
          name: "靈魂記憶",
          subtitle: "前世記憶引導觀想",
          intro:
            "藉由引導冥想帶你進入前世記憶中，探尋靈魂深處那顆深埋已久的因。",
          img: require("@/assets/image/service/door.jpg"),
          content01: "",
          content02: "",
          content03: "",
        },
        {
          name: "來自大地的禮物",
          subtitle: "個人專屬精油調製",
          intro:
            "精油是大地贈與我們的禮物，利用精油調製出適合你當前能量狀態的專屬精油。",
          img: require("@/assets/image/service/oil.jpg"),
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

.container {
  max-width: 800px;
  margin: 0 auto;
}

.service-content-wrap {
  padding: 25px 0;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
  @media (min-width: $md) {
    flex-direction: row;
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
}

.img-wrap {
  width: 120px;
}
.intro-wrap {
  .title-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    text-align: center;
    .title {
      font-size: 1rem;
    }
    .subtitle {
      font-size: 1.25rem;
    }
  }
  .des-wrap {
  }
  .intro-content-wrap {
  }
}
</style>