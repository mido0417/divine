export default {
    components: {

    },
    head: () => ({
        // title: 'Mido的The-F2E挑戰｜01.TodoList',
    }),

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 2000)
          })

        $(document).ready(function (e) {

            var xPos = 0;
            var yPos = 0;
            var lastScrolled = 0;


            var menu_scroll_top1 = $('.menu-wrap nav').offset().top;
            check_main_menu()

            $(window).scroll(function (e) {
                check_main_menu();

                var Y = $('#mousefollow').scrollTop();
                var test = $('#mousefollow').css('top');
                var num = test

                $('#mousefollow').css({ "left": e.pageX + -10, "top": e.pageY + -10 });

                // console.log(Y)
                // console.log(+[]=;)

                // console.log($(document).scrollTop())



            })

            $('#mousefollow').css({ "left": e.pageX + -10, "top": e.pageY + -10 });

            $(document).mousemove(function (e) {
                $('#mousefollow').css({ "left": e.pageX + -10, "top": e.pageY + -10 });
            });

            function check_main_menu() {
                var wt = $(window).scrollTop();
                var menu_scroll_top2 = $('.menu-wrap nav').offset().top;

                if (wt >= menu_scroll_top2) {
                    $('.menu-wrap nav').addClass('fix');
                    // console.log('wt >= menu_scroll_top2')
                }

                if (wt < menu_scroll_top1) {
                    $('.menu-wrap nav').removeClass('fix')
                }
            }


        });
    },
};