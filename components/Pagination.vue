<template>
  <div class="pagination">
    <div v-if="currentPage === 1" :class="disabledStyle">
      <span class=""><<</span>
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'blog-page-page', params: { page: 1 } }"
      :class="buttonStyles"
    >
      <span class=""><<</span>
    </nuxt-link>

    <!-- <div v-if="currentPage === 1" :class="disabledStyle">
      <span class="">上一頁</span>
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'blog-page-page', params: { page: prevPage } }"
      :class="buttonStyles"
    >
      <span class="">上一頁</span>
    </nuxt-link> -->

    <!-- <div v-if="currentPage === totalPages" :class="disabledStyle">
      <span class="">下一頁</span>
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'blog-page-page', params: { page: nextPage } }"
      :class="buttonStyles"
    >
      <span class="">下一頁</span>
    </nuxt-link> -->

    <!-- 頁碼 -->
    <nuxt-link
      class="pager-item"
      v-for="pager in totalPages"
      :key="pager.key"
      :to="{ name: 'blog-page-page', params: { page: pager } }"
      >{{ pager }}</nuxt-link
    >

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <span class="">>></span>
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'blog-page-page', params: { page: totalPages } }"
      :class="buttonStyles"
    >
      <span class="">>></span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  components: {},
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    buttonStyles() {
      return "border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-blue-500 hover:text-white transform duration-500 ease-in-out";
    },
    disabledStyle() {
      return "border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300";
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    },
  },
};
</script>
