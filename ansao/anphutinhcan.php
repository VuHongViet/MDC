<?php

function an_phu_tinh_can($can_nam){
	global $la_so_thien_ban;
	global $sign;
	global $obj_ngu_hanh;

// Lộc Tồn 
$vi_tri_loc_ton = function  () use ($can_nam){
	$vi_tri=[1=>1,2,4,5,4,5,7,8,9,10];
	return $vi_tri[$can_nam];
};
$vi_tri_loc_ton = $vi_tri_loc_ton();
//
$obj = new Sao("Lộc Tồn",$obj_ngu_hanh[3]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri = $vi_tri_loc_ton;
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Lực Sỹ",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_loc_ton + $sign*1);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thanh Long",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_loc_ton + $sign*2);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Tiểu Hào",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_loc_ton + $sign*3);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Tướng Quân",$obj_ngu_hanh[1]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_loc_ton + $sign*4);
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Tấu Thư",$obj_ngu_hanh[4]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_loc_ton + $sign*5);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Phi Liêm",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_loc_ton + $sign*6);
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Hỷ Thần",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_loc_ton + $sign*7);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Bệnh Phù",$obj_ngu_hanh[3]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_loc_ton + $sign*8);
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Đại Hao",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_loc_ton + $sign*9);
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Phục Binh",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_loc_ton + $sign*10);
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Quan Phù",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_loc_ton + $sign*11);
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


