	var laso;
	


var ftutru=new Array(6);
for (var i=1;i<6;i++) 
{ ftutru[i]=new Array(20);
for (var j=1;j<10;j++) 
	ftutru[i][j]=0;
}	

var tru = new Array("Năm", "Tháng", "Ngày", "Giờ");
var nguhanh = new Array("Mộc", "Hỏa", "Thổ", "Kim", "Thủy");
var dd = 1500;
 var lineskip = 22;
var myColor = ['green', 'red', 'yellow', 'grey', 'black'];
var ts = new Array();
ts[1] = "T. Sinh";
ts[2] = "Mộc Dục";
ts[3] = "Quan Đới";
ts[4] = "L. Quan";
ts[5] = "Đế V.";
ts[6] = "Suy";
ts[7] = "Bệnh";
ts[8] = "Tử";
ts[9] = "Mộ";
ts[10] = "Tuyệt";
ts[11] = "Thai";
ts[12] = "Dưỡng";

var PI = Math.PI;

var xemnhuan;
var trinhan = 1;

var menh = 1;
var l = 17;

var saothem;
var vitrithem;
var translatePos;
var saothem1;
var remember;
var vitrithem1;
var saothem2;
var vitrithem2;
var saothem3;
var vitrithem3;
// Thang.le
// Date: 17/12/2012
// Function convert year to name year(lunar)

var loc, ky;
var image4me;
//=========MAIN PROGRAM


var chi = new Array();
chi[1] = "Tý";
chi[2] = "Sửu";
chi[3] = "Dần";
chi[4] = "Mão";
chi[5] = "Thìn";
chi[6] = "Tỵ";
chi[7] = "Ngọ";
chi[8] = "Mùi";
chi[9] = "Thân";
chi[10] = "Dậu";
chi[11] = "Tuất";
chi[12] = "Hợi";
chi[0] = "Hợi";
var can = new Array();
can[1] = "Giáp";
can[2] = "Ất";
can[3] = "Bính";
can[4] = "Đinh";
can[5] = "Mậu";
can[6] = "Kỷ";
can[7] = "Canh";
can[8] = "Tân";
can[9] = "Nhâm";
can[10] = "Quý";
can[11] = "Giáp";
can[12] = "Ất";
can[0] = "Quý";

var pp = new Array(12);
for (i = 1; i < 13; i++)
    pp[i] = new Array(12);

var size = Math.min(screen.width / 1200, 1);

var tue = new Array();
tue[1] = "Thái Tuế";
tue[2] = "Hối Khí ";
tue[3] = "Tang Môn";
tue[4] = "Thiếu Âm";
tue[5] = "Quan Phù";
tue[6] = "Tử Phù";
tue[7] = "Tuế Phá";
tue[8] = "Long Đức";
tue[9] = "Bạch Hổ";
tue[10] = "Thiên Đức";
tue[11] = "Điếu Khách";
tue[12] = "Trực Phù";

var sizesize;

var id_thaitue = 1;
var id_tapdieu = 1;
var id_tuongtinh = 1;
var ID_LUUNHAT = 1;
var ID_LUUTHOI = 1;
var id_luunien = 0;
var id_luunguyet = 0;
var id_luudaivan = 0;

var temppp;
var id_phieuphieu = 0;
var id_vdttl = 0;
var id_vdttlhl = 0;
var ID_VEPHIEUPHIEU;
var id_diaban = 0;

var id_phieuphieuvan = 0;

var m;
var mm;
var dd;
var y;
var yy;
var a;
var muigio = 7;
var jd;

var phiky = new Array();
var philoc = new Array();
var ctieuvan = new Array();
var chitieuvan = new Array();
var timeZone = 7;
var nx;

var phutxem;

var cantang = new Array(12);

for (var i = 1; i <= 12; i++)
    cantang[i] = new Array(3);

for (var i = 1; i <= 12; i++)
    for (var j = 0; j <= 3; j++)
        cantang[i][j] = 0;

cantang[1][0] = 1;
cantang[1][1] = 10;
cantang[10][0] = 1;
cantang[10][1] = 8;

cantang[4][0] = 1;
cantang[4][1] = 2;
cantang[7][0] = 2;
cantang[7][1] = 4;
cantang[7][2] = 6;

cantang[2][0] = 3;
cantang[2][1] = 6;
cantang[2][3] = 8;
cantang[2][2] = 10;

cantang[3][0] = 3;
cantang[3][1] = 1;
cantang[3][3] = 3;
cantang[3][2] = 5;

cantang[5][0] = 3;
cantang[5][1] = 5;
cantang[5][3] = 10;
cantang[5][2] = 2;

cantang[6][0] = 3;
cantang[6][1] = 3;
cantang[6][3] = 5;
cantang[6][2] = 7;

cantang[8][0] = 3;
cantang[8][1] = 6;
cantang[8][3] = 2;
cantang[8][2] = 4;

cantang[9][0] = 3;
cantang[9][1] = 7;
cantang[9][3] = 9;
cantang[9][2] = 5;
cantang[11][0] = 3;
cantang[11][1] = 5;
cantang[11][3] = 4;
cantang[11][2] = 8;

cantang[12][0] = 2;
cantang[12][1] = 9;
cantang[12][2] = 1;



var tennguoi;
var gioitinh;
//DL
var ngaydl;
var thangdl;
var namdl;
var giodl;

//AL

var nam, gio;
var ngay;
var thang;
var gio;
var dvtutrunam;

var cannam, chinam, canthang, chithang, canngay, chingay, cangio, chigio;
var thangtk; //CAN CHI

var canthangtk, chithangtk;
//==========================năm xem===============================


var jd, jdxem;

//DL
var ngayxemdl;
var thangxemdl;
var namxemdl;
var gioxemdl;

//DL
// var ngayxemdl = parseInt(document.getElementById('ID_LUUNHATDL').value);
//  var thangxemdl = parseInt(document.getElementById('ID_THANGXEMDL').value);
//var namxemdl = parseInt(document.getElementById('ID_NAMXEM').value);
//var gioxemdl = parseInt(document.getElementById('ID_GIOXEM').value);


var phutdl;

//AL

var namxem, gioxem;
var thangxem;
var ngayxem;
var nhuan, nhuanxem;
var thu, thuxem;
//CAN CHI

var cannamxem, chinamxem, canthangxem, chithangxem, canngayxem, chingayxem, cangioxem, chigioxem;
var thangxemtk; //CAN CHI

var canthangxemtk, chithangxemtk;
var canthai;
var chithai;

var acan = new Array();

var achi = new Array();