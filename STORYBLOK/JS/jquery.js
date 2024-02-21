$(document).ready(function () {

    $("#mobile-section").click(function () {
        $(this).hide();
        $("#nav_close").show();
        $(".header_nav_item").hide(); -
            $(".mobile-section").show();

    })

    $("#nav_close").click(function () {
        $(this).hide();
        $(".header_nav_item").show(); -
            $(".mobile-section").hide();

    })

}); 