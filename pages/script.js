import Menu from "@/components/menu/Menu001.vue";
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
                    img: "https://images.plurk.com/7hw7PmP7Ngi1qefGSJ8B8p.jpg",
                    name: "故事劇情推演",
                    subtitle: "雷諾曼預言占卜",
                    intro: "利用雷諾曼強大的劇情推演能力，來推測所問之事的未來發展與走向。",
                    link: "la",
                    ready: false,
                },
                {
                    img: "https://images.plurk.com/23D7aevqpn60L9PVLFnF5w.jpg",
                    name: "探索自我",
                    subtitle: "塔羅占卜",
                    intro: "受過往經驗束縛而失去前進的勇氣，想探索靈魂深處真實的自己，讓塔羅牌來輔佐你看到不一樣的自己",
                    link: "tarot",
                    ready: false,
                },
                {
                    img: "https://images.plurk.com/3PCXKJ7RTDDvw0mdlw4Ehk.jpg",
                    name: "靈魂記憶",
                    subtitle: "前世回朔引導觀想",
                    intro: "藉由引導冥想帶你進入前世記憶中，探尋靈魂深處那顆深埋已久的因。",
                    link: "re",
                    ready: true,
                },
                {
                    img: "https://images.plurk.com/1VF1gW2MVcyhTgtRS5vDMW.jpg",
                    name: "來自大地的禮物",
                    subtitle: "個人專屬精油調製",
                    intro: "精油是大地贈與我們的禮物，利用精油調製出適合你當前能量狀態的專屬精油。",
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