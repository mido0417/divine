<template>
  <div class="pager">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="prev"
      >{{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <!-- <NuxtLink to="/blog" class="back">回列表</NuxtLink> -->
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="next"
    >
      {{ next.title }}</NuxtLink
    >
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style lang="scss" scoped>
.pager {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (min-width: $md) {
    flex-direction: row;
  }
  a {
    display: block;
    color: rgba(0, 0, 0, 0.7);
    transition: all 0.3s;
    text-decoration: none;
    // flex-basis: 25%;
    // max-width: 25%;
    text-align: center;
    margin: 10px 0;
    &:hover {
      color: #000;
    }

    @media (min-width: $md) {
      margin: 0;
    }
  }

  .next {
    &::before {
      content: "下一篇：";
      display: inline-block;
    }
    &::after {
      content: " >";
      display: none;
    }

    @media (min-width: $md) {
      text-align: right;
      &::before {
        display: none;
      }
      &::after {
        display: inline-block;
      }
    }
  }
  .prev {
    &::before {
      content: "上一篇：";
      @media (min-width: $md) {
        content: "< ";
      }
    }

    @media (min-width: $md) {
      text-align: left;
    }
  }
}
</style>