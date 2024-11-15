<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');


include('config.php');

$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data['uid'];

$select = "SELECT * FROM `php_api` WHERE `id`='$user_id'";
$q_run = mysqli_query($conn,$select);

$no_of_rows = mysqli_num_rows($q_run);

if($no_of_rows > 0) {
    $delete = "DELETE FROM `php_api` WHERE `id`='$user_id'";
    $query = mysqli_query($conn,$delete);

    if($query) {

        echo json_encode(array('Message' => 'Data Deleted Successfully'));

    }else{

        echo json_encode(array('Message' => 'Data Not Deleted'));

    }
}else{
    echo json_encode(array('Message' => 'Id not found,Try Different one!'));
}


?>