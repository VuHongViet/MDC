<?php


function an_chinh_tinh($ngay,$cuc_so,&$obj_sao,&$obj_ngu_hanh){
	global $la_so_thien_ban;
	global $id_cuc;
	global $sign;
	global $id_menh_cung;
	global $chi_nam;
	global $id_than_cung;
$vi_tri_tu_vi_f = function() use($ngay,$cuc_so){
	$X = $cuc_so - $ngay % $cuc_so;
		if ($ngay % $cuc_so == 0)
			$X = 0;
		$Y = ($ngay + $X) / $cuc_so;
		$z;
		if ($X % 2 == 0)
			$z = $Y + $X;
		if ($X % 2 != 0)
			$z = $Y - $X;
		if ($z > 12)
			$z = $z - 12;
		if ($z < 1)
			$z = Check($z + 12);
		return $z;

};

 global $vi_tri_tu_vi;
$vi_tri_tu_vi = $vi_tri_tu_vi_f();

// 
$obj= new Sao("Tử Vi",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "bac_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = $vi_tri_tu_vi;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;

$obj_sao[]=clone $obj;

//
$obj = new Sao("Liêm Trinh",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri = Check($vi_tri_tu_vi+4);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Đồng",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = Check($vi_tri_tu_vi+7);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Vũ Khúc",$obj_ngu_hanh[4]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = Check($vi_tri_tu_vi+8);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thái Dương",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "trung_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = Check($vi_tri_tu_vi+9);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Cơ",$obj_ngu_hanh[1]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "nam_dau";
$obj->vi_tri = Check($vi_tri_tu_vi+10);
$obj->loai="chinh_tinh";
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// Thiên Phủ tinh hệ
$vi_tri_thien_phu_f = function () use($vi_tri_tu_vi){
	return Check(12-$vi_tri_tu_vi+2);	
	
};
global $vi_tri_thien_phu;
$vi_tri_thien_phu = $vi_tri_thien_phu_f();
// 
$obj = new Sao("Thiên Phủ",$obj_ngu_hanh[1]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri =$vi_tri_thien_phu;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thái Âm",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri =Check($vi_tri_thien_phu+1);
$obj->loai="chinh_tinh";
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Tham Lang",$obj_ngu_hanh[1]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri =Check($vi_tri_thien_phu+2);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Cự Môn",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = Check($vi_tri_thien_phu+3);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Tướng",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "nam_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = Check($vi_tri_thien_phu+4);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Lương",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = Check($vi_tri_thien_phu+5);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thất Sát",$obj_ngu_hanh[4]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "nam_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = Check($vi_tri_thien_phu+6);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Phá Quân",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = Check($vi_tri_thien_phu+9);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
 $trang_sinh = $id_cuc->id_ngu_hanh_don;
$vi_tri_trang_sinh = function () use ($trang_sinh){
	$vi_tri=[1=>10,1,7,4,7];

	return $vi_tri[$trang_sinh];
};
$vi_tri_trang_sinh = $vi_tri_trang_sinh();
// 
$obj = new Sao("Tràng Sinh",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_trang_sinh;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Mộc Dục",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_trang_sinh + $sign*1);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Quan Đới",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_trang_sinh + $sign*2);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Lâm Quan",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_trang_sinh + $sign*3);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Đế Vương",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_trang_sinh + $sign*4);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Suy",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_trang_sinh + $sign*5);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Bệnh",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_trang_sinh + $sign*6);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Tử",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_trang_sinh + $sign*7);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Mộ",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_trang_sinh + $sign*8);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Tuyệt",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_trang_sinh + $sign*9);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thai",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_trang_sinh + $sign*10);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Dưỡng",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = Check($vi_tri_trang_sinh + $sign*11);
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$vi_tri_thien_thuong = Check($id_menh_cung + 6 - 1);
$vi_tri_thien_su = Check($id_menh_cung + 8 - 1);

$obj = new Sao("Thiên Thương",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_thuong;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thiên Sứ",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_su;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;




//
$obj = new Sao("Thiên La",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = 3;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Địa Võng",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = 9;
$la_so_thien_ban->obj_cung_vi[$obj->vi_tri]->sao[]=$obj;
$obj_sao[]=clone $obj;


}

?>