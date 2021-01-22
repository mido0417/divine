<template>
  <div>
    <Menu />
    <article class="content-wrap">
      <h1>{{ article.title }}</h1>
      <p>{{ formatDate(article.createdAt) }}</p>
      <div
        class="cover-img"
        :style="{ backgroundImage: 'url(' + article.img + ')' }"
      >
        <p class="alt">{{ article.alt }}</p>
      </div>
      <nuxt-content :document="article" />
      <!-- AddToAny BEGIN -->
      <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
        <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
        <a class="a2a_button_facebook"></a>
        <a class="a2a_button_line"></a>
        <a class="a2a_button_plurk"></a>
        <a class="a2a_button_twitter"></a>
      </div>
      <script async src="https://static.addtoany.com/menu/page.js"></script>
      <!-- AddToAny END -->
      <!-- <div
        class="likecoin-embed likecoin-button"
        data-liker-id="mido0417"
      ></div>
      <script src="https://static.like.co/sdk/v1/button.js"></script> -->
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
        {
          hid: "og:url",
          property: "og:url",
          content: `https://hellomido.space/divine/${this.$route.params.slug}`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://images.unsplash.com/photo-1494797262163-102fae527c62?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80",
        },
        {
          hid: "canonical"

        }
      ],
      link: [
        {
          rel: "canonical",
          href: `https://hellomido.space/divine/${this.$route.params.slug}`,
        }
      ]
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
  //       content: "https://images.unsplash.com/photo-1494797262163-102fae527c62?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80",
  //     },
  //     { hid: "og:type", property: "og:type", content: "website" },
  //   ],
  // },

  async asyncData({ $content, params, error }) {
    try {
      const article = await $content("articles", params.slug).fetch();

      const [prev, next] = await $content("articles")
        .only(["title", "slug"])
        .sortBy("createdAt", "desc")
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
  margin-bottom: 50px;
  @media (min-width: $md) {
    height: 500px;
  }
  .alt {
    position: absolute;
    top:102%;
    left: 0;
    right: 0;
    text-align: center;
    opacity: .3;
  }
}
</style>