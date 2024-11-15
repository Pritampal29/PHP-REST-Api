<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include('config.php');

// Data Search by GET method =========================>
// $search_term = isset($_GET['search']) ? $_GET['search']:die();
// Data Search by GET method =========================>

$data = json_decode(file_get_contents("php://input"), true);
$search_term = $data['search'];

$select = "SELECT * FROM `php_api` WHERE `uname` LIKE '%$search_term%' ";
$query = mysqli_query($conn,$select);

if(mysqli_num_rows($query) > 0) {

    $output = mysqli_fetch_all($query,MYSQLI_ASSOC);
    echo json_encode($output);

} else {

    echo json_encode(array('Message' => 'No Record Found with this SearchTerm'));

}

?>