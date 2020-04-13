<?php

    mysqli_connect("localhost","shareddb-u.hosting.stackcp.net", "");   

   if(mysqli_connect_error()) {
      echo "There was an error connecting to the database";
   } else {
       echo "Database connection successful";
   }
?>