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