<?php
function Check($x){
	return (($x+1200-1)%12+1);
}
function Tinh_Gio($gio){
		return Check(floor(($gio+3)/2));
}
function sign( $can_nam,$gioi_tinh) {
	$sign = 1;
	if (($can_nam%2+$gioi_tinh)==1) $sign=-1;
	return $sign;
}
$sign =  sign( $can_nam,$gioi_tinh);

$so_cuc = [1=>3,6,5,4,2];
// moc 3
// hoa 6
// tho 5
// kim 4
// thuy 2
$menh = [] ;
$menh[1][1] = $menh[2][2] = "Hải Trung Kim";
$menh[3][3] = $menh[4][4] = "Lư Trung Hỏa";
$menh[5][5] = $menh[6][6] = "Đại Lâm Mộc";
$menh[7][7] = $menh[8][8] = "Lộ Bàng Thổ";
$menh[9][9] = $menh[10][10] = "Kiếm Phong Kim";
$menh[1][11] = $menh[2][12] = "Sơn Đầu Hỏa";
$menh[3][1] = $menh[4][2] = "Giản Hạ Thủy";
$menh[5][3] = $menh[6][4] = "Thành Đầu Thổ";
$menh[7][5] = $menh[8][6] = "Bạch Lạp Kim";
$menh[9][7] = $menh[10][8] = "Dương Liễu Mộc";
$menh[1][9] = $menh[2][10] = "Tinh Tuyền Thủy";
$menh[3][11] = $menh[4][12] = "Ốc Thượng Thổ";
$menh[5][1] = $menh[6][2] = "Tích Lịch Hỏa";
$menh[7][3] = $menh[8][4] = "Tùng Bách Mộc";
$menh[9][5] = $menh[10][6] = "Trường Lưu Thủy";
$menh[1][7] = $menh[2][8] = "Sa Trung Kim";
$menh[3][9] = $menh[4][10] = "Sơn Hạ Hỏa";
$menh[5][11] = $menh[6][12] = "Bình Địa Mộc";
$menh[7][1] = $menh[8][2] = "Bích Thượng Thổ";
$menh[9][3] = $menh[10][4] = "Kim Bá Kim";
$menh[1][5] = $menh[2][6] = "Phú Đăng Hỏa";
$menh[3][7] = $menh[4][8] = "Thiên Hà Thủy";
$menh[5][9] = $menh[6][10] = "Đại Dịch Thổ";
$menh[7][11] = $menh[8][12] = "Thoa Xuyến Kim";
$menh[9][1] = $menh[10][2] = "Tang Đố Mộc";
$menh[1][3] = $menh[2][4] = "Đại Khuê Thủy";
$menh[3][5] = $menh[4][6] = "Sa Trung Thổ";
$menh[5][7] = $menh[6][8] = "Thiên Thượng Hỏa";
$menh[7][9] = $menh[8][10] = "Thạch Lựu Mộc";
$menh[9][11] = $menh[10][12] = "Đại Hải Thủy";




$ten_cuc =[1=>"Mộc Tam Cục","Hỏa Lục Cục","Thổ Ngũ Cục","Kim Tứ Cục","Thủy Nhị Cục"];


$obj_menh_nap_am=new Nap_Am($can_nam,$chi_nam);
$obj_menh_nap_am->ngu_hanh=$obj_ngu_hanh[$obj_menh_nap_am->id_ngu_hanh_don];



$obj_cung_vi=[];
for ($i=1;$i<=12;$i++){
	$obj_cung_vi[$i]=new Cung_Vi();
	$obj_cung_vi[$i]->chi=Check($i+2);
	$obj_cung_vi[$i]->can=(2*$can_nam+$i-1)%10+1;
	$obj_cung_vi[$i]->ngu_hanh_nap_am=new Nap_Am($obj_cung_vi[$i]->can,$obj_cung_vi[$i]->chi);
	$obj_cung_vi[$i]->obj_can=$obj_can[$obj_cung_vi[$i]->can];
	$obj_cung_vi[$i]->obj_chi=$obj_chi[$obj_cung_vi[$i]->chi];
	$obj_cung_vi[$i]->ngu_hanh_don = $obj_cung_vi[$i]->ngu_hanh_nap_am->id_ngu_hanh_don;
	$obj_cung_vi[$i]->cuc_so = $so_cuc[$obj_cung_vi[$i]->ngu_hanh_don];
}





