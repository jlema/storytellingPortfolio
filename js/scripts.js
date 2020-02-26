$(function () {
  // Sidebar toggle behavior
  // From: https://bootstrapious.com/p/bootstrap-vertical-navbar
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
  });
});

let cardsAll = ['card_aadv', 'card_artfullyOpera', 'card_behindOpera', 'card_bouchra', 'card_capitalOpera',
  'card_ecotraveller', 'card_gadventures', 'card_highPakistan', 'card_jordanBeauty',
  'card_jordanTrail', 'card_katyaKabanova', 'card_planeterra', 'card_shadowAni',
  'card_warOnWalls'];

document
  .getElementById("topics_overview")
  .addEventListener("click", function () {
    cardsAll.forEach(function (item, index) {
      document.getElementById(item).style.display = "inline-block";
    });

    // Needs all topics to be de-highlighted
    // document.getElementById(item).classList.remove('bg-light');

  });

document
  .getElementById("topics_seattleOpera")
  .addEventListener("click", function () {
    document.getElementById("card_aadv").style.display = 'none';
  });
