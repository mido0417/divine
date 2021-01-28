import Menu from "@/components/menu/main-menu.vue";

export default {
    components: {
        Menu
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