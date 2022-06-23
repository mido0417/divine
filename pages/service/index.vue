<template lang="pug">
#service.service-page
  .menu-wrap
    Menu
  Banner(
    :pageinfo="item",
    v-for="(item,index) of pageinfo",
    :key="pageinfo.index"
  )
  .container
    //- .service-content-wrap
    //-   .service-item(
    //-     v-for="(item,index) of services",
    //-     :key="services.index",
    //-     :data-wow-delay="'0.' + index + 's'"
    //-   )
    //-     .img-wrap
    //-       img.intro-img(:src="item.img", :alt="item.subtitle")
    //-     .intro-wrap
    //-       .title-wrap
    //-         h3.title {{ item.title }}
    //-         h3.subtitle {{ item.subtitle }}
    //-       .des-wrap
    //-         p {{ item.intro }}
    //-       .intro-content-wrap
    //-         p(v-if="item.content01") {{ item.content01 }}
    //-         p(v-if="item.content02") {{ item.content02 }}
    //-         p(v-if="item.content03") {{ item.content03 }}
    .card-wrap
      .card-title.click1
        p 精油絮語占卜
      .card-title.click2
        p 薩滿鼓療癒服務
      .card-title.click3
        p 客製化精油調香

    .service-wrap
      .service-items
        #service1.service-item.card-open
          .img-wrap
            .img
              img(src="https://images.plurk.com/6OP9qdSDNFwM4gVObgehjM.png")
            .title-wrap
              h3.title 精油絮語占卜
          .intro-wrap
            .text-wrap
              .text-content-1
                p 服務前須知：
                ol
                  li 請信任我、信任精油，占卜內容全程保密
                  li 占卜主要講的是三個月期間的能量狀態
                  li 占卜只是給予建議及方向，未來走向還是會依照個人行動而有所改變
              .text-content-2
                p 服務對象：
                ol
                  li 對精油有興趣但不知道哪一支精油比較適合我
                  li 想透過精油來認識自己
                  li 心有疑惑，想要尋求建議和可行的做法
              .text-content-3
                p 服務流程：
                ol
                  li 準備需要提出的詢問主題，雙方釐清問題
                  li 根據問題提供解答、講解與建議
                  li 根據主題有沒有其它需要確認的項目
              .text-content-4
                p 服務價格 ：
                ol
                  li 15分鐘/380
        #service2.service-item
          .img-wrap
            .img
              img(src="https://images.plurk.com/1Yr3hCfhtjKN0z6k1VkuWV.png")
            .title-wrap
              h3.title 薩滿鼓療癒服務
          .intro-wrap
            .text-wrap
              .text-content-1
                p 服務前須知：
                ol
                  li 請信任我、信任薩滿鼓，並且在薩滿鼓與吟唱的過程中允許任何天馬行空的想法及畫面出現在腦海中
                  li 能量狀態檢測以最近一個月內的狀態為主
                  li 靈性療癒主要還是著重在心與靈的層面，身體若有任何病痛請盡速就醫
              .text-content-2
                p 服務對象：
                ol
                  li 身心疲憊，想找個能夠放鬆身心的方式
                  li 覺得能量被掏空，不知道該怎麼修補
                  li 對薩滿鼓與聲音療癒有興趣
              .text-content-3
                p 服務流程：
                ol
                  li 敲擊薩滿鼓以檢測個案的能量狀態
                  li 和個案說明目前的能量狀態
                  li 療癒師將透過鼓聲與吟唱，為個案進行能量淨化及療癒
                  li 引導光與大地能量進入並回歸體內
              .text-content-4
                p 服務價格 ：
                ol
                  li 10~15分鐘/330
        #service3.service-item
          .img-wrap
            .img
              img(src="https://images.plurk.com/62z6RmAW9XltxAh0bioUoS.png")
            .title-wrap
              h3.title 客製化精油調香
          .intro-wrap
            .text-wrap
              .text-content-1
                p 服務前須知：
                ol
                  li 請告知誠實告知是否有高血壓、糖尿病、蠶豆症、代謝異常等症狀
                  li 若有不喜歡或是特別喜歡的香氣，可以於服務過程中告知
                  li 靈性療癒主要還是著重在心與靈的層面，身體若有任何病痛請盡速就醫
              .text-content-2
                p 服務對象：
                ol
                  li 想讓精油香氛進入生活、成為生活的一環
                  li 想要有一個獨一無二、專屬於自己的香氛
                  li 想透過香氛改善生活問題
              .text-content-3
                p 服務流程：
                ol
                  li 確認個案是否有高血壓、糖尿病、蠶豆症、代謝異常等症狀
                  li 詢問本次香氛的使用情境或是想要改善的生活問題
                  li 依照個案的狀態調配適合的精油配方
                  li 諮詢結束後會依照個案的使用習慣將配方製成噴霧或蠟燭
              .text-content-4
                p 服務價格 ：
                ol
                  li 10分鐘/500
                  li 可獲得一支10ML客製化香氛噴霧或蠟燭
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
    title: "服務介紹｜Hello,Mido身心靈工作室",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "探索自我，發現內心的光芒",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "服務介紹｜Hello,Mido身心靈工作室",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "探索自我，發現內心的光芒",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "",
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
          img: "https://images.plurk.com/6OP9qdSDNFwM4gVObgehjM.png",
          title: "精油絮語占卜",
          content01: "服務前須知：",
          content02: "",
          content03: "",
        },
        {
          img: "https://images.plurk.com/1Yr3hCfhtjKN0z6k1VkuWV.png",
          title: "薩滿鼓療癒",
          content01: "服務前須知：",
          content02: "",
          content03: "",
        },
        {
          img: "https://images.plurk.com/62z6RmAW9XltxAh0bioUoS.png",
          title: "客製化精油調香",
          content01: "服務前須知：",
          content02: "",
          content03: "",
        },
        {
          img: "https://images.plurk.com/1SL0Nz89VykTY3GqmvWJNB.png",
          title: "能量香氛",
          content01: "服務前須知：",
          content02: "",
          content03: "",
        },
      ],
    };
  },
  mounted() {
    $(document).ready(function (e) {
      $(".click1").click(function () {
        $("#service1").addClass("card-open");
        $(this).addClass("click");
        $("#service2").removeClass("card-open");
        $("#service3").removeClass("card-open");
        $(".click2").removeClass("click");
        $(".click3").removeClass("click");
      });
      $(".click2").click(function () {
        $("#service2").addClass("card-open");
        $(this).addClass("click");
        $("#service1").removeClass("card-open");
        $("#service3").removeClass("card-open");
        $(".click3").removeClass("click");
        $(".click1").removeClass("click");
      });
      $(".click3").click(function () {
        $("#service3").addClass("card-open");
        $(this).addClass("click");
        $("#service2").removeClass("card-open");
        $("#service1").removeClass("card-open");
        $(".click2").removeClass("click");
        $(".click1").removeClass("click");
      });
    });
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

.card-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .card-title {
    max-width: 30%;
    flex-basis: 30%;
    border: 1px solid #675c58;
    cursor: pointer;
    &:nth-child(1),
    &:nth-child(2) {
      border-right: none;
    }
    &.click {
      background-color: #675c5845;
    }
  }
  p {
    text-align: center;
    padding: 10px 0;
    height: 30px;
    text-align: center;
  }
}

.service-item {
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 25px 0;
  display: none;

  @media (min-width: $md) {
    flex-direction: row;
    align-items: flex-start;
  }
}

.card-open {
  display: flex;
}

.title {
  font-size: 1rem;
}

.img-wrap {
  width: 120px;
  margin-bottom: 20px;
  flex-basis: 30%;
  max-width: 30%;
  .title-wrap {
    text-align: center;
  }
}

.text-wrap {
}

.intro-wrap {
  .text-wrap > div {
    p {
      margin-bottom: 8px;
    }

    ol {
      margin-bottom: 20px;
    }
  }
  ol li {
    list-style: auto;
    margin: 0 0 0 25px;
  }
}
</style>