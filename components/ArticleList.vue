<template>
  <div>
    <ul class="">
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
          <div class="tax-wrap">
            <p class="tax">{{ article.tax }}</p>
            <p>{{ formatDate(article.createdAt) }}</p>
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
    <div class="pagination-wrap" v-if="total">
      <Pagination v-if="total > 5" :total="total" />
    </div>
  </div>
</template>


<script>
import Pagination from "@/components/Pagination";

export default {
  name: "ArticleList",
  components: {
    Pagination,
  },
  props: {
    articles: {
      type: Array,
      default: Array,
    },
    total: {
      type: Number,
      default: 0,
    },
  },

  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only([
        "title",
        "description",
        "img",
        "slug",
        "author",
        "createdAt",
        "tax",
      ])
      .sortBy("createdAt", "desc")
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

.pagination-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0 ;
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
      width: 400px;
      margin-right: 30px;
    }
  }

  .item-wrap {
    width: 100%;
    position: relative;
    margin-top:5px;
    @media (min-width: $md){
      margin-top:0px;
    }
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

    .tax-wrap {
      display: flex;
      align-items: center;
      opacity: 0.5;
      .tax {
        border-right: 1px solid #000;
        padding-right: 5px;
        margin-right: 5px;
        // &::before {
        //   content: "";
        //   display: block;
        //   width: 1px;
        //   height: 10px;
        //   background-color: #000;
        // }
      }
    }
  }
}
</style>