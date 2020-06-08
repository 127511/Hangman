var geradenLetters = [" "];
var fouteLetterCount = 5;
var score = 0;
$(".win").hide();
$(".lose").hide();

var currentWord

function getCurrentWord() {
    currentWord = "";
    for (i = 0; i < randomwoord.length; i++) {
        currentWord += document.getElementById("letter_" + i).innerHTML;
    }
}
$(document).ready(function() {
    document.getElementById("chancesleft").innerHTML = fouteLetterCount + " kansen over.";

    $(".LetterButton").click(function() {
        var letter = $(this).text();
        if (!geradenLetters.includes(letter)) {
            geradenLetters.push(letter);
            onguess(letter)
        } else {
            alert("deze letter heb je al gebruikt.");
        }
    });

    function onguess(letter) {
        var noMatches = true
        for (i = 0; i < randomwoord.length; i++) {
            if (randomwoord.charAt(i).toUpperCase() == letter.toUpperCase()) {
                score += 3;
                $("#scoreinput").val(score);
                document.getElementById("letter_" + i).innerHTML = letter;
                noMatches = false;
            }
        }
        if (noMatches) {
            document.getElementById("wrongguesses").innerHTML += letter + ", ";
            fouteLetterCount--;
            score -= 5;
            $("#scoreinput").val(score);
            $('.imgbox').css("background-image", "url(image/" + fouteLetterCount +".png)");
            document.getElementById("chancesleft").innerHTML = fouteLetterCount + " kansen over.";
            if (fouteLetterCount == 0) {
                $("#PArea").fadeOut();
                $("#wrongguesses").fadeOut();
                $(".imgbox").fadeOut().promise().done(function() {
                    $('#lose').fadeIn();
                });
              }
            }

                getCurrentWord();
                if (currentWord.toUpperCase() == randomwoord.toUpperCase()) {
                  $("#scoreinput").val(score);
                  document.getElementById("scorefield").innerHTML += score;
                  $("#PArea").fadeOut();
                  $("#wrongguesses").fadeOut();
                  $(".imgbox").fadeOut().promise().done(function() {
                      $('#win').fadeIn();
                  });
                }

          }


            $("#rhw").click(function() {
                $("#raden").fadeTo("slow", 1);
            });

            $("#inputR").click(function() {
                if ($("#raadW").val().toUpperCase() == randomwoord.toUpperCase()) {
                  score += 10;
                  $("#scoreinput").val(score);
                  document.getElementById("scorefield").innerHTML += score;
                  $("#PArea").fadeOut();
                  $("#wrongguesses").fadeOut();
                  $(".imgbox").fadeOut().promise().done(function() {
                      $('#win').fadeIn();
                  });
                } else {
                    document.getElementById("wrongguesses").innerHTML += $("#raadW").val() + ", ";
                    fouteLetterCount--;
                    score -= 5
                    $("#scoreinput").val(score);
                    $('.imgbox').css("background-image", "url(image/" + fouteLetterCount +".png)");
                    document.getElementById("chancesleft").innerHTML = fouteLetterCount + " kansen over.";
                    if (fouteLetterCount == 0) {
                      $("#PArea").fadeOut();
                      $("#wrongguesses").fadeOut();
                      $(".imgbox").fadeOut().promise().done(function() {
                          $('#lose').fadeIn();
                      });
                    }
                }
            });
          });
