<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include('config.php');

$data = json_decode(file_get_contents("php://input"), true);
$user_id = $data['uid'];

$select = "SELECT * FROM `php_api` WHERE `id`='$user_id'";
$query = mysqli_query($conn,$select);

if(mysqli_num_rows($query) > 0) {

    $output = mysqli_fetch_all($query,MYSQLI_ASSOC);
    echo json_encode($output);

} else {

    echo json_encode(array('Message' => 'No Record Found'));

}


?>