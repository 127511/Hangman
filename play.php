<?php include "formprocessing.php"; ?>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>Galgje</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="master.css">
</head>

<body onload="pickRandom()">
    <div class="imgbox">
        <!-- image of hangman that changes on mistake -->
        <!-- test -->
    </div>

    <div id="PArea">
      <div id="wrongguesses">
      </div>


        <h1 id="chancesleft">
        </h1>

        <div id="word">
        </div>


        <br>


        <div class="keyboard">
            <button type="button" class="LetterButton" name="button">A</button>
            <button type="button" class="LetterButton" name="button">B</button>
            <button type="button" class="LetterButton" name="button">C</button>
            <button type="button" class="LetterButton" name="button">D</button>
            <button type="button" class="LetterButton" name="button">E</button>
            <button type="button" class="LetterButton" name="button">F</button>
            <button type="button" class="LetterButton" name="button">G</button>
            <button type="button" class="LetterButton" name="button">H</button>
            <button type="button" class="LetterButton" name="button">I</button>
            <button type="button" class="LetterButton" name="button">J</button>
            <button type="button" class="LetterButton" name="button">K</button>
            <button type="button" class="LetterButton" name="button">L</button>
            <button type="button" class="LetterButton" name="button">M</button>
            <br>
            <button type="button" class="LetterButton" name="button">N</button>
            <button type="button" class="LetterButton" name="button">O</button>
            <button type="button" class="LetterButton" name="button">P</button>
            <button type="button" class="LetterButton" name="button">Q</button>
            <button type="button" class="LetterButton" name="button">R</button>
            <button type="button" class="LetterButton" name="button">S</button>
            <button type="button" class="LetterButton" name="button">T</button>
            <button type="button" class="LetterButton" name="button">U</button>
            <button type="button" class="LetterButton" name="button">V</button>
            <button type="button" class="LetterButton" name="button">W</button>
            <button type="button" class="LetterButton" name="button">X</button>
            <button type="button" class="LetterButton" name="button">Y</button>
            <button type="button" class="LetterButton" name="button">Z</button>

        </div>

        <button type="button" id="rhw" name="button">Raad het woord!</button> <br>

        <div class="raden" id="raden">
            <input type="text" id="raadW">
            <button id="inputR">Submit</button>
        </div>
    </div>
    <br>
    <div id="wrongguesses">
    </div>

    <div class="win" id="win">
        <H1>YOU WIN!</H1>
        <br>
        <button onclick="location.href='play.php'">Play Again</button>
        <button onclick="location.href='index.php'">Home</button>
        <br>
        <h2 id="scorefield">Your score: </h2>
        <form method="post">
          <input type="hidden" id="scoreinput" name="score">
          <input type="text" id="naamveld" name="name" placeholder="Your Name" required>
          <input type="submit" id="naamsubmit" name="submit" value="Submit score">
        </form>
    </div>

    <div class="lose" id="lose">
        <h1>YOU LOSE</h1>
        <br>
        <button onclick="location.href='play.php'">Play Again</button>
        <button onclick="location.href='index.php'">Home</button>
    </div>

    <script src="Index.js"></script>
    <script src="woordgen.js"></script>
</body>

</html>