//var_dump(json_encode($obj_cung_vi));	
$id_menh_cung=Check($thang-$gio+1);
$id_than_cung=Check($thang+$gio-1);
$id_cung_tinh_cuc=$id_menh_cung; 

	
$obj_cung_chuc=[];

 for ($i = 1;$i <=12 ;$i ++){
	 $obj_cung_chuc[$i]=new Cung_Chuc();
	 $obj_cung_chuc[$i]=$obj_cung_vi[check($i-1+$id_menh_cung)];
	 $obj_cung_chuc[$i]->id_cung_chuc = $i;
	 $obj_cung_chuc[$i]->id_ten_cung_chuc = $ten_cung_chuc[$i];
 }
//echo json_encode($obj_cung_vi);

$obj_than_cung=	$obj_cung_chuc[Check(1+2*$gio)];
$id_cuc = new Nap_Am($obj_cung_chuc[1]->obj_can->id_can,$obj_cung_chuc[1]->obj_chi->id_chi);
$cuc_so =$so_cuc[$id_cuc->id_ngu_hanh_don];





$la_so_thien_ban=new La_So();
$la_so_thien_ban->cung_lap_cuc=1;
$la_so_thien_ban->cung_chuc=[];
$la_so_thien_ban->obj_cung_vi=[];


for ($i = 1;$i <=12 ;$i ++){
$la_so_thien_ban->obj_cung_vi[$i]=clone $obj_cung_vi[$i];
}

for ($i = 1;$i <=12 ;$i ++){
$la_so_thien_ban->cung_chuc[$i]=new Cung_Chuc();
$la_so_thien_ban->cung_chuc[$i]=$la_so_thien_ban->obj_cung_vi[Check($i-1+$id_menh_cung)];
$la_so_thien_ban->cung_chuc[$i]->id_cung_chuc =$i;
$la_so_thien_ban->cung_chuc[$i]->id_ten_cung_chuc = $ten_cung_chuc[$i];
$la_so_thien_ban->cung_chuc[$i]->cung_vi= Check($i-1+$id_menh_cung);
$la_so_thien_ban->obj_cung_vi[$i]->ngu_hanh_nap_am->menh=$menh[$la_so_thien_ban->obj_cung_vi[$i]->ngu_hanh_nap_am->id_can][$la_so_thien_ban->obj_cung_vi[$i]->ngu_hanh_nap_am->id_chi]; 
}


if ($sign == 1) {
for ($i = 1;$i <=12 ;$i ++){
$la_so_thien_ban->cung_chuc[$i]->dai_van = ($cuc_so + ($i -1)*10);
}
}
else {
for ($i = 13;$i >= 2 ;$i --){
$la_so_thien_ban->cung_chuc[Check($i)]->dai_van = ($cuc_so + (Check($i) -1)*10);
}	
	
}

//echo json_encode($obj_cung_chuc);
// $id_cung_tinh_cuc=$id_menh_cung;
// $so_cuc = [1=>3,6,5,4,2];
// // moc 3
// // hoa 6
// // tho 5
// // kim 4
// // thuy 2
$obj_thong_tin = new Thong_tin();
$obj_thong_tin->cuc = $obj_ngu_hanh[$id_cuc->id_ngu_hanh_don];
$obj_thong_tin->cuc->ten_cuc = $ten_cuc[$id_cuc->id_ngu_hanh_don];
$obj_thong_tin->thong_tin_client = $obj_thong_tin_fake;
$la_so_thien_ban->cuc_so=$cuc_so;
$la_so_thien_ban->thong_tin = $obj_thong_tin;

//echo json_encode($la_so_thien_ban);




?>