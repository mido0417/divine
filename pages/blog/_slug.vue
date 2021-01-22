<template>
  <div>
    <Menu />
    <article class="content-wrap">
      <h1>{{ article.title }}</h1>
      <p>{{ formatDate(article.updatedAt) }}</p>
      <div
        class="cover-img"
        :style="{ backgroundImage: 'url(' + article.img + ')' }"
      ></div>
      <nuxt-content :document="article" />
      <div
        class="likecoin-embed likecoin-button"
        data-liker-id="mido0417"
      ></div>
      <script src="https://static.like.co/sdk/v1/button.js"></script>
      <!-- <author :author="article.author" /> -->

      <prev-next :prev="prev" :next="next" />
    </article>
  </div>
</template>



<script>
import Menu from "@/components/menu/main-menu.vue";

export default {
  components: {
    Menu,
  },

  head() {
    return {
      title: `${this.article.title} | 四月塔羅`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.article.description}`,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.article.title} | 四月塔羅`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `${this.article.description}`,
        },
      ],
    };
  },

  // head: {
  //   title: "四月塔羅 | 探索自我，發現內心的光芒",
  //   meta: [
  //     { charset: "utf-8" },
  //     { name: "viewport", content: "width=device-width, initial-scale=1" },
  //     {
  //       hid: "description",
  //       name: "description",
  //       content: "探索自我，發現內心的光芒",
  //     },
  //     {
  //       hid: "og:title",
  //       property: "og:title",
  //       content: "四月塔羅 | 探索自我，發現內心的光芒",
  //     },
  //     {
  //       hid: "og:description",
  //       property: "og:description",
  //       content: "探索自我，發現內心的光芒",
  //     },
  //     {
  //       hid: "og:url",
  //       property: "og:url",
  //       content: "https://hellomido.space/divine/",
  //     },
  //     {
  //       hid: "og:image",
  //       property: "og:image",
  //       content: "https://images.plurk.com/929Y7dQyKQLkJuWSdI5BS.png",
  //     },
  //     { hid: "og:type", property: "og:type", content: "website" },
  //   ],
  // },

  async asyncData({ $content, params, error }) {
    try {
      const article = await $content("articles", params.slug).fetch();

      const [prev, next] = await $content("articles")
        .only(["title", "slug"])
        .sortBy("createdAt", "asc")
        .surround(params.slug)
        .fetch();

      return {
        article,
        prev,
        next,
      };
    } catch (err) {
      error({
        statusCode: 404,
      });
    }
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("zh-TW", options);
    },
  },

  mounted() {
    $(document).ready(function (e) {
      let baseUrl = window.location.href;

      $(".likecoin-button").attr("data-href", baseUrl);
    });
  },
};
</script>

<style lang="scss" scoped>
.content-wrap {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 100%;

  @media (min-width: $md) {
    max-width: 1100px;
    padding: 0;
  }
}

.cover-img {
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 200px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  @media (min-width: $md) {
    height: 500px;
  }
}
</style>