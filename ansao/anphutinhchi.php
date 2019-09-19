<?php
// 
// // Thái Tuế tinh hệ
function an_phu_tinh_chi($chi_nam,&$obj_sao,&$obj_ngu_hanh){
	global $la_so_thien_ban;
	global $id_menh_cung;
	global $id_than_cung;
	global $thang;
	global $gio;
$vi_tri_thai_tue = function () use ($chi_nam){
	return Check($chi_nam-2);
	
};
$vi_tri_thai_tue = $vi_tri_thai_tue();
$obj = new Sao("Thái Tuế",$obj_ngu_hanh[1]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_thai_tue;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;
//
// $vi_tri_long_tri = function () use ($chi_nam){
	// return Check($chi_nam + 3 -1);
// };
// $vi_tri_long_tri = $vi_tri_long_tri();
$obj = new Sao("Long Trì",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check($chi_nam + 3 -1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
// $vi_tri_phuong_cac = function () use ($chi_nam){
	// return Check(-$chi_nam + 9 + 1);
// };
// $vi_tri_phuong_cac = $vi_tri_phuong_cac();
$obj = new Sao("Phượng Các",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check(-$chi_nam + 9 + 1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// //
// $vi_tri_thien_khoc = function () use ($chi_nam){
	// return Check( - $chi_nam + 5 + 1);
	
// };
// $vi_tri_thien_khoc = $vi_tri_thien_khoc();
$obj = new Sao("Thiên Khốc",$obj_ngu_hanh[4]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check( - $chi_nam + 5 + 1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
// $vi_tri_thien_hu = function () use ($chi_nam){
	// return Check(  $chi_nam + 5  - 1);
	
// };
// $vi_tri_thien_hu = $vi_tri_thien_hu();
//
$obj = new Sao("Thiên Hư",$obj_ngu_hanh[3]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check(  $chi_nam + 5  - 1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// //
// $vi_tri_thien_duc = function () use ($chi_nam){
	// return Check( 8 + $chi_nam -1);
// };
// $vi_tri_thien_duc = $vi_tri_thien_duc();
$obj = new Sao("Thiên Đức",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check( 8 + $chi_nam -1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// //
// $vi_tri_nguyet_duc = function () use ($chi_nam){
	// return Check( 4 - $chi_nam + 1);
// };
// $vi_tri_nguyet_duc = $vi_tri_nguyet_duc();
$obj = new Sao("Nguyệt Đức",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check( 4 - $chi_nam + 1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// //
// $vi_tri_hong_loan = function () use ($chi_nam){
	// return Check(2 - $chi_nam + 1);
// };
// $vi_tri_hong_loan = $vi_tri_hong_loan();
// $vi_tri_thien_hy = Check(12-$vi_tri_hong_loan+2);
// 
$obj = new Sao("Hồng Loan",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check(2 - $chi_nam + 1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Hỷ",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check(2 - $chi_nam + 1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
// $vi_tri_thien_tai = function () use($id_menh_cung,$chi_nam){
	// return Check($id_menh_cung + $chi_nam -1);
	
// };
// $vi_tri_thien_tai = $vi_tri_thien_tai();
$obj = new Sao("Thiên Tài",$obj_ngu_hanh[1]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($id_menh_cung + $chi_nam -1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// //
// $vi_tri_thien_tho = function () use($id_than_cung,$chi_nam){
	// return Check($id_than_cung + $chi_nam -1);
	
// };
// $vi_tri_thien_tho = $vi_tri_thien_tho();
$obj = new Sao("Thiên Thọ",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri =  Check($id_than_cung + $chi_nam -1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$vi_tri_co_than = function () use ($chi_nam){
	$co_than =[1=>1,1,4,4,4,7,7,7,10,10,10,1];
	return $co_than[$chi_nam];
};
$vi_tri_co_than = $vi_tri_co_than();
$obj = new Sao("Cô Thần",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_co_than;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$vi_tri_qua_tu = function () use ($chi_nam){
	$qua_tu =[1=>9,9,12,12,12,3,3,3,6,6,6,9];
	return $qua_tu[$chi_nam];
};
$vi_tri_qua_tu = $vi_tri_qua_tu();
$obj = new Sao("Quả Tú",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_qua_tu;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$vi_tri_dao_hoa = function () use($chi_nam){
	$dao_hoa = [1=>8,5,2,11,8,5,2,11,8,5,2,11];
	return $dao_hoa[$chi_nam];
};
$vi_tri_dao_hoa = $vi_tri_dao_hoa();
$obj = new Sao("Đào Hoa",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_dao_hoa;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$vi_tri_thien_ma = function () use ($chi_nam){
	$thien_ma = [1=>1,10,7,4,1,10,7,4,1,10,7,10];
	return $thien_ma[$chi_nam];
};
$vi_tri_thien_ma = $vi_tri_thien_ma();
$obj = new Sao("Thiên Mã",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri = $vi_tri_thien_ma;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
//
$vi_tri_kiep_sat = function () use ($chi_nam){
	$kiep_sat = [1=>4,1,10,7,4,1,10,7,4,1,10,7];
	return $kiep_sat[$chi_nam];
	
};
$vi_tri_kiep_sat = $vi_tri_kiep_sat();
$obj = new Sao("Kiếp Sát",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri = $vi_tri_kiep_sat;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$vi_tri_pha_toai = function () use ($chi_nam){
	$pha_toai = [1=>4,12,8,4,12,8,4,12,8,4,12,4];
	return $pha_toai[$chi_nam];
	
};
$vi_tri_pha_toai = $vi_tri_pha_toai();
$obj = new Sao("Phá Toái",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_pha_toai;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
//
$vi_tri_hoa_cai = function () use ($chi_nam){
	$hoa_cai = [1=>3,12,9,6,3,12,9,6,3,12,9,6];
	return $hoa_cai[$chi_nam];
	
};
$vi_tri_hoa_cai = $vi_tri_hoa_cai();
$obj = new Sao("Hoa Cái",$obj_ngu_hanh[1]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_hoa_cai;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

$obj = new Sao("Nguyệt Tướng",$obj_ngu_hanh[1]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check($chi_nam-2 - $thang +$gio);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

$obj = new Sao("Thiên Không",$obj_ngu_hanh[1]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check($chi_nam-2 +1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

};


?>