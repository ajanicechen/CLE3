<?php
    include_once '../database/dbconnect.php';
    /*echo password_hash("password1234", PASSWORD_DEFAULT);*/

?>


<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="CSS/style.css">
</head>
<body>
<header>
    <h1>Theater Zuidplein <br> Branching storyline</h1>

</header>
<main>
    <form action="" method="post">
        <h2>Please enter ticket code</h2>
        <?php
        //if submit pressed
        if(isset($_POST['submit'])) {
            //if either email or code is not empty
            if(!empty($_POST['email']) || !empty($_POST['verification'])) {
                //protect from sql injections and save as variable
                $email = mysqli_real_escape_string($conn, $_POST['email']);
                $verification = mysqli_real_escape_string($conn, $_POST['verification']);

                //query to get email and verification from database
                $query = "SELECT verification FROM `data` WHERE email = '$email'";
                //runs query on the database
                $result = mysqli_query($conn, $query);

                //if there is 1 result in the database
                if (mysqli_num_rows($result) == 1) {
                    //fetches information from database
                    $fetch = mysqli_fetch_assoc($result);
                    //only need verification, which is a hash
                    $hash = $fetch['verification'];

                    //if verification matches with verification in db
                    if (password_verify($verification, $hash)){
                        $_SESSION['email'] = $email;
                        header("Location: welcome.php");
                    }
                    else{
                        //if pw doesnt match with database, show error
                        ?>
                        <p>verification invalid</p>
                        <?php
                    }
                }
                else{
                    //if there is no such verification in database
                    echo 'verification invalid';
                }
                mysqli_close($conn);
            }
            else{
                //if username or verification is empty
                ?>
                <p> Please enter ticket code</p>
                <?php
            }
        }
        ?>
        <input type="text" claid="email" name="email" placeholder="email">
        <input type="text" id="verification" name="verification" placeholder="ticketcode">
        <input type="submit" name="submit">
    </form>
</main>
<footer>

</footer>
</body>
</html>
