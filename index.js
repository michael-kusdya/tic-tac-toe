  var side = "",
      human = "",
      ai = "",
      currentPlayer = "",
      moves = 1;

  function setFig(id) {
      if (id === "X") {
          human = '<span class="fa fa-times"></span>';
          ai = '<span class="fa fa-circle-o"></span>';
      } else if (id === "O") {
          human = '<span class="fa fa-circle-o"></span>';
          ai = '<span class="fa fa-times"></span>';
      }
      firstMove();
      setCurrentPlayer('human');
  }

  function firstMove() {
      $("#tiles5").html(ai);
      $('#tiles5').removeAttr('onClick');
  }

  function icon(id) {
      if (currentPlayer === "human") {
          $('#' + id).html(human);
          $('#' + id).removeAttr("onClick");
          gameStatus()
          setCurrentPlayer("ai")
      } else if (currentPlayer === "ai") {
          $('#' + id).html(ai);
          $('#' + id).removeAttr("onClick");
          gameStatus();
          setCurrentPlayer("human");
      }
      if (side !== "") {
          moves++;
      }

      draw()

      if (currentPlayer === "ai") {
          comp()
      }
  }

  function comp() {
      switch (true) {
          case $("#tiles1").html() !== human && $("#tiles1").html() !== ai:
              icon("tiles1");
              break;
          case $("#tiles2").html() !== human && $("#tiles2").html() !== ai:
              icon("tiles2");
              break;
          case $("#tiles3").html() !== human && $("#tiles3").html() !== ai:
              icon("tiles3");
              break;
          case $("#tiles4").html() !== human && $("#tiles4").html() !== ai:
              icon("tiles4");
              break;
          case $("#tiles5").html() !== human && $("#tiles5").html() !== ai:
              icon("tiles5");
              break;
          case $("#tiles6").html() !== human && $("#tiles6").html() !== ai:
              icon("tiles6");
              break;
          case $("#tiles7").html() !== human && $("#tiles7").html() !== ai:
              icon("tiles7");
              break;
          case $("#tiles8").html() !== human && $("#tiles8").html() !== ai:
              icon("tiles8");
              break;
          case $("#tiles9").html() !== human && $("#tiles9").html() !== ai:
              icon("tiles9");
              break;
      }
  }

  function lockAll() {
      $("#tiles").removeAttr("onClick");
  }

  function setCurrentPlayer(curr) {
      currentPlayer = curr;
  }

  function gameStatus() {
      var curPlayer;
      if (currentPlayer === "human") {
          curPlayer = human;
      } else if (currentPlayer === "ai") {
          curPlayer = ai
      }

      switch (true) {
          case $("#tiles1").html() === curPlayer && $("#tiles2").html() === curPlayer && $("#tiles3").html() === curPlayer:
              alert("Game Over");
              show("#tiles1", "#tiles2", "#tiles3");
              break;
          case $("#tiles4").html() === curPlayer && $("#tiles5").html() === curPlayer && $("#tiles6").html() === curPlayer:
              alert("Game Over");
              show("#tiles4", "#tiles5", "#tiles6");
              break;
          case $("#tiles7").html() === curPlayer && $("#tiles8").html() === curPlayer && $("#tiles9").html() === curPlayer:
              alert("Game Over");
              show("#tiles7", "#tiles8", "#tiles9");
              break;
          case $("#tiles1").html() === curPlayer && $("#tiles4").html() === curPlayer && $("#tiles7").html() === curPlayer:
              alert("Game Over");
              show("#tiles1", "#tiles4", "#tiles7");
              break;
          case $("#tiles2").html() === curPlayer && $("#tiles5").html() === curPlayer && $("#tiles8").html() === curPlayer:
              alert("Game Over");
              show("#tiles2", "#tiles5", "#tiles8");
              break;
          case $("#tiles3").html() === curPlayer && $("#tiles6").html() === curPlayer && $("#tiles9").html() === curPlayer:
              alert("Game Over");
              show("#tiles3", "#tiles6", "#tiles9");
              break;
          case $("#tiles1").html() === curPlayer && $("#tiles5").html() === curPlayer && $("#tiles9").html() === curPlayer:
              alert("Game Over");
              show("#tiles1", "#tiles5", "#tiles9");
              break;
          case $("#tiles3").html() === curPlayer && $("#tiles5").html() === curPlayer && $("#tiles7").html() === curPlayer:
              alert("Game Over");
              show("#tiles3", "#tiles5", "#tiles7");
              break;
          default:
              draw()
      }
  }

  function draw() {
      if (moves === 9) {
          alert("Its a draw");
          setTimeout(reset, 1000);
      }
  }

  function show(x, y, z) {
      var x = $(x),
          y = $(y),
          z = $(z);

      x.addClass("win");
      y.addClass("win");
      z.addClass("win");
      lockAll()
      setTimeout(reset, 1500);
  }

  function reset() {
      $(".tiles").html("");
      moves = 1;
      $(".tiles").attr("onClick", "icon(this.id)");
      $(".win").removeClass("win");
      setTimeout(firstMove, 200);
  }

  $(document).ready(function () {

      $(".side-btn").click(function () {
          side = $(this).attr("id");
          $("#side").hide();
          setFig(side);
      });

      $(".tiles").click(function () {
          if ($(this).data("clicked", true) && side === "") {
              alert("Choose side first");
          }
      });

  });