<template>
  <div>
    <ArticleList
      :articles="paginatedArticles"
      :total="allArticles.length"
      class="content-wrap"
    />
  </div>
</template>

<script>
import getContent from "@/utils/getContent";
import ArticleList from "@/components/ArticleList";

export default {
  name: "ArticleListPage",

  layout: "blog-layout",
  components: {
    ArticleList,
  },

  async asyncData({ $content, app, params, error }) {
    const content = await getContent($content, params, error);
    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
    };
  },
  head() {
    return {
      title: `Blog page${this.$route.params.page}｜花草魔女 Claier`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "從這裡可以瞭解，我是怎麼看待這個世界",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `Blog page${this.$route.params.page}｜花草魔女 Claier`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "從這裡可以瞭解，我是怎麼看待這個世界",
        },
        {
          hid: "og:url",
          property: "og:url",
          href: `${this.$route.params.slug}`,
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$route.params.page}`,
        },
      ],
    };
  },
};
</script>
