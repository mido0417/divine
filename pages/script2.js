import Menu from "@/components/menu/Menu003.vue";
import Footer from "@/components/footer/Footer001.vue";
import Service002 from "@/components/service/Service002.vue";

export default {
    components: {
        Menu,
        Footer,
        Service002
    },
    layout: "default-layout",
    data() {
        return {
            services: [
                {
                    img: require("@/assets/image/service/le-card.png"),
                    title:"雷諾曼預言占卜",
                    link: "services/lenormand",
                    ready: false,
                },
                {
                    img: require("@/assets/image/service/tarot-card.png"),
                    title:"塔羅占卜",
                    link: "services/tarot",
                    ready: false,
                },
                {
                    img: require("@/assets/image/service/recode.png"),
                    title:"前世回朔引導",
                    link: "services/re",
                    ready: true,
                },
                {
                    img: require("@/assets/image/service/potion.png"),
                    title:"客製精油調香",
                    link: "services/oil",
                    ready: false,
                },
            ],
        };
    },




    head: () => ({
        // title: 'Mido的The-F2E挑戰｜01.TodoList',
    }),
};