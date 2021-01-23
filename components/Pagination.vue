<template>
  <div class="pagination">
    <span v-if="currentPage === 1" class="first"><<</span>

    <nuxt-link
      v-else
      :to="{ name: 'blog-page-page', params: { page: 1 } }"
      class="first"
    >
      <<
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
    <div class="pager-items">
      <nuxt-link
        v-for="pager in totalPages"
        :key="pager.key"
        :to="{ name: 'blog-page-page', params: { page: pager } }"
        >{{ pager }}</nuxt-link
      >
    </div>

    <span v-if="currentPage === totalPages" class="last">>></span>

    <nuxt-link
      v-else
      :to="{ name: 'blog-page-page', params: { page: totalPages } }"
      class="last"
    >
      >>
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
    // buttonStyles() {
    //   return "border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-blue-500 hover:text-white transform duration-500 ease-in-out";
    // },
    // disabledStyle() {
    //   return "border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300";
    // },
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

<style lang="scss" scoped>
.pagination {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2px;

  a,
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    width: 15px;
    height: 20px;
    text-decoration: none;
    padding: 5px;
    color: rgba(0, 0, 0, 0.7);
  }
  .last {
    border-right: 0px;
  }
  .nuxt-link-active {
    color: #000;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .pager-items {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>