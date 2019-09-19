<?php
// 
function an_phu_tinh_tng($thang,$ngay,$gio){
	global $la_so_thien_ban;
	global $chi_nam;
	global $can_nam;
	global $sign;
	global $obj_ngu_hanh;
$vi_tri_tuan1 = Check($chi_nam - $can_nam - 2);
$vi_tri_tuan2 = Check($chi_nam - $can_nam - 1);
$obj = new Sao("Tuần-1",$obj_ngu_hanh[2]);
$obj->vi_tri = $vi_tri_tuan1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;
$obj = new Sao("Tuần-2",$obj_ngu_hanh[2]);
$obj->vi_tri = $vi_tri_tuan2;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;
$vi_tri_triet1=Check(9-($can_nam+4)%5-1);
$vi_tri_triet2=Check(9-($can_nam+4)%5-1);

$obj = new Sao("Triệt-1",$obj_ngu_hanh[2]);
$obj->vi_tri = $vi_tri_triet1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;
$obj = new Sao("Triệt-2",$obj_ngu_hanh[2]);
$obj->vi_tri = $vi_tri_triet2;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;



$vi_tri_dia_khong = Check($gio+3);
$obj = new Sao("Địa Không",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri = $vi_tri_dia_khong;
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$vi_tri_dia_kiep =  Check($gio-3);
$obj = new Sao("Địa Kiếp",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri = $vi_tri_dia_kiep;
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;

$obj_sao[]=clone $obj;



//
$vi_tri_hoa_tinh = function () use ($chi_nam,$gio,$sign){
	$hoa_tinh=[1=>1,2,12,1,1,2,12,1,1,2,12,1];
	return Check($gio*$sign+$hoa_tinh[$chi_nam]-1);
};
$vi_tri_hoa_tinh  = $vi_tri_hoa_tinh();
$obj = new Sao("Hỏa Tinh",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->vi_tri = $vi_tri_hoa_tinh;

$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
//
$vi_tri_linh_tinh = function () use ($chi_nam,$gio,$sign){
	$linh_tinh=[1=>9,9,2,9,9,9,2,9,9,9,2,9];
	return Check(-$gio*$sign*(-1)+$linh_tinh[$chi_nam]-1);
};
$vi_tri_linh_tinh  = $vi_tri_linh_tinh();
$obj = new Sao("Linh Tinh",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->vi_tri = $vi_tri_linh_tinh;

$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


//
//
// $vi_tri_ta_phu = function () use ($thang){
	// return Check($thang + 3 -1);
// };
// $vi_tri_ta_phu = $vi_tri_ta_phu(); 
$obj = new Sao("Tả Phụ",$obj_ngu_hanh[4]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri = Check($thang + 3 -1);

$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//  
//
// $vi_tri_huu_bat = function () use ($thang){
	// return Check(-$thang + 9 +1);
// };
// $vi_tri_huu_bat = $vi_tri_huu_bat(); 
$obj = new Sao("Hữu Bật",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri = Check(-$thang + 9 +1);

$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;



$vi_tri_van_xuong = function () use ($gio){
	return Check(-$gio + 9 + 1);
};
$vi_tri_van_xuong = $vi_tri_van_xuong();
$obj = new Sao("Văn Xương",$obj_ngu_hanh[4]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri = $vi_tri_van_xuong;

$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$vi_tri_van_khuc = function () use ($gio){
	return Check($gio + 3 - 1);
};
$vi_tri_van_khuc = $vi_tri_van_khuc();
$obj = new Sao("Văn Khúc",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri = $vi_tri_van_khuc;

$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;
//
//
// $vi_tri_tam_thai = function () use ($vi_tri_ta_phu,$ngay){
	// return Check($vi_tri_ta_phu + $ngay - 1);
// };
// $vi_tri_tam_thai = $vi_tri_tam_thai();


$obj = new Sao("Tam Thai",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check($thang+2+ $ngay - 1);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
// $vi_tri_bat_toa = function () use ($vi_tri_huu_bat,$ngay){
	// return Check($vi_tri_huu_bat - $ngay + 1);
// };
// $vi_tri_bat_toa = $vi_tri_bat_toa();
$obj = new Sao("Bát Tọa",$obj_ngu_hanh[1]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check(10-$thang - $ngay + 1);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// //
// $vi_tri_an_quang = function () use ($vi_tri_van_xuong,$ngay){
	// return Check($vi_tri_van_xuong + $ngay - 2);
// };
// $vi_tri_an_quang = $vi_tri_an_quang();
$obj = new Sao("Ân Quang",$obj_ngu_hanh[1]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check($vi_tri_van_xuong + $ngay - 2);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


// //
// $vi_tri_thien_quy = function () use ($vi_tri_van_khuc,$ngay){
	// return Check($vi_tri_van_khuc - $ngay + 2);
// };
// $vi_tri_thien_quy = $vi_tri_thien_quy();
$obj = new Sao("Thiên Quý",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check($vi_tri_van_khuc - $ngay + 2);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


// //
// $vi_tri_thien_hinh = function () use ($thang){
	// return Check( 8 + $thang - 1);
// };
// $vi_tri_thien_hinh = $vi_tri_thien_hinh();
$obj = new Sao("Thiên Hình",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check( 8 + $thang - 1);
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
//
// $vi_tri_thien_rieu = function () use ($thang){
	// return Check(11 + $thang -1);
// };
// $vi_tri_thien_rieu = $vi_tri_thien_rieu(); 
// $vi_tri_thien_y = $vi_tri_thien_rieu;
$obj = new Sao("Thiên Riêu",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check(11 + $thang -1);

$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

$obj = new Sao("Thiên Y",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check(11 + $thang -1);

$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// //
// $vi_tri_thien_giai = function () use ($thang){
	// return Check(7 + $thang - 1 ); 
// };
// $vi_tri_thien_giai = $vi_tri_thien_giai();
$obj = new Sao("Thiên Giải",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check(7 + $thang - 1 ); 

$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// //
// $vi_tri_dia_giai = function () use ($thang){
	// return Check(6 + $thang - 1 ); 
// };
// $vi_tri_dia_giai = $vi_tri_dia_giai();
$obj = new Sao("Địa Giải",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check(6 + $thang - 1 ); 

$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


// $vi_tri_giai_than = $vi_tri_phuong_cac;
$obj = new Sao("Giải Thần",$obj_ngu_hanh[1]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check(-$chi_nam + 9 + 1);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


// // 
// $vi_tri_thai_phu = function () use ($gio){
	// return (5 + $gio -1);
// };
// $vi_tri_thai_phu = $vi_tri_thai_phu();
$obj = new Sao("Thai Phụ",$obj_ngu_hanh[4]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check(5 + $gio -1);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// // 
// $vi_tri_phong_cao = function () use ($gio){
	// return Check(1 + $gio -1);
// };
// $vi_tri_phong_cao = $vi_tri_phong_cao(); 
$obj = new Sao("Phong Cáo",$obj_ngu_hanh[3]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check(1 + $gio -1);

$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;
}


?>