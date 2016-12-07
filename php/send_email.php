<?php
    if(isset($_GET['name']) && isset($_GET['email']) && isset($_GET['message'])){
        if(!empty($_GET['name']) && !empty($_GET['email']) && !empty($_GET['message'])){
            $name = $_GET['name'];
            $email = $_GET['email'];
            $message = $_GET['message'].'/n/nFrom'.$name.' at '.$email;
            $subject = "New enquiry from OCWebTech";
            $send_to = "nialloc9@gmail.com";

            mail($send_to,$subject,$message);
        }
    }
?>
