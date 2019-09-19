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

}
//echo json_encode($obj_cung_chuc);
// $id_cung_tinh_cuc=$id_menh_cung;
// $so_cuc = [1=>3,6,5,4,2];
// // moc 3
// // hoa 6
// // tho 5
// // kim 4
// // thuy 2

$id_cuc = new Nap_Am($obj_cung_chuc[1]->obj_can->id_can,$obj_cung_chuc[1]->obj_chi->id_chi);
$cuc_so =$so_cuc[$id_cuc->id_ngu_hanh_don];

$la_so_thien_ban->cuc_so=$cuc_so;
$la_so_thien_ban->thong_tin = $obj_thong_tin;

//echo json_encode($la_so_thien_ban);




?>