<?php

session_start();

// $can_nam=3;
// $chi_nam=1;
// $thang=2;
// $ngay=9;
// $gio=5;
// $gioi_tinh=1;

// $can_nam = $_POST["can_nam"];
// $chi_nam = $_POST["chi_nam"];
// $thang = $_POST["thang"];
// $ngay = $_POST["ngay"];
// $gio = $_POST["gio"];
// $gioi_tinh = $_POST["gioi_tinh"];


if (isset($_POST['submit'])) {
	$data = json_decode($_POST['json'],true);
	$can_nam = $data['Can_nam'];
	$chi_nam = $data['Chi_nam'];
	$thang =$data['Am_Lich']['thang_al'];
	$ngay =$data['Am_Lich']['ngay_al'];
	$gio =$data['Am_Lich']['gio_al'];
	$gioi_tinh=$data['Gioitinh'];
 }
$obj_thong_tin_fake = (object)[
  	"Name" => "ansao.zz.mu",
    "Gioitinh" => 1,
	"Gioi_tinh" => "Nam",
    "Am_Lich" => Array
        (
            "nam_al" => 1996,
            "thang_al" => 2,
            "ngay_al" => 9,
            "gio_al" => 8,
        ),

    "Duong_Lich" => Array
        (
            "nam_dl" =>1996, 
            "thang_dl" => 3,
            "ngay_dl" => 27,
            "gio_dl" => 8,
        ),

    "can_nam" => 3,
    "chi_nam" => 1,
	"ngay_lap" => "20/10/2011 15:30"
];
require 'class.php';
require 'setup.php';
require 'anchinhtinh.php';
require 'anphutinhcan.php';
require 'anphutinhchi.php';
require 'anphutinhtng.php';
require 'thongtinlstv.php';






function an_sao($can_nam,$chi_nam,$thang,$ngay,$gio){
	global $cuc_so;
	global $la_so_thien_ban;
	an_chinh_tinh($ngay,$cuc_so);
	an_phu_tinh_can($can_nam);
	an_phu_tinh_chi($chi_nam);
	an_phu_tinh_tng($thang,$ngay,$gio);
	  $_SESSION['data']= json_encode($la_so_thien_ban);
	header("location:velaso.php");
	//$b = array_column($obj_sao,null,"ten");
	// echo json_encode(array_column($obj_sao,null,"ten"));

}
an_sao($can_nam,$chi_nam,$thang,$ngay,$gio);

?>