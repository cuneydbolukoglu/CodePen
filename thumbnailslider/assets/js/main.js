$(document).ready(function () {
    var image = $(".slide img");

    image.each(function (i) {
        var container = $("nav ul");
        var imageUrl = image[i].src;

        container.append(getimage(imageUrl));
    });

    $("nav li img", this).click(function () {
        var nav = $(this);
        var url = nav.attr("src");
        
        image.fadeOut().fadeIn().attr("src", url);
    });

    function getimage(imageUrl) {
        return '<li><img src=" ' + imageUrl + ' " alt=""></li>'
    }
});