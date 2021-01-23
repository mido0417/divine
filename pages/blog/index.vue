<template>
<div id="blog">
    <Menu />
  <ArticleList :articles="paginatedArticles" :total="allArticles.length" />  
  </div>
  
</template>

<script>
import Menu from "@/components/menu/main-menu.vue";

export default {
  components: {
    Menu,
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>

