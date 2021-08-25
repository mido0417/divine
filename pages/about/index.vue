<template lang="pug">
    .about-page
        h1(style="display:none;") 生命之歌|雷諾曼、塔羅、星際瑪雅，探索自我，發現內心的光芒
        .menu-wrap
            Menu
        .container
            .intro
                .wrap
                    h2(style="display:none;") About
                    .intro-title.wow.animate__animated.animate__fadeInDown(data-wow-offset="30")
                        p 花草魔女 Claire.Lin
                        p 簡單生活實踐者
                    .intro-content-wrap
                        p.wow.animate__animated.animate__fadeInDown(data-wow-offset="30") 擅長使用雷諾曼與塔羅來探索自我
                        p.wow.animate__animated.animate__fadeInDown(data-wow-offset="30") 能藉由牌卡來釐清當前課題與未來發展
                        p.wow.animate__animated.animate__fadeInDown(data-wow-offset="30") 喜歡閱讀和聽故事
                        p.wow.animate__animated.animate__fadeInDown(data-wow-offset="30") 透過聊天、對談，給陷入迷惘的朋友溫暖與前行方向
                .photo.wow.animate__animated.animate__fadeIn(data-wow-offset="30")
                    .avatar
</template>

<script>
import Menu from "@/components/menu/Menu003.vue";
export default {
    components: {
        Menu,
    },
    layout: "default-layout",
}
</script>

<style lang="scss" scoped>

</style>