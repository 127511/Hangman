<?php
  include "db_connect.php";
  if(isset($_POST['submit'])){
    $naam = $_POST['name'];
    $score = $_POST['score'];
    $sql = "INSERT INTO scores(id, naam, score) VALUES ('','$naam','$score')";
    if (mysqli_query($conn, $sql)) {
      echo "<script>window.location.href='index.php'</script>";
    }
  }
  mysqli_close($conn);

 ?>
