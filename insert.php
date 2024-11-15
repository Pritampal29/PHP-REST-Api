<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include('config.php');

$data = json_decode(file_get_contents("php://input"), true);

$username = $data['uname'];
$usermobile = $data['umobile'];
$userage = $data['uage'];
$usercity = $data['ucity'];

$insert = "INSERT INTO `php_api`(`uname`,`mobile`,`age`,`city`) VALUES('$username','$usermobile','$userage','$usercity')";
$query = mysqli_query($conn,$insert);

if($query) {

    echo json_encode(array('Message' => 'Data Inserted'));

} else {

    echo json_encode(array('Message' => 'Data Insertion Error'));

}


?>