// 
$obj = new Sao("Kình Dương",$obj_ngu_hanh[4]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri= Check($vi_tri_loc_ton+1);
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Đà La",$obj_ngu_hanh[4]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri= Check($vi_tri_loc_ton-1);
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// kiem tra lai cach an thie khoi thien viet
$vi_tri_thien_khoi = function () use  ($can_nam){
	$thien_khoi = [1=>12,11,10,10,5,11,5,5,2,2];
	return $thien_khoi[$can_nam];
};
$vi_tri_thien_khoi = $vi_tri_thien_khoi();
// 
$obj = new Sao("Thiên Khôi",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->vi_tri = $vi_tri_thien_khoi;
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


//
$vi_tri_thien_viet = function () use  ($can_nam){
	$thien_viet = [1=>6,7,8,8,1,1,6,7,4,4];
	return $thien_viet[$can_nam];
};
$vi_tri_thien_viet = $vi_tri_thien_viet(); 
$obj = new Sao("Thiên Việt",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "nam_dau";
$obj->vi_tri = $vi_tri_thien_viet;
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
// $vi_tri_quoc_an = function () use ($vi_tri_loc_ton){
	// return Check($vi_tri_loc_ton + 9 - 1);
// };
// $vi_tri_quoc_an = $vi_tri_quoc_an(); 
$obj = new Sao("Quốc Ấn",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check($vi_tri_loc_ton + 9 - 1);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


// //
// $vi_tri_duong_phu = function () use ($vi_tri_loc_ton){
	// return Check($vi_tri_loc_ton - 8 + 1);
// };
// $vi_tri_duong_phu = $vi_tri_duong_phu(); 
$obj = new Sao("Đường Phù",$obj_ngu_hanh[1]);
$obj->am_duong_sao=1;
$obj->vi_tri = Check($vi_tri_loc_ton - 8 + 1);
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


function an_tu_hoa($can_nam, &$obj_sao){
	global $vi_tri_tu_vi;
	global $vi_tri_thien_phu;
	global $thang;
	global $gio;
	global $obj_ngu_hanh;
	global $la_so_thien_ban;
	$vi_tri_van_xuong=Check(10-$gio);
	$vi_tri_van_khuc=Check($gio+2);
	$vi_tri_ta_phu=Check($thang+2);
	$vi_tri_huu_bat=Check(10-$thang);
	
	$loc = [1=>$vi_tri_tu_vi+4,$vi_tri_tu_vi+10,$vi_tri_tu_vi+7,
			$vi_tri_thien_phu+1,$vi_tri_thien_phu+2,$vi_tri_tu_vi+8,
			$vi_tri_tu_vi+9,$vi_tri_thien_phu+3,$vi_tri_thien_phu+5,$vi_tri_thien_phu+9];
	$quyen = [1=>$vi_tri_thien_phu+9,$vi_tri_thien_phu+5,$vi_tri_tu_vi+10,$vi_tri_tu_vi+7,
			$vi_tri_thien_phu+1,$vi_tri_thien_phu+2,$vi_tri_tu_vi+8,$vi_tri_thien_phu+5,
			$vi_tri_tu_vi,$vi_tri_thien_phu+3];
	$khoa = [1=>$vi_tri_tu_vi+8,$vi_tri_tu_vi,$vi_tri_van_xuong,$vi_tri_tu_vi+10,
			-$thang + 9 +1,$vi_tri_thien_phu+5,$vi_tri_thien_phu+1,$vi_tri_van_khuc,
			$vi_tri_ta_phu,$vi_tri_thien_phu+1];	
			
	$ky=[1=>$vi_tri_tu_vi+9,$vi_tri_thien_phu+1,$vi_tri_tu_vi+4,$vi_tri_thien_phu+3,
		$vi_tri_tu_vi+10,$vi_tri_van_khuc,$vi_tri_tu_vi+7,$vi_tri_van_xuong,
		$vi_tri_tu_vi+8,$vi_tri_thien_phu+2];
	$obj = new Sao("Hóa Lộc",$obj_ngu_hanh[1]);
	$obj->am_duong_sao=1;
	$obj->vi_tri = Check($loc[$can_nam]);
	$obj->loai="phu_tinh";
	$obj->cat_hung=0;
	$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
	$obj_sao[]=clone $obj;
	$obj = new Sao("Hóa Quyền",$obj_ngu_hanh[1]);
	$obj->am_duong_sao=1;
	$obj->loai="phu_tinh";
	$obj->cat_hung=0;
	$obj->vi_tri = Check($quyen[$can_nam]);
	$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
	$obj_sao[]=clone $obj;

	$obj = new Sao("Hóa Khoa",$obj_ngu_hanh[1]);
	$obj->am_duong_sao=0;
	$obj->vi_tri = Check($khoa[$can_nam]);
	$obj->loai="phu_tinh";
	$obj->cat_hung=0;
	$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
	$obj_sao[]=clone $obj;
	$obj = new Sao("Hóa Kỵ",$obj_ngu_hanh[5]);
	$obj->am_duong_sao=1;
	$obj->loai="phu_tinh";
	$obj->cat_hung=0;
	$obj->vi_tri = Check($ky[$can_nam]);
	$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
	$obj_sao[]=clone $obj;

};
 an_tu_hoa($can_nam,$obj_sao);

// 
//
$vi_tri_thien_quan = function () use ($can_nam){
	$thien_quan = [1=>6,3,4,1,2,8,10,8,9,5];
	return $thien_quan[$can_nam];
};
$vi_tri_thien_quan= $vi_tri_thien_quan();
$obj = new Sao("Thiên Quan",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_quan;
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$vi_tri_thien_phuc = function () use ($can_nam){
	$thien_phuc = [1=>8,7,11,10,2,1,5,4,5,4];
	return $thien_phuc[$can_nam];
};
$vi_tri_thien_phuc = $vi_tri_thien_phuc();
$obj = new Sao("Thiên Phúc",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_phuc;
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


//
$vi_tri_luu_ha = function () use ($can_nam){
	$luu_ha = [1=>8,9,6,3,4,5,7,2,12,1];
	return $luu_ha[$can_nam];
	
};
$vi_tri_luu_ha = $vi_tri_luu_ha();
$obj = new Sao("Lưu Hà",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_luu_ha;
$obj->loai="phu_tinh";
$obj->cat_hung=1;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$vi_tri_thien_tru = function () use ($can_nam){
	$thien_tru = [1=>4,5,11,4,5,7,1,5,8,9];
	return $thien_tru[$can_nam];
	
};
$vi_tri_thien_tru = $vi_tri_thien_tru();
$obj = new Sao("Thiên Trù",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_tru;
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$vi_tri_luu_nien_van_tinh = function () use ($can_nam){
	$luu_nien_van_tinh = [1=>4,5,7,8,7,8,12,11,1,2];
	return $luu_nien_van_tinh[$can_nam];
	
};
$vi_tri_luu_nien_van_tinh = $vi_tri_luu_nien_van_tinh();
$obj = new Sao("LN Văn Tinh",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_luu_nien_van_tinh;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


// 75 - Bác Sĩ
$obj = new Sao("Bác Sĩ",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_loc_ton;
$obj->loai="phu_tinh";
$obj->cat_hung=0;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;
};
// an_phu_tinh_can($can_nam,$obj_sao,$obj_ngu_hanh);
?>