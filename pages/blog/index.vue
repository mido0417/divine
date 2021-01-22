<template>
  <div id="blog">
    <Menu />
    <ul class="content-wrap">
      <li class="blog-item" v-for="article of articles" :key="article.slug">
        <div
          class="cover-img"
          :style="{ backgroundImage: 'url(' + article.img + ')' }"
        ></div>
        <div class="item-wrap">
          <h2 class="article-title">
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >
              {{ article.title }}</NuxtLink
            >
          </h2>
          <p class="description">{{ article.description }}</p>
          <div class="info-wrap">
            <!-- <p class="author">{{ article.author.name }}</p> -->
            <p class="pos-time">{{ article.tax }}</p>
            <p class="pos-time">{{ formatDate(article.createdAt) }}</p>
          </div>
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="more"
            >Read More</NuxtLink
          >
        </div>

        <!-- <pre>{{ article }}</pre> -->
      </li>
    </ul>
  </div>
</template>

<script>
import Menu from "@/components/menu/main-menu.vue";

export default {
  components: {
    Menu,
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "author", "createdAt", "tax"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(options);
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
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
    // padding: 0;
  }
}

.blog-item {
  display: flex;
  padding: 35px 0;
  border-bottom: 1px solid rgb(128 128 128 / 0.2);
  flex-direction: column;
  

  @media (min-width: $md) {
    flex-direction: row;
  }

  a,
  div,
  p {
    text-decoration: none;
    color: rgb(0 0 0 / 0.7);
  }
  .cover-img {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 15px;
    @media (min-width: $md) {
      width: 300px;
      margin-right: 30px;
    }
  }

  .item-wrap {
    width: 100%;
    position: relative;
    > div,
    > p,
    > h2 {
      margin-bottom: 10px;
    }
    .more {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .article-title {
      font-size: 24px;
    }

    .info-wrap {
      display: flex;
      align-items: center;
      .author {
        &::after {
          content: "｜";
          display: inline-block;
          font-size: 10px;
        }
      }
    }
  }
}
</style>