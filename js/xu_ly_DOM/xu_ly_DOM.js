var du_lieu_la_so = {
    Name: "Doe",
    Gioitinh: 1,
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
    },
    Can_nam:3,
    Chi_nam:1
};

function addlist(txt, val, id) { //Tạo ra các giá trị cho list, với đầu vào là ID trong html của danh sách đó
    var option = document.createElement("option"); //Tạo ra 1 thẻ option
    option.text = txt; //Hiện thị giá trị cho người dùng nhìn thấy
    option.id = val; //Hiển thị id
    option.value = val; //Hiển thị  máy hiểu
    //option.selected;
    try { // for IE earlier than version 8
        document.getElementById(id).add(option); //lấy ra id của thẻ hiện tại và add thêm thẻ option vào sau thẻ đó
    } catch (e) {
        document.getElementById(id).add(option, null);
        alert("FUck");
    };

}

//Dương Lịch
for (var i = 1800; i < 2080; ++i)
    addlist(i, i, "id_nam_dl");
// for (var i = 1800; i < 2080; ++i)
//     addlist(i, i, "ID_NAMXEM");
for (var i = 1; i < 13; ++i)
    addlist(i, i, "id_thang_dl");
// for (var i = 1; i < 13; ++i)
//     addlist(i, i, "ID_THANGXEM");
for (var i = 1; i < 32; ++i)
    addlist(i, i, "id_ngay_dl");

// for (var i = 1; i < 32; ++i)
//     addlist(i, i, "ID_NGAYXEM");

//Âm Lịch
for (var i = 1800; i < 2080; ++i)
    addlist(i, i, "id_nam_al");
for (var i = 1; i < 32; ++i)
    addlist(i, i, "id_ngay_al");
for (var i = 1; i < 13; ++i)
    addlist(i, i, "id_thang_al");

function ShowHide_Duong_Am_Lich() {
    document.getElementById('id_lich_0').style.display = 'block';
    document.getElementById('id_lich_1').style.display = 'block';
    if (document.getElementById('id_am_duong_lich').checked)

    {
        document.getElementById('id_lich_1').style.display = 'block'; //Hiện Dương Lịch

    } else {
        document.getElementById('id_lich_0').style.display = 'block'; //Hiện âm lịch

    }

}
ShowHide_Duong_Am_Lich();

document.getElementById('id_name').value = "ansao.zz.mu";
// document.getElementById('id_nam_nu').value = 1;
document.getElementById('id_ngay_dl').value = 11;
document.getElementById('id_thang_dl').value = 4;
document.getElementById('id_nam_dl').value = 1990;