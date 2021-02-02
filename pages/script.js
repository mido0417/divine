import Menu from "@/components/menu/main-menu.vue";
import Service001 from "@/components/service/Service001.vue";

export default {
    components: {
        Menu,
        Service001
    },

    data() {
        return {
            services: [
                {
                    name: "雷諾曼預言占卜",
                    subtitle: "",
                    intro: "",
                    link: "la",
                    ready: false,
                },
                {
                    name: "塔羅占卜",
                    subtitle: "",
                    intro: "",
                    link: "tarot",
                    ready: false,
                },
                {
                    name: "靈魂記憶",
                    subtitle: "前世回朔引導觀想",
                    intro: "藉由引導冥想帶你進入前世記憶中，探尋靈魂深處那顆深埋已久的因",
                    link: "re",
                    ready: true,
                },
                {
                    name: "精油調香",
                    subtitle: "",
                    intro: "精油不僅可以增添居家情趣，除了製在香氛蠟燭與按摩油之外不同精油的搭配組合也能蹦出不一樣的火花產生不一樣的效用。",
                    link: "oil",
                    ready: false,
                },
            ],
        };
    },




    head: () => ({
        // title: 'Mido的The-F2E挑戰｜01.TodoList',
    }),

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 5000)
        })

        $(document).ready(function (e) {

            var xPos = 0;
            var yPos = 0;
            var lastScrolled = 0;

            $(window).scroll(function (e) {

                var Y = $('#mousefollow').scrollTop();
                var test = $('#mousefollow').css('top');
                var num = test

                $('#mousefollow').css({ "left": e.pageX + -10, "top": e.pageY + -10 });
            })

            $('#mousefollow').css({ "left": e.pageX + -10, "top": e.pageY + -10 });

            $(document).mousemove(function (e) {
                $('#mousefollow').css({ "left": e.pageX + -10, "top": e.pageY + -10 });
            });
        });
    },
};