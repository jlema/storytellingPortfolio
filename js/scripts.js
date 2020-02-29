$(function () {

  // For all card-bodies
  // Reduce vertical padding, keep horizontal padding to 1
  // Center text
  $(function () {
    $(".card-body").addClass("pb-1 pt-2 px-1 text-center");
  })

  // For all cards
  // Remove borders
  $(function () {
    $(".card").addClass("border-0");
  })

  const fadeInSpeed = 900;

  // Sidebar toggle behavior
  // From: https://bootstrapious.com/p/bootstrap-vertical-navbar
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
  });

  // Extra toggle behavior: hide sidebar when clicking on a nav-item
  // as long as the toggle button is visible
  $("#sidebar .nav-item a").on("click", function () {
    if ($("#sidebarCollapse").is(":visible")) {
      $("#sidebar, #content").toggleClass("active");
    }
  });

  /* Arrays for all the different card topics */
  const cardsAll = [];
  $('.card-columns .card').each(function () {
    cardsAll.push(this.id);
  });
  // ['card_aadv', 'card_artfullyOpera', 'card_behindOpera', 'card_bouchra', 'card_capitalOpera',
  //   'card_ecotraveller', 'card_gadventures', 'card_highPakistan', 'card_jordanBeauty',
  //   'card_jordanTrail', 'card_katyaKabanova', 'card_planeterra', 'card_shadowAni',
  //   'card_warOnWalls'];
  const cardsOpera = ['card_artfullyOpera', 'card_behindOpera', 'card_capitalOpera', 'card_katyaKabanova'];
  const cardsTravel = ['card_aadv', 'card_ecotraveller', 'card_gadventures', 'card_jordanBeauty',
    'card_jordanTrail'];
  const cardsWomen = ['card_bouchra', 'card_planeterra', 'card_warOnWalls'];
  const cardsConservation = ['card_ecotraveller', 'card_highPakistan', 'card_shadowAni'];

  /* Helper function to hide unrelated cards
    and fade in related cards to a topic */
  function showTopic(cards, topicName) {
    $("#div_overview").hide();
    $("#projectName").text(topicName);
    $(cardsAll).each(function () {
      if (!(cards.includes(this.toString()))) {
        $('#' + this).hide();
      } else {
        $('#' + this).fadeIn(fadeInSpeed);
      }
    });
  }

  /* Helper function to change background of topics
  links to light gray to signal what the active topic is */
  function highlightTopic(topic) {
    $("#sidebar .nav-item a").each(function () {
      if (this.id !== "") {
        $("#" + this.id).removeClass("bg-light border");
      }
    });
    $(topic).addClass("bg-light border");
  }

  /* Show all topics */
  $("#overview").on("click", function () {
    showTopic(cardsAll, "");
    highlightTopic("#overview");
    rearrangeColumns(3);
    $("#div_overview").fadeIn(fadeInSpeed);
  });

  /* Show only Seattle Opera topic */
  $("#topics_seattleOpera").on("click", function () {
    showTopic(cardsOpera, "Seattle Opera");
    highlightTopic("#topics_seattleOpera");
    rearrangeColumns(2);
  });

  /* Show only Travel topic */
  $("#topics_travel").on("click", function () {
    showTopic(cardsTravel, "Travel");
    highlightTopic("#topics_travel");
    rearrangeColumns(2);
  });

  /* Show only Women Leaders topic */
  $("#women_leaders").on("click", function () {
    showTopic(cardsWomen, "Women Leaders");
    highlightTopic("#women_leaders");
    rearrangeColumns(2);
  });

  /* Show only Conservation topic */
  $("#topics_conservation").on("click", function () {
    showTopic(cardsConservation, "Conservation");
    highlightTopic("#topics_conservation");
    rearrangeColumns(2);
  });

  // Changes the number of columns of card-columns (useful for xl+ devices)
  function rearrangeColumns(numCols) {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      /* The viewport is greater than, or equal to, 992 pixels wide */
      document.querySelector(".card-columns").setAttribute("style", "column-count: " + numCols);
    }
  }

  // Scramble email address
  function scramble_mail(name, domain, tld) {
    var scrambled = '<a class="text-dark" href="' + 'ma' + 'il' + 'to:' + name;
    scrambled += '@' + domain + '.' + tld + '">';
    scrambled += name + '@' + domain + '.' + tld
    scrambled += '<' + '/a>';
    return scrambled;
  }

  $(function () {
    scrambled = scramble_mail("genevieve", "genevievehathaway", "com", "e-mail");
    $("#emailLocation").html(scrambled + "<br />Seattle, WA USA");
  })

});

