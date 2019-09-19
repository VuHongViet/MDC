<?php
{






// 1 - Tử vi
$obj= new Sao("Tử Vi",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "bac_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = $vi_tri_tu_vi;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Liêm Trinh",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri = $vi_tri_liem_trinh;
$obj_sao[]=clone $obj;


// 
$obj = new Sao("Thiên Đồng",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = $vi_tri_thien_dong;
$obj_sao[]=clone $obj;



//
$obj = new Sao("Vũ Khúc",$obj_ngu_hanh[4]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = $vi_tri_vu_khuc;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thái Dương",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "trung_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = $vi_tri_thai_duong;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Cơ",$obj_ngu_hanh[1]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "nam_dau";
$obj->vi_tri = $vi_tri_thien_co;
$obj->loai="chinh_tinh";
$obj_sao[]=clone $obj;


// 
$obj = new Sao("Thiên Phủ",$obj_ngu_hanh[1]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri =$vi_tri_thien_phu;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thái Âm",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri =$vi_tri_thai_am;
$obj->loai="chinh_tinh";
$obj_sao[]=clone $obj;



// 
$obj = new Sao("Tham Lang",$obj_ngu_hanh[1]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri =$vi_tri_tham_lang;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Cự Môn",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri =$vi_tri_cu_mon;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Tướng",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "nam_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = $vi_tri_thien_tuong;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Lương",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = $vi_tri_thien_luong;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thất Sát",$obj_ngu_hanh[4]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "nam_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = $vi_tri_that_sat;
$obj_sao[]=clone $obj;
// 

$obj = new Sao("Phá Quân",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->loai="chinh_tinh";
$obj->vi_tri = $vi_tri_pha_quan;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thái Tuế",$obj_ngu_hanh[1]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_thai_tue;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Lộc Tồn",$obj_ngu_hanh[3]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri = $vi_tri_loc_ton;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Lực Sỹ",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_luc_sy;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thanh Long",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_thanh_long;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Tiểu Hào",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_tieu_hao;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Tướng Quân",$obj_ngu_hanh[1]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_tuong_quan;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Tấu Thư",$obj_ngu_hanh[4]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_tau_thu;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Phi Liêm",$obj_ngu_hanh[4]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_phi_liem;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Hỷ Thần",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_hy_than;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Bệnh Phù",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_benh_phu;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Đại Hao",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_dai_hao;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Phục Binh",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_phuc_binh;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Quan Phù",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_quan_phu;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Tràng Sinh",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_trang_sinh;
$obj_sao[]=clone $obj;


// 
$obj = new Sao("Mộc Dục",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_moc_duc;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Quan Đới",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_quan_doi;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Lâm Quan",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_lam_quan;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Đế Vương",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_de_vuong;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Suy",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_suy;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Bệnh",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_benh;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Tử",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_tu;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Mộ",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_mo;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Tuyệt",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_tuyet;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thai",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_thai;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Dưỡng",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_duong;
$obj_sao[]=clone $obj;


// 
$obj = new Sao("Kình Dương",$obj_ngu_hanh[4]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri= $vi_tri_kinh_duong;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Đà La",$obj_ngu_hanh[4]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri= $vi_tri_da_la;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Hỏa Tinh",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->vi_tri = $vi_tri_hoa_tinh;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Linh Tinh",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->vi_tri = $vi_tri_linh_tinh;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Địa Không",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri = $vi_tri_dia_khong;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Địa Kiếp",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri = $vi_tri_dia_kiep;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Tả Phụ",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri = $vi_tri_ta_phu;
$obj_sao[]=clone $obj;

//  
$obj = new Sao("Hữu Bật",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri = $vi_tri_huu_bat;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Văn Xương",$obj_ngu_hanh[4]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri = $vi_tri_van_xuong;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Văn Khúc",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "bac_dau";
$obj->vi_tri = $vi_tri_van_khuc;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Long Trì",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_long_tri;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Phượng Các",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_phuong_cac;
$obj_sao[]=clone $obj;



// 
$obj = new Sao("Thiên Khôi",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "nam_dau";
$obj->vi_tri = $vi_tri_thien_khoi;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Việt",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj->ten_nam_bac = "nam_dau";
$obj->vi_tri = $vi_tri_thien_viet;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thiên Khốc",$obj_ngu_hanh[4]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_khoc;
$obj_sao[]=clone $obj;


//
$obj = new Sao("Thiên Hư",$obj_ngu_hanh[3]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_thien_hu;
$obj_sao[]=clone $obj;


//
$obj = new Sao("Tam Thai",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_tam_thai;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Bát Tọa",$obj_ngu_hanh[3]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_bat_toa;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Ân Quang",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_an_quang;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Quý",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_quy;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thiên Đức",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_duc;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Nguyệt Đức",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_nguyet_duc;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thiên Hình",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_hinh;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thiên Riêu",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_rieu;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thiên Y",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_y;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Hồng Loan",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_hong_loan;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Hỷ",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_hy;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Quốc Ấn",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_quoc_an;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Đường Phù",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_duong_phu;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Giải",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_giai;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Địa Giải",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_dia_giai;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Giải Thần",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_giai_than;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thai Phụ",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thai_phu ;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Phong Cáo",$obj_ngu_hanh[3]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_phong_cao ;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Tài",$obj_ngu_hanh[1]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_thien_tai ;
$obj_sao[]=clone $obj;
//
$obj = new Sao("Thiên Thọ",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_tho;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thiên Thương",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_thuong;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thiên Sứ",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_su;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thiên La",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = 3;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Địa Võng",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = 9;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Hóa Lộc",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_hoa_loc;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Hóa Quyền",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_hoa_quyen;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Hóa Khoa",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj->vi_tri = $vi_tri_hoa_khoa;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Hóa Kỵ",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_hoa_ky;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Quan",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_quan;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Thiên Phúc",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_thien_phuc;
$obj_sao[]=clone $obj;

// 
$obj = new Sao("Cô Thần",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_co_than;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Quả Tú",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_qua_tu;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Đào Hoa",$obj_ngu_hanh[5]);
$obj->am_duong_sao=1;
$obj->vi_tri = $vi_tri_dao_hoa;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Thiên Mã",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri = $vi_tri_thien_ma;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Kiếp Sát",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj->ten_nam_bac = "trung_dau";
$obj->vi_tri = $vi_tri_kiep_sat;
$obj_sao[]=clone $obj;

//
$obj = new Sao("Phá Toái",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj_sao[]=clone $obj;


// 33 - Thiên Hình
$obj = new Sao("Thiên Hình",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj_sao[]=clone $obj;
// 34 - Thiên Diêu
$obj = new Sao("Thiên Diêu",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj_sao[]=clone $obj;

// 37 - Âm Sát
$obj = new Sao("Âm Sát",$obj_ngu_hanh[5]);
$obj_sao[]=clone $obj;



// 44 - Giải Thần
$obj = new Sao("Giải Thần",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj_sao[]=clone $obj;


// 48 - Thiên Vu
$obj = new Sao("Thiên Vu",$obj_ngu_hanh[3]);
$obj->am_duong_sao=0;
$obj_sao[]=clone $obj;
// 49 - Thiên Nguyệt
$obj = new Sao("Thiên Nguyệt",$obj_ngu_hanh[3]);
$obj->am_duong_sao=0;
$obj_sao[]=clone $obj;

// 52 - Thiên Quan
$obj = new Sao("Thiên Quan",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj_sao[]=clone $obj;
// 53 - Thiên Phúc
$obj = new Sao("Thiên Phúc",$obj_ngu_hanh[3]);
$obj->am_duong_sao=1;
$obj_sao[]=clone $obj;


// 58 - Phi Liêm
$obj = new Sao("Phi Liêm",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj_sao[]=clone $obj;

// 60 - Thiên Không
$obj = new Sao("Thiên Không",$obj_ngu_hanh[2]);
$obj->am_duong_sao=1;
$obj_sao[]=clone $obj;
// 61 - Hoa Cái
$obj = new Sao("Hoa Cái",$obj_ngu_hanh[1]);
$obj->am_duong_sao=1;
$obj_sao[]=clone $obj;
// 62 - Hãm Trì
$obj = new Sao("Hãm Trì",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj_sao[]=clone $obj;

// 75 - Bác Sĩ
$obj = new Sao("Bác Sĩ",$obj_ngu_hanh[5]);
$obj->am_duong_sao=0;
$obj_sao[]=clone $obj;

// 87 - Tiệt Không
$obj = new Sao("Tiệt Không",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj_sao[]=clone $obj;
// 88 - Tuần Không
$obj = new Sao("Tuần Không",$obj_ngu_hanh[2]);
$obj->am_duong_sao=0;
$obj_sao[]=clone $obj;
// 89 - Mệnh Chủ
$obj = new Sao("Mệnh Chủ",$obj_ngu_hanh[2]);
$obj->ten_nam_bac="Bắc Đẩu";
$obj->nam_bac = 1;
$obj->am_duong_sao=0;
$obj_sao[]=clone $obj;
// 90 - Thân Chủ
$obj = new Sao("Thân Chủ",$obj_ngu_hanh[2]);
$obj->ten_nam_bac="Nam Đẩu";
$obj->nam_bac = 2;
$obj->am_duong_sao=0;
$obj_sao[]=clone $obj;

//echo json_encode($obj_sao);
}
?>
