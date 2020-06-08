<?php include "db_connect.php"; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="scorepage.css">
  </head>
  <body>
    <?php
    $sql = "SELECT id, naam, score FROM scores ORDER BY score DESC";
    $result = mysqli_query($conn, $sql);

    echo "<table>
          <tr>
          <th>Naam</th>
          <th>Score</th>
          </tr>";

    while ($row = mysqli_fetch_array($result)) {
      echo "<tr>";
      echo "<td>" . $row['naam'] . "</td>";
      echo "<td>" . $row['score'] . "</td>";
      echo "</tr>";
    }
    echo "</table>";

     ?>
     <form action="index.php">
       <button id="backtomenu" type="submit">Terug naar hoofdmenu</button>
     </form>
  </body>
</html>
