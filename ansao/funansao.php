<?php
// Tử Vi tinh hệ
function sign( $can_nam,$gioi_tinh) {
      if ((($can_nam%2==1)&&($gioi_tinh==1))||(($can_nam%2==0)&&($gioi_tinh==0)))
	  {
		  $sign = 1;
	  }		  
	  else{ $sign = -1;}
	  return $sign;
}
$sign =  sign( $can_nam,$gioi_tinh);


$vi_tri_tu_vi = function() use($ngay,$cuc_so){
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
$vi_tri_tu_vi = $vi_tri_tu_vi();

//
$vi_tri_liem_trinh = function () use($vi_tri_tu_vi){
	return Check($vi_tri_tu_vi+4);
};
$vi_tri_liem_trinh = $vi_tri_liem_trinh();

//
$vi_tri_thien_dong = function () use($vi_tri_liem_trinh){
	return Check($vi_tri_liem_trinh+3);
};
 $vi_tri_thien_dong = $vi_tri_thien_dong();

//
$vi_tri_vu_khuc = function () use($vi_tri_thien_dong){
	return Check($vi_tri_thien_dong+1);
	
};
 $vi_tri_vu_khuc = $vi_tri_vu_khuc();

//
$vi_tri_thai_duong  = function () use($vi_tri_vu_khuc){
	return Check($vi_tri_vu_khuc+1);
	
};
$vi_tri_thai_duong = $vi_tri_thai_duong ();

//
$vi_tri_thien_co = function () use($vi_tri_thai_duong){
	return Check($vi_tri_thai_duong+2);
	
};
$vi_tri_thien_co = $vi_tri_thien_co();

//
// Thiên Phủ tinh hệ
$vi_tri_thien_phu = function () use($vi_tri_tu_vi){
	return Check(12-$vi_tri_tu_vi+2);	
	
};
$vi_tri_thien_phu = $vi_tri_thien_phu();

//
$vi_tri_thai_am = function () use($vi_tri_thien_phu){
	return Check($vi_tri_thien_phu+1);	
	
};
$vi_tri_thai_am = $vi_tri_thai_am();

//
$vi_tri_tham_lang= function () use ($vi_tri_thai_am){
	return Check($vi_tri_thai_am+1);
	
};
$vi_tri_tham_lang = $vi_tri_tham_lang();


//
$vi_tri_cu_mon = function () use ($vi_tri_tham_lang){
	return Check($vi_tri_tham_lang+1);
	
};
$vi_tri_cu_mon = $vi_tri_cu_mon();

//
$vi_tri_thien_tuong = function () use ($vi_tri_cu_mon){
	return Check($vi_tri_cu_mon+1);
	
};
$vi_tri_thien_tuong = $vi_tri_thien_tuong();

//
$vi_tri_thien_luong = function () use ($vi_tri_thien_tuong){
	return Check($vi_tri_thien_tuong+1);	
	
};
$vi_tri_thien_luong = $vi_tri_thien_luong();

//
$vi_tri_that_sat = function () use ($vi_tri_thien_luong){
	return Check($vi_tri_thien_luong+1);
	
};
$vi_tri_that_sat = $vi_tri_that_sat();

//
$vi_tri_pha_quan = function () use ($vi_tri_that_sat){
	return Check($vi_tri_that_sat+4);
	
};
$vi_tri_pha_quan = $vi_tri_pha_quan();


// // Thái Tuế tinh hệ
$vi_tri_thai_tue = function () use ($chi_nam){
	return Check($chi_nam-2);
	
};
$vi_tri_thai_tue = $vi_tri_thai_tue();

// Lộc Tồn 
$vi_tri_loc_ton = function  () use ($can_nam){
	$vi_tri=[1=>1,2,4,5,4,5,7,8,9,10];
	return $vi_tri[$can_nam];
};
$vi_tri_loc_ton = $vi_tri_loc_ton();

//
$vi_tri_luc_sy = function () use ($vi_tri_loc_ton,$sign){
	return Check($vi_tri_loc_ton+$sign);

};
$vi_tri_luc_sy = $vi_tri_luc_sy();

//
$vi_tri_thanh_long = function () use ($vi_tri_luc_sy,$sign){
	return Check($vi_tri_luc_sy+$sign);
	
};
$vi_tri_thanh_long = $vi_tri_thanh_long();

//
$vi_tri_tieu_hao = function () use ($vi_tri_thanh_long,$sign){
	return Check($vi_tri_thanh_long+$sign);
};
$vi_tri_tieu_hao = $vi_tri_tieu_hao();

//
$vi_tri_tuong_quan = function () use ($vi_tri_tieu_hao,$sign){
	return Check($vi_tri_tieu_hao+$sign);
};
$vi_tri_tuong_quan = $vi_tri_tuong_quan();

//
$vi_tri_tau_thu = function () use ($vi_tri_tuong_quan,$sign){
	return Check($vi_tri_tuong_quan+$sign);
};
$vi_tri_tau_thu = $vi_tri_tau_thu();

//
$vi_tri_phi_liem = function () use ($vi_tri_tau_thu,$sign){
	return Check($vi_tri_tau_thu+$sign);
};
$vi_tri_phi_liem = $vi_tri_phi_liem();

//
$vi_tri_hy_than = function () use ($vi_tri_phi_liem,$sign){
	return Check($vi_tri_phi_liem+$sign);
};
$vi_tri_hy_than = $vi_tri_hy_than();

//
$vi_tri_benh_phu = function () use ($vi_tri_hy_than,$sign){
	return Check($vi_tri_hy_than+$sign);
};
$vi_tri_benh_phu = $vi_tri_benh_phu();

//
$vi_tri_dai_hao = function () use ($vi_tri_benh_phu,$sign){
	return Check($vi_tri_benh_phu+$sign);
};
$vi_tri_dai_hao = $vi_tri_dai_hao();

//
$vi_tri_phuc_binh = function () use ($vi_tri_dai_hao,$sign){
	return Check($vi_tri_dai_hao+$sign);
};
$vi_tri_phuc_binh = $vi_tri_phuc_binh();

//
$vi_tri_quan_phu = function () use ($vi_tri_phuc_binh,$sign){
	return Check($vi_tri_phuc_binh+$sign);
};
$vi_tri_quan_phu = $vi_tri_quan_phu();

// // Tràng Sinh tinh hệ

$trang_sinh = $id_cuc->id_ngu_hanh_don;
$vi_tri_trang_sinh = function () use ($trang_sinh){
	$vi_tri=[1=>10,1,7,4,7];

	return $vi_tri[$trang_sinh];
};
$vi_tri_trang_sinh = $vi_tri_trang_sinh();

//
$vi_tri_moc_duc  = function () use ($vi_tri_trang_sinh,$sign){
	return Check($vi_tri_trang_sinh + $sign);
};
$vi_tri_moc_duc = $vi_tri_moc_duc();

//
$vi_tri_quan_doi = function () use ($vi_tri_moc_duc,$sign){
	return Check($vi_tri_moc_duc + $sign);
};
$vi_tri_quan_doi = $vi_tri_quan_doi();

//
$vi_tri_lam_quan = function () use ($vi_tri_quan_doi,$sign){
	return Check($vi_tri_quan_doi + $sign);
};
$vi_tri_lam_quan = $vi_tri_lam_quan();

//
$vi_tri_de_vuong = function () use ($vi_tri_lam_quan,$sign){
	return Check($vi_tri_lam_quan + $sign);
};
$vi_tri_de_vuong = $vi_tri_de_vuong();

//
$vi_tri_suy = function () use ($vi_tri_de_vuong,$sign){
	return Check($vi_tri_de_vuong + $sign);
};
$vi_tri_suy = $vi_tri_suy();

//
$vi_tri_benh = function () use ($vi_tri_suy,$sign){
	return Check($vi_tri_suy + $sign);
};
$vi_tri_benh = $vi_tri_benh();

//
$vi_tri_tu = function () use ($vi_tri_benh,$sign){
	return Check($vi_tri_benh + $sign);
};
$vi_tri_tu = $vi_tri_tu();

//
$vi_tri_mo = function () use ($vi_tri_tu,$sign){
	return Check($vi_tri_tu + $sign);
};
$vi_tri_mo = $vi_tri_mo();

//
$vi_tri_tuyet = function () use ($vi_tri_mo,$sign){
	return Check($vi_tri_mo + $sign);
};
$vi_tri_tuyet = $vi_tri_tuyet();

//
$vi_tri_thai = function () use ($vi_tri_tuyet,$sign){
	return Check($vi_tri_tuyet + $sign);
};
$vi_tri_thai = $vi_tri_thai();

//
$vi_tri_duong = function () use ($vi_tri_thai,$sign){
	return Check($vi_tri_thai + $sign);
};
$vi_tri_duong = $vi_tri_duong();

//
$vi_tri_kinh_duong = function () use ($vi_tri_loc_ton){
	return Check($vi_tri_loc_ton+1);
};
$vi_tri_kinh_duong = $vi_tri_kinh_duong(); 

//
$vi_tri_da_la = function () use ($vi_tri_loc_ton){
	return Check($vi_tri_loc_ton-1);
};
$vi_tri_da_la = $vi_tri_da_la(); 

// 
$vi_tri_dia_khong = function () use ($gio){
	return Check($gio+3);
};
$vi_tri_dia_khong = $vi_tri_dia_khong();

//
$vi_tri_dia_kiep = function () use ($gio){
	return Check($gio-3);
};
$vi_tri_dia_kiep = $vi_tri_dia_kiep();

//
$vi_tri_hoa_tinh = function () use ($chi_nam,$gio,$sign){
	$hoa_tinh=[1=>1,2,12,1,1,2,12,1,1,2,12,1];
	return Check($gio*$sign+$hoa_tinh[$chi_nam]-1);
};
$vi_tri_hoa_tinh  = $vi_tri_hoa_tinh();

//
$vi_tri_linh_tinh = function () use ($chi_nam,$gio,$sign){
	$linh_tinh=[1=>9,9,2,9,9,9,2,9,9,9,2,9];
	return Check(-$gio*$sign*(-1)+$linh_tinh[$chi_nam]-1);
};
$vi_tri_linh_tinh  = $vi_tri_linh_tinh();

//
$vi_tri_ta_phu = function () use ($thang){
	return Check($thang + 3 -1);
};
$vi_tri_ta_phu = $vi_tri_ta_phu();  

//
$vi_tri_huu_bat = function () use ($thang){
	return Check(-$thang + 9 +1);
};
$vi_tri_huu_bat = $vi_tri_huu_bat(); 

//
$vi_tri_van_xuong = function () use ($gio){
	return Check(-$gio + 9 + 1);
};
$vi_tri_van_xuong = $vi_tri_van_xuong();

//
$vi_tri_van_khuc = function () use ($gio){
	return Check($gio + 3 - 1);
};
$vi_tri_van_khuc = $vi_tri_van_khuc();

//
$vi_tri_long_tri = function () use ($chi_nam){
	return Check($chi_nam + 3 -1);
};
$vi_tri_long_tri = $vi_tri_long_tri();

//
$vi_tri_phuong_cac = function () use ($chi_nam){
	return Check(-$chi_nam + 9 + 1);
};
$vi_tri_phuong_cac = $vi_tri_phuong_cac();

// kiem tra lai cach an thie khoi thien viet
$vi_tri_thien_khoi = function () use  ($can_nam){
	$thien_khoi = [1=>12,11,10,10,5,11,5,5,2,2];
	return $thien_khoi[$can_nam];
};
$vi_tri_thien_khoi = $vi_tri_thien_khoi();

//
$vi_tri_thien_viet = function () use  ($can_nam){
	$thien_viet = [1=>6,7,8,8,1,1,6,7,4,4];
	return $thien_viet[$can_nam];
};
$vi_tri_thien_viet = $vi_tri_thien_viet();

//
$vi_tri_thien_khoc = function () use ($chi_nam){
	return Check( - $chi_nam + 5 + 1);
	
};
$vi_tri_thien_khoc = $vi_tri_thien_khoc();

//
$vi_tri_thien_hu = function () use ($chi_nam){
	return Check(  $chi_nam + 5  - 1);
	
};
$vi_tri_thien_hu = $vi_tri_thien_hu();

//
$vi_tri_tam_thai = function () use ($vi_tri_ta_phu,$ngay){
	return Check($vi_tri_ta_phu + $ngay - 1);
};
$vi_tri_tam_thai = $vi_tri_tam_thai();

//
$vi_tri_bat_toa = function () use ($vi_tri_huu_bat,$ngay){
	return Check($vi_tri_huu_bat - $ngay + 1);
};
$vi_tri_bat_toa = $vi_tri_bat_toa();

//
$vi_tri_an_quang = function () use ($vi_tri_van_xuong,$ngay){
	return Check($vi_tri_van_xuong + $ngay - 2);
};
$vi_tri_an_quang = $vi_tri_an_quang();

//
$vi_tri_thien_quy = function () use ($vi_tri_van_khuc,$ngay){
	return Check($vi_tri_van_khuc - $ngay + 2);
};
$vi_tri_thien_quy = $vi_tri_thien_quy();

//
$vi_tri_thien_duc = function () use ($chi_nam){
	return Check( 8 + $chi_nam -1);
};
$vi_tri_thien_duc = $vi_tri_thien_duc();

//
$vi_tri_nguyet_duc = function () use ($chi_nam){
	return Check( 4 - $chi_nam + 1);
};
$vi_tri_nguyet_duc = $vi_tri_nguyet_duc();

//
$vi_tri_thien_hinh = function () use ($thang){
	return Check( 8 + $thang - 1);
};
$vi_tri_thien_hinh = $vi_tri_thien_hinh();

//
$vi_tri_thien_rieu = function () use ($thang){
	return Check(11 + $thang -1);
};
$vi_tri_thien_rieu = $vi_tri_thien_rieu(); 
$vi_tri_thien_y = $vi_tri_thien_rieu;

//
$vi_tri_hong_loan = function () use ($chi_nam){
	return Check(2 - $chi_nam + 1);
};
$vi_tri_hong_loan = $vi_tri_hong_loan();
$vi_tri_thien_hy = Check(12-$vi_tri_hong_loan+2);

//
$vi_tri_quoc_an = function () use ($vi_tri_loc_ton){
	return Check($vi_tri_loc_ton + 9 - 1);
};
$vi_tri_quoc_an = $vi_tri_quoc_an(); 

//
$vi_tri_duong_phu = function () use ($vi_tri_loc_ton){
	return Check($vi_tri_loc_ton - 8 + 1);
};
$vi_tri_duong_phu = $vi_tri_duong_phu(); 

//
$vi_tri_thien_giai = function () use ($thang){
	return Check(7 + $thang - 1 ); 
};
$vi_tri_thien_giai = $vi_tri_thien_giai();

//
$vi_tri_dia_giai = function () use ($thang){
	return Check(6 + $thang - 1 ); 
};
$vi_tri_dia_giai = $vi_tri_dia_giai();
$vi_tri_giai_than = $vi_tri_phuong_cac;

// 
$vi_tri_thai_phu = function () use ($gio){
	return (5 + $gio -1);
};
$vi_tri_thai_phu = $vi_tri_thai_phu();

//
// 
$vi_tri_phong_cao = function () use ($gio){
	return (1 + $gio -1);
};
$vi_tri_phong_cao = $vi_tri_phong_cao();

//
$vi_tri_thien_tai = function () use($id_menh_cung,$chi_nam){
	return Check($id_menh_cung + $chi_nam -1);
	
};
$vi_tri_thien_tai = $vi_tri_thien_tai();

//
$vi_tri_thien_tho = function () use($id_than_cung,$chi_nam){
	return Check($id_than_cung + $chi_nam -1);
	
};
$vi_tri_thien_tho = $vi_tri_thien_tho();

//
$vi_tri_thien_thuong = Check($id_menh_cung + 6 - 1);
$vi_tri_thien_su = Check($id_menh_cung + 8 - 1);

//
{
$loc = [1=>$vi_tri_liem_trinh,$vi_tri_thien_co,$vi_tri_thien_dong,
			$vi_tri_thai_am.$vi_tri_tham_lang,$vi_tri_vu_khuc,
			$vi_tri_thai_duong,$vi_tri_cu_mon,$vi_tri_thien_luong,$vi_tri_pha_quan];
}
$vi_tri_hoa_loc = function () use ($loc,$can_nam){
	return  $loc[$can_nam];
	
};
$vi_tri_hoa_loc = $vi_tri_hoa_loc();

//
{
$quyen = [1=>$vi_tri_pha_quan,$vi_tri_thien_luong,$vi_tri_thien_co,$vi_tri_thien_dong,
			$vi_tri_thai_am,$vi_tri_tham_lang,$vi_tri_vu_khuc,$vi_tri_thien_luong,
			$vi_tri_tu_vi,$vi_tri_cu_mon];
}
$vi_tri_hoa_quyen = function () use ($quyen,$can_nam){
	return  $quyen[$can_nam];
	
};
$vi_tri_hoa_quyen = $vi_tri_hoa_quyen();
//
{
$khoa = [1=>$vi_tri_vu_khuc,$vi_tri_tu_vi,$vi_tri_van_xuong,$vi_tri_thien_co,
			$vi_tri_huu_bat,$vi_tri_thien_luong,$vi_tri_thai_am,$vi_tri_van_khuc,
			$vi_tri_ta_phu,$vi_tri_thai_am];	
}
$vi_tri_hoa_khoa = function () use ($khoa,$can_nam){
	return  $khoa[$can_nam];
	
};
$vi_tri_hoa_khoa = $vi_tri_hoa_khoa();
//
{
$ky=[1=>$vi_tri_thai_duong,$vi_tri_thai_am,$vi_tri_liem_trinh,$vi_tri_cu_mon,
		$vi_tri_thien_co,$vi_tri_van_khuc,$vi_tri_thien_dong,$vi_tri_van_xuong,
		$vi_tri_van_khuc,$vi_tri_tham_lang];
}
$vi_tri_hoa_ky = function () use ($ky,$can_nam){
	return  $ky[$can_nam];
	
};
$vi_tri_hoa_ky = $vi_tri_hoa_ky();

//
$vi_tri_thien_quan = function () use ($can_nam){
	$thien_quan = [1=>6,3,4,1,2,8,10,8,9,5];
	return $thien_quan[$can_nam];
};
$vi_tri_thien_quan= $vi_tri_thien_quan();

//
$vi_tri_thien_phuc = function () use ($can_nam){
	$thien_phuc = [1=>8,7,11,10,2,1,5,4,5,4];
	return $thien_phuc[$can_nam];
};
$vi_tri_thien_phuc = $vi_tri_thien_phuc();

//
$vi_tri_co_than = function () use ($chi_nam){
	$co_than =[1=>1,1,4,4,4,7,7,7,10,10,10,1];
	return $co_than[$chi_nam];
};
$vi_tri_co_than = $vi_tri_co_than();

//
$vi_tri_qua_tu = function () use ($chi_nam){
	$qua_tu =[1=>9,9,12,12,12,3,3,3,6,6,6,9];
	return $qua_tu[$chi_nam];
};
$vi_tri_qua_tu = $vi_tri_qua_tu();

//
$vi_tri_dao_hoa = function () use($chi_nam){
	$dao_hoa = [1=>8,5,2,11,8,5,2,11,8,5,2,11];
	return $dao_hoa[$chi_nam];
};
$vi_tri_dao_hoa = $vi_tri_dao_hoa();

//
$vi_tri_thien_ma = function () use ($chi_nam){
	$thien_ma = [1=>1,10,7,4,1,10,7,4,1,10,7,10];
	return $thien_ma[$chi_nam];
};
$vi_tri_thien_ma = $vi_tri_thien_ma();

//
$vi_tri_kiep_sat = function () use ($chi_nam){
	$kiep_sat = [1=>4,1,10,7,4,1,10,7,4,1,10,7];
	return $kiep_sat[$chi_nam];
	
};
$vi_tri_kiep_sat = $vi_tri_kiep_sat();






  
 


?>