var du_lieu_la_so = {
    Name: "Doe",
    Gioitinh: 'Nam',
    Am_Lich: {
        nam_al: 1990,
        thang_al: 4,
        ngay_al: 20,
        gio_al: 2,
    },
    Duong_Lich: {
        namdl: 1990,
        thangdl: 4,
        ngaydl: 20,
        giodl: 2,
    }
};

function take_input() { //lấy tên input nhập vào
    du_lieu_la_so.Name = document.getElementById('id_name').value;
    if (du_lieu_la_so.Name == null || du_lieu_la_so.Name == "") {
        alert('Không được để trống');
        return false;
    }
    if (document.getElementById('id_am_duong_lich').checked) { //Kiểm tra xem dương hay âm lịch
        du_lieu_la_so.Duong_Lich.namdl = parseInt(document.getElementById('id_nam_dl').value);
        du_lieu_la_so.Duong_Lich.thangdl = parseInt(document.getElementById('id_thang_dl').value);
        du_lieu_la_so.Duong_Lich.ngaydl = parseInt(document.getElementById('id_ngay_dl').value);
        du_lieu_la_so.Duong_Lich.giodl = parseInt(document.getElementById('id_gio_dl').value);

        //convert sang âm lịch
        let lunar = convertSolar2Lunar(du_lieu_la_so.Duong_Lich.ngaydl, du_lieu_la_so.Duong_Lich.thangdl, du_lieu_la_so.Duong_Lich.namdl, 7);
        nhuan = lunar[3];

        du_lieu_la_so.Am_Lich.nam_al = lunar[2];
        du_lieu_la_so.Am_Lich.thang_al = lunar[1];
        du_lieu_la_so.Am_Lich.ngay_al = lunar[0];

    } else { // chưa tính Nhuận
        du_lieu_la_so.Am_Lich.nam_al = parseInt(document.getElementById('id_nam_al').value);
        du_lieu_la_so.Am_Lich.thang_al = parseInt(document.getElementById('id_thang_al').value);
        du_lieu_la_so.Am_Lich.ngay_al = parseInt(document.getElementById('id_ngay_al').value);
        du_lieu_la_so.Am_Lich.gio_al = parseInt(document.getElementById('id_gio_al').value);
        //convert sang dương lịch
        var
        let = convertLunar2Solar(du_lieu_la_so.Am_Lich.ngay_AL, du_lieu_la_so.Am_Lich.thang_AL, du_lieu_la_so.Am_Lich.nam_AL, 0, 7);
        du_lieu_la_so.Duong_Lich.ngaydl = solar[0];
        du_lieu_la_so.Duong_Lich.thangdl = solar[1];
        du_lieu_la_so.Duong_Lich.namdl = solar[2];


    }

    if (document.getElementById('id_nam_nu').checked) {
        du_lieu_la_so.Gioitinh = 'Nam';
    } else {
        du_lieu_la_so.Gioitinh = 'Nu';
    }
    return du_lieu_la_so;
}

function update_am_lich_from_duong_lich() {
    let update_nam_al = parseInt(document.getElementById('id_nam_dl').value);
    let update_thang_al = parseInt(document.getElementById('id_thang_dl').value);
    let update_ngay_al = parseInt(document.getElementById('id_ngay_dl').value);
    //convert về âm lịch
    let lunar = convertSolar2Lunar(update_ngay_al, update_thang_al, update_nam_al, 7);
    //selected Âm Lịch
    document.getElementById('id_ngay_al').value = lunar[0];
    document.getElementById('id_thang_al').value = lunar[1];
    document.getElementById('id_nam_al').value = lunar[2];
}
update_am_lich_from_duong_lich();

function update_duong_lich_from_am_lich() {
    let update_nam_dl = parseInt(document.getElementById('id_nam_al').value);
    let update_thang_dl = parseInt(document.getElementById('id_thang_al').value);
    let update_ngay_dl = parseInt(document.getElementById('id_ngay_al').value);
    //convert về dương lịch
    let solar = convertLunar2Solar(update_ngay_dl, update_thang_dl, update_nam_dl, 0, 7);
    //selected Dương Lịch
    document.getElementById('id_ngay_dl').value = solar[0];
    document.getElementById('id_thang_dl').value = solar[1];
    document.getElementById('id_nam_dl').value = solar[2];
}
update_duong_lich_from_am_lich();