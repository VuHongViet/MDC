$(document).ready(function() {
    $('#submit').on('submit', function() {
        //lấy tên input nhập vào
        du_lieu_la_so.Name = $('#id_name').val();
        if (du_lieu_la_so.Name == null || du_lieu_la_so.Name == "") {
            alert('Không được để trống');
        }
        //Kiểm tra xem dương hay âm lịch- Nếu là dương lịch
        if ($('#id_am_duong_lich').prop("checked")) {
            du_lieu_la_so.Duong_Lich.namdl = parseInt($('#id_nam_dl').val());
            du_lieu_la_so.Duong_Lich.thangdl = parseInt($('#id_thang_dl').val());
            du_lieu_la_so.Duong_Lich.ngaydl = parseInt($('#id_ngay_dl').val());
            du_lieu_la_so.Duong_Lich.giodl = parseInt($('#id_gio_dl').val());
            //convert sang âm lịch
            let lunar = convertSolar2Lunar(du_lieu_la_so.Duong_Lich.ngaydl, du_lieu_la_so.Duong_Lich.thangdl, du_lieu_la_so.Duong_Lich.namdl, 7);
            nhuan = lunar[3];
            // gán ngày âm lịch vừa convert cho object nhánh Âm Lịch
            du_lieu_la_so.Am_Lich.nam_al = lunar[2];
            du_lieu_la_so.Am_Lich.thang_al = lunar[1];
            du_lieu_la_so.Am_Lich.ngay_al = lunar[0];
            // Ngược lại nếu là âm lịch
        } else {
            du_lieu_la_so.Am_Lich.nam_al = parseInt($('#id_nam_al').val());
            du_lieu_la_so.Am_Lich.thang_al = parseInt($('#id_thang_al').val());
            du_lieu_la_so.Am_Lich.ngay_al = parseInt($('#id_ngay_al').val());
            du_lieu_la_so.Am_Lich.gio_al = parseInt($('#id_gio_al').val());
            //convert sang dương lịch
            let = convertLunar2Solar(du_lieu_la_so.Am_Lich.ngay_aL, du_lieu_la_so.Am_Lich.thang_aL, du_lieu_la_so.Am_Lich.nam_aL, 0, 7);
            du_lieu_la_so.Duong_Lich.ngaydl = solar[0];
            du_lieu_la_so.Duong_Lich.thangdl = solar[1];
            du_lieu_la_so.Duong_Lich.namdl = solar[2];
        }
        if ($('#id_nam_nu').prop("checked")) {
            du_lieu_la_so.Gioitinh = 1;
        } else {
            du_lieu_la_so.Gioitinh = 0;
        }
        var json = JSON.stringify(du_lieu_la_so);
        $('#json').val(json);
    })
})