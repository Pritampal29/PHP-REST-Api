<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include('config.php');

$select = "SELECT * FROM `php_api` ORDER BY `id` DESC";
$query = mysqli_query($conn,$select);

if(mysqli_num_rows($query) > 0) {

    $output = mysqli_fetch_all($query,MYSQLI_ASSOC);
    echo json_encode($output);

} else {

    echo json_encode(array('Message' => 'No Record Found','status' => 'false'));

}


?>