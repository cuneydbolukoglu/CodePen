$(document).ready(function () {
    var Button = $(".filters button");
    var dataFilters = $(".col-md-4");
  
    Button.click(function () {
      var dataFilter = $(this).attr("data-filter");
  
      dataFilter == "all"
        ? dataFilters.show("1000")
        : dataFilters.not("." + dataFilter).fadeOut("1000");
      dataFilters.filter("." + dataFilter).fadeIn("1000");
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
  