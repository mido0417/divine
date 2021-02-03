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
      title: `Blog page${this.$route.params.page}|生命之歌`,
       meta: [
        {
          hid: "description",
          name: "description",
          content: "從這裡可以瞭解，我是怎麼看待這個世界",
        },
        {
          hid: "og:title",
          property: "og:title",
          content:  `Blog page${this.$route.params.page}|生命之歌`,
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
