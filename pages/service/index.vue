<template lang="pug">
    #service.service-page
        .menu-wrap
            Menu
        .banner.full-content
            p 服務項目
        .container
            
</template>

<script>
import Menu from "@/components/menu/Menu003.vue";
export default {
    components: {
        Menu,
    },
    layout: "default-layout",

    data(){
        return{
            services:[
                {
                    title:"雷諾曼預言占卜",
                    img:"",
                    content01:"",
                    content02:"",
                    content03:"",
                },
                {
                    title:"",
                    img:"",
                    content01:"",
                    content02:"",
                    content03:"",
                },
                {
                    title:"",
                    img:"",
                    content01:"",
                    content02:"",
                    content03:"",
                },
                {
                    title:"",
                    img:"",
                    content01:"",
                    content02:"",
                    content03:"",
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.service-page {
  overflow: hidden;
  padding: 0 10px;
  background-color: $lsc;
  @media (min-width: $md) {
    padding: 0 40px;
  }
}
</style>