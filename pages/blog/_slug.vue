<template>
  <div>
    <article class="content-wrap">
      <div
        class="cover-img"
        :style="{ backgroundImage: 'url(' + article.img + ')' }"
      >
        <p class="alt">{{ article.alt }}</p>
      </div>
      <div class="title-wrap">
        <h1 class="page-title">{{ article.title }}</h1>
        <div class="tax-wrap">
          <p class="tax">{{ article.tax }}</p>
          <p>{{ formatDate(article.createdAt) }}</p>
        </div>
      </div>
      <nuxt-content :document="article" />
      <!-- AddToAny BEGIN -->
      <div class="addtoany-wrap a2a_kit a2a_kit_size_32">
        <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
        <a class="a2a_button_facebook"></a>
        <a class="a2a_button_line"></a>
        <a class="a2a_button_plurk"></a>
        <a class="a2a_button_twitter"></a>
      </div>
      <script async src="https://static.addtoany.com/menu/page.js"></script>
      <!-- AddToAny END -->
      <!-- <author :author="article.author" /> -->

      <prev-next :prev="prev" :next="next" />
    </article>
  </div>
</template>



<script>

export default {
  layout: "blog-layout",
  components: {
    
  },

  head() {
    return {
      title: `${this.article.title} | 生命之歌`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.article.description}`,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.article.title} | 生命之歌`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `${this.article.description}`,
        },
        {
          hid: "og:url",
          property: "og:url",
          href: `${this.$route.params.slug}`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${this.article.img}`,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `${this.$route.params.slug}`,
        },
      ],
    };
  },

  async asyncData({ $content, params, error }) {
    try {
      const article = await $content("blog", params.slug).fetch();

      const [prev, next] = await $content("blog")
        .only(["title", "slug"])
        .sortBy("createdAt", "desc")
        .surround(params.slug)
        .fetch();

      return {
        article,
        prev,
        next,
      };
    } catch (err) {
      error({
        statusCode: 404,
      });
    }
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("zh-TW", options);
    },
  },

  mounted() {
    $(document).ready(function (e) {
      //  console.log(this.$route)
    });
  },
};
</script>

<style lang="scss" scoped>
#blog {
  position: relative;
  &::after {
    content: "img by Gluc/Glucose";
    color: transparent;
    // display: none;
    display: block;
    background-image: url("https://images.plurk.com/7LDiuk04syO93v7UQpDU23.png");
    background-repeat: no-repeat;
    // background-size: cover;
    background-position: 50px 20px;
    width: 600px;
    height: 600px;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.3;
    pointer-events: none;
    z-index: 0;
    // background-color: #000;
    @media (min-width: $md) {
      opacity: 0.5;
    }
  }
}

.cover-img {
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 200px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 50px;
  @media (min-width: $md) {
    height: 500px;
  }
  .alt {
    position: absolute;
    top: 102%;
    left: 0;
    right: 0;
    text-align: center;
    opacity: 0.3;
  }
}

.title-wrap {
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 2px solid gray;
  @media (min-width: $md) {
    padding-bottom: 20px;
    margin-bottom: 50px;
  }
}

.page-title {
  margin-bottom: 10px;
  @media (min-width: $md) {
    margin-bottom: 15px;
  }
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

.addtoany-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}
</style>