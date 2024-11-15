<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include('config.php');

$data = json_decode(file_get_contents("php://input"), true);

$userid = $data['uid'];
$username = $data['uname'];
$usermobile = $data['umobile'];
$userage = $data['uage'];
$usercity = $data['ucity'];

$update = "UPDATE `php_api` SET `uname`='$username', `mobile`='$usermobile', `age`='$userage', `city`='$usercity' WHERE `id`='$userid'";
$query = mysqli_query($conn,$update);

if($query) {

    echo json_encode(array('Message' => 'Data Updated'));

} else {

    echo json_encode(array('Message' => 'Data Updation Error'));

}


?>