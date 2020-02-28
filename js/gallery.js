$(function () {

    $(".card-columns .card a").attr("data-toggle", "lightbox");
    $(".card-columns .card a").attr("data-gallery", "opera");
    $(".card-columns .card a").attr("data-width", $(document).width());

    $(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

});