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
            close: false,
            cards: [
                {
                    img: require("@/assets/image/tarot/chariot.jpeg"),
                    title: "VII 戰車",
                    content1: "利用雷諾曼強大的劇情推演能力，來推測所問之事的未來發展與走向。",
                    content2: "",
                    content3: "",
                    link: "service/lenormand",
                    ready: false,
                    value: "0",
                },
                {
                    img: require("@/assets/image/tarot/magician.jpeg"),
                    title: "I 魔術師",
                    content1: "它意味著當你集中注意力並意識到你的需要，你就擁有了掌握宇宙力量的能力，以滿足你的慾望，無論是情感，身體還是社交。",
                    content2: "但是，您需要充分利用自己的技能，並根據自己的看法讓事情發生。",
                    content3: "漸漸地，創造性的方式會在你面前展開，從而幫助你快速獲得成功。不久將來，一切都在你的掌握之中。",
                    link: "tarot",
                    ready: false,
                    value: "1",
                },
                {
                    img: require("@/assets/image/tarot/death.jpeg"),
                    title: "XII 死神",
                    content1: "藉由引導冥想帶你進入前世記憶中，探尋靈魂深處那顆深埋已久的因。",
                    content2: "",
                    content3: "",
                    link: "re",
                    ready: false,
                    value: "2",
                },
            ],
        };
    },
}