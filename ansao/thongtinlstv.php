<?php


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
// echo json_encode(array_column($obj_sao,null,"ten"));


$obj_thong_tin = new Thong_tin();
$obj_thong_tin->menh =$menh[$can_nam][$chi_nam]; 
$obj_thong_tin->id_than_cung =$id_than_cung;
$obj_thong_tin->cuc = $obj_ngu_hanh[$id_cuc->id_ngu_hanh_don];
$obj_thong_tin->cuc->ten_cuc = $ten_cuc[$id_cuc->id_ngu_hanh_don];
$obj_thong_tin->thong_tin_client = $obj_thong_tin_fake;
$la_so_thien_ban->cuc_so=$cuc_so;
$la_so_thien_ban->thong_tin = $obj_thong_tin;










?>