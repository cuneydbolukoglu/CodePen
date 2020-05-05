$(function() {
        $(window).scroll(function() {
          var height = $(window).scrollTop();
          var nav = $(".nav-bar");
          if (height > 100) nav.addClass("sticky");
          else nav.removeClass("sticky");
        });
        var hmbrgr = $(".hmbrgr-button");
        hmbrgr.click(function() {
          hmbrgr.toggleClass("change");
          $(".nav-item").toggleClass("active");
        });
        $("nav a").click(function(event) {
          var id = $(this).attr("href");
          var offset = 40;
          var target = $(id).offset().top - offset;
          $("html, body").animate({ scrollTop: target }, 500);
          event.preventDefault();
          $(".hmbrgr-button").removeClass("change");
          $(".nav-item").removeClass("active");
        });
});