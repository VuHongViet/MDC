<?php
// $can_nam=3;
// $chi_nam=1;
// $thang=2;
// $ngay=9;
// $gio=5;
// $gioi_tinh=1;

if (isset($_POST['submit'])) {
	$data = json_decode($_POST['json'],true);
	echo '<pre>';
	print_r($data);
	$can_nam = $data['Can_nam'];
	$chi_nam = $data['Chi_nam'];
	$thang =$data['Am_Lich']['thang_al'];
	$ngay =$data['Am_Lich']['ngay_al'];
	$gio =$data['Am_Lich']['gio_al'];
	$gioi_tinh=$data['Gioitinh'];
 }




require 'class.php';
require 'setup.php';
require 'anchinhtinh.php';
require 'anphutinhcan.php';
require 'anphutinhchi.php';
require 'anphutinhtng.php';






function an_sao($can_nam,$chi_nam,$thang,$ngay,$gio){
	global $cuc_so;
	global $la_so_thien_ban;
	an_chinh_tinh($ngay,$cuc_so,$obj_sao,$obj_ngu_hanh);
	an_phu_tinh_can($can_nam,$obj_sao,$obj_ngu_hanh);
	an_phu_tinh_chi($chi_nam,$obj_sao,$obj_ngu_hanh);
	an_phu_tinh_tng($thang,$ngay,$gio,$obj_sao,$obj_ngu_hanh);
    echo json_encode($la_so_thien_ban);
	//echo json_encode($obj_sao);

}
an_sao($can_nam,$chi_nam,$thang,$ngay,$gio);

?>