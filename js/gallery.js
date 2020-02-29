$(function () {

    $(".gallery-content .card-columns .card a").attr("data-toggle", "lightbox");
    $(".gallery-content .card-columns .card a").attr("data-gallery", "opera");
    $(".gallery-content .card-columns .card a").attr("data-width", $(document).width());

    $(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

});