import Menu from "@/components/menu/Menu002.vue";
import Card001 from "@/components/card/Card001.vue";

export default {
    components: {
        Card001,
        Menu
    },
    layout: "divine-layout",

    data() {
        return {
            cards: [
                {
                    img: require("@/assets/image/tarot/chariot.jpeg"),
                    name: "故事劇情推演",
                    subtitle: "雷諾曼預言占卜",
                    intro: "利用雷諾曼強大的劇情推演能力，來推測所問之事的未來發展與走向。",
                    link: "service/lenormand",
                    ready: false,
                },
                {
                    img: require("@/assets/image/tarot/magician.jpeg"),
                    name: "探索自我",
                    subtitle: "塔羅占卜",
                    intro: "受過往經驗束縛而失去前進的勇氣，想探索靈魂深處真實的自己，讓塔羅牌來輔佐你看到不一樣的自己",
                    link: "tarot",
                    ready: false,
                },
                {
                    img: require("@/assets/image/tarot/death.jpeg"),
                    name: "靈魂記憶",
                    subtitle: "前世回朔引導觀想",
                    intro: "藉由引導冥想帶你進入前世記憶中，探尋靈魂深處那顆深埋已久的因。",
                    link: "re",
                    ready: true,
                },
            ],
        };
    },
}