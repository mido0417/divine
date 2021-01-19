<template>
  <div>
    <Menu />
    <article class="content-wrap">
      <h1>{{ article.title }}</h1>
      <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
      <div
        class="cover-img"
        :style="{ backgroundImage: 'url(' + article.img + ')' }"
      ></div>
      <nuxt-content :document="article" />

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
  max-width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 -15px;
  @media (min-width: $md) {
  }
}
</style>