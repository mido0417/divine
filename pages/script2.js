import Menu from "@/components/menu/Menu003.vue";
import Service002 from "@/components/service/Service002.vue";


export default {
    components: {
        Menu,
        Service002,
    },
    layout: "index-layout",
    data() {
        return {
            services: [
                {
                    img: "https://images.plurk.com/6OP9qdSDNFwM4gVObgehjM.png",
                    title: "精油絮語占卜",
                    link: "services/lenormand",
                    alt: "Lenormand",
                    ready: true,
                },
                {
                    img: "https://images.plurk.com/1Yr3hCfhtjKN0z6k1VkuWV.png",
                    title: "薩滿鼓療癒",
                    link: "services/shaman",
                    alt: "shaman",
                    ready: true,
                },
                {
                    img: "",
                    title: "前世回朔引導",
                    link: "services/re",
                    alt: "SoulReCode",
                    ready: false,
                },
                {
                    img: "https://images.plurk.com/62z6RmAW9XltxAh0bioUoS.png",
                    title: "客製化精油調香",
                    link: "services/oil",
                    alt: "Oil",
                    ready: true,
                },
                {
                    img: "https://images.plurk.com/1SL0Nz89VykTY3GqmvWJNB.png",
                    title: "能量香氛",
                    link: "services/aroma",
                    alt: "aroma",
                    ready: false,
                },
            ],
        };
    },

    async asyncData({ $content, params }) {
        const topArticles = await $content("blog", params.slug)
            .only([
                "title",
                "createdAt",
                "top",
                "slug",
            ])
            .sortBy("createdAt", "desc")
            .where({ top: true })
            .fetch();

        return {
            topArticles,
        };
    },


    head: () => ({
        // title: 'Mido的The-F2E挑戰｜01.TodoList',
    }),
};