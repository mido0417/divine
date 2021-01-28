<template>
  <div id="blog">
    <Menu />
    <ArticleList :articles="paginatedArticles" :total="allArticles.length" class="content-wrap" />
  </div>
</template>

<script>
import getContent from "@/utils/getContent";
import ArticleList from "@/components/ArticleList";
import Menu from "@/components/menu/main-menu.vue";

export default {
  name: "ArticleListPage",
  components: {
    ArticleList,
    Menu,
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
      title: `Blog page${this.$route.params.page}|四月塔羅`,
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.baseUrl}/blog/page/${this.$route.params.page}`,
        },
      ],
    };
  },
};
</script>
