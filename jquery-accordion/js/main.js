$(".accordion-tittle").click(function () {

    $(this).siblings(".accordion-tittle").removeClass("is-active").children(".accordion-list").slideUp();

    $(this).toggleClass("is-active").children(".accordion-list").slideToggle()
});