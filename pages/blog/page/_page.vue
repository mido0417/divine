<template>
  <div>
    <div id="blog">
    <Menu />
    </div>
    <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
  </div>
</template>

<script>
import getContent from '@/utils/getContent';
import ArticleList from '@/components/ArticleList';
import Menu from "@/components/menu/main-menu.vue";

export default {
  name: 'ArticleListPage',
  components: {
    ArticleList,
    Menu
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
      title: `Articles Page ${this.$route.params.page} - Learning Laravel and VueJS`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/blog/page/${this.$route.params.page}`,
        },
      ],
    };
  },
};
</script>
