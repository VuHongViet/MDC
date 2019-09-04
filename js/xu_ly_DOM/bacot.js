var myColor = ['green', 'red', 'yellow', 'grey', 'black'];
	function vetuhoa(x, y, r) {
			var c = document.getElementById("myCanvas");
			var context = c.getContext("2d");
			context.lineWidth = 1;
			context.closePath();
		//	context.beginPath();
			//context.moveTo(x - r, y);
			//context.lineTo(x + r, y);
		//	context.moveTo(x, y - r);
		//	context.lineTo(x, y + r);
		//	context.moveTo(x - r * 0.73, y - r * 0.73);
		//	context.lineTo(x + r * 0.73, y + r * 0.73);
		//	context.moveTo(x - r * 0.73, y + r * 0.73);
		//	context.lineTo(x + r * 0.73, y - r * 0.73);
		//	context.fill();
		}
		
		function timcuc(cancung, chicung) {var a;var b;
			if (chicung == 1 || chicung == 7 || chicung == 2 || chicung == 8)
				a = 0;
			if (chicung == 11 || chicung == 12 || chicung == 5 || chicung == 6)
				a = 2;
			if (chicung == 3 || chicung == 4 || chicung == 9 || chicung == 10)
				a = 1;
			if (cancung == 1 || cancung == 2)
				b = 1;
			if (cancung == 3 || cancung == 4)
				b = 2;
			if (cancung == 5 || cancung == 6)
				b = 3;
			if (cancung == 7 || cancung == 8)
				b = 4;
			if (cancung == 9 || cancung == 10)
				b = 5;
			var ihanh;
			var cuc;
			ihanh = a + b;
			if (a + b > 5)
				ihanh = a + b - 5;
			if (ihanh == 1)
				cuc = 4;
			if (ihanh == 2)
				cuc = 2;
			if (ihanh == 3)
				cuc = 6;
			if (ihanh == 4)
				cuc = 5;
			if (ihanh == 5)
				cuc = 3;
			return cuc;
		}
	var cung = new Array();
	
			cung[1] = "MỆNH";
			cung[2] = "PHỤ MẪU";
		cung[3] = "PHÚC ĐỨC";
		cung[4] = "ĐIỀN TRẠCH";
		cung[5] = "QUAN LỘC";
		cung[6] = "GIAO HỮU";
		cung[7] = "THIÊN DI";
		cung[8] = "TẬT ÁCH";
		cung[9] = "TÀI BẠCH";
		cung[10] = "TỬ NỮ";
		cung[11] = "PHU THÊ";
		cung[12] = "HUYNH ĐỆ";

var pcung=["","mệnh","phụ","phúc","điền","quan","nô","di","tật","tài","tử","phu","bào"];
function nhapdulieutuvi() {
	var doc=document;
	var list = doc.getElementById('ID_size');
	sizesize = parseInt(doc.getElementById('ID_size').value);
	saothem = doc.getElementById('ID_SAO').value;
	vitrithem = parseInt(doc.getElementById('ID_VITRI').value);
	saothem1 = doc.getElementById('ID_SAO1').value;
	vitrithem1 = parseInt(doc.getElementById('ID_VITRI1').value);
	saothem2 = doc.getElementById('ID_SAO2').value;
	vitrithem2 = parseInt(doc.getElementById('ID_VITRI2').value);
	saothem3 = doc.getElementById('ID_SAO3').value;
	vitrithem3 = parseInt(doc.getElementById('ID_VITRI3').value);
	id_thaitue = 1;
	id_tapdieu = 1;
	id_tuongtinh = 1;
	ID_LUUNHAT = 1;
	ID_LUUTHOI = 1;
	id_luunien = 0;
	id_luunguyet = 0;
	id_luudaivan = 0;
	temppp;
	id_phieuphieu = 0;
	id_vdttl = 0;
	id_vdttlhl = 0;
	ID_VEPHIEUPHIEU;
	id_phieuphieuvan = 0;
	if (doc.getElementById('ID_LUUDAIVAN').checked)
		id_luudaivan = 1;
	if (doc.getElementById('ID_LUUNIEN').checked)
		id_luunien = 1;
	if (doc.getElementById('ID_LUUNGUYET').checked)
		id_luunguyet = 1;
	if (!doc.getElementById('ID_TAPDIEU').checked)
		id_tapdieu = 0;
	if (!doc.getElementById('ID_THAITUE').checked)
		id_thaitue = 0;
	if (!doc.getElementById('ID_TUONGTINH').checked)
		id_tuongtinh = 0;
	id_vdttl = parseInt(doc.getElementById('ID_VDTTL').value);
	id_vdttlhl = parseInt(doc.getElementById('ID_VDTTLHL').value);
	if (!doc.getElementById('ID_LUUTHOI').checked)
		ID_LUUTHOI = 0;
	if (!doc.getElementById('ID_LUUNHAT').checked)
		ID_LUUNHAT = 0;
	else
		ID_LUUNHAT = 1;
	ID_VEPHIEUPHIEU = 1;
	if (!doc.getElementById('ID_VEPHIEUPHIEU').checked)
		ID_VEPHIEUPHIEU = 0;
	if (doc.getElementById('ID_PHIEUPHIEU').checked)
		id_phieuphieu = 1;
}


var nh = new Array(11);
for (i = 1; i < 13; i++)
    nh[i] = new Array(12);

nh[1][1] = nh[2][2] = "Hải Trung Kim";
nh[3][3] = nh[4][4] = "Lư Trung Hỏa";
nh[5][5] = nh[6][6] = "Đại Lâm Mộc";
nh[7][7] = nh[8][8] = "Lộ Bàng Thổ";
nh[9][9] = nh[10][10] = "Kiếm Phong Kim";
nh[1][11] = nh[2][12] = "Sơn Đầu Hỏa";
nh[3][1] = nh[4][2] = "Giản Hạ Thủy";
nh[5][3] = nh[6][4] = "Thành Đầu Thổ";
nh[7][5] = nh[8][6] = "Bạch Lạp Kim";
nh[9][7] = nh[10][8] = "Dương Liễu Mộc";
nh[1][9] = nh[2][10] = "Tinh Tuyền Thủy";
nh[3][11] = nh[4][12] = "Ốc Thượng Thổ";
nh[5][1] = nh[6][2] = "Tích Lịch Hỏa";
nh[7][3] = nh[8][4] = "Tùng Bách Mộc";
nh[9][5] = nh[10][6] = "Trường Lưu Thủy";
nh[1][7] = nh[2][8] = "Sa Trung Kim";
nh[3][9] = nh[4][10] = "Sơn Hạ Hỏa";
nh[5][11] = nh[6][12] = "Bình Địa Mộc";
nh[7][1] = nh[8][2] = "Bích Thượng Thổ";
nh[9][3] = nh[10][4] = "Kim Bá Kim";
nh[1][5] = nh[2][6] = "Phú Đăng Hỏa";
nh[3][7] = nh[4][8] = "Thiên Hà Thủy";
nh[5][9] = nh[6][10] = "Đại Dịch Thổ";
nh[7][11] = nh[8][12] = "Thoa Xuyến Kim";
nh[9][1] = nh[10][2] = "Tang Đố Mộc";
nh[1][3] = nh[2][4] = "Đại Khuê Thủy";
nh[3][5] = nh[4][6] = "Sa Trung Thổ";
nh[5][7] = nh[6][8] = "Thiên Thượng Hỏa";
nh[7][9] = nh[8][10] = "Thạch Lựu Mộc";
nh[9][11] = nh[10][12] = "Đại Hải Thủy";

var hanh = new Array();
hanh[2] = "Thủy Nhị Cục";
hanh[3] = "Mộc Tam Cục";
hanh[4] = "Kim Tứ Cục";
hanh[5] = "Thổ Ngũ Cục";
hanh[6] = "Hỏa Lục Cục";
var tinhhe = new Array(12);
for (var i = 1; i < 13; i++)
    tinhhe[i] = new Array(12);
for (var i = 1; i < 13; i++)
    for (var j = 1; j < 13; j++)
        tinhhe[i][j] = "Mệnh Vô Chính Diệu";
tinhhe[5][5] = "Tử vi Tí Ngọ quan hệ tinh thần / vật chất";
tinhhe[5][7] = "Phá quân Dần Thân phản kháng / thuận tòng";
tinhhe[5][9] = "Liêm Phủ Thìn Tuất cảm tình / lý trí";
tinhhe[5][10] = "Thái âm Tị Hợi hướng ngoại / hướng nội";
tinhhe[5][11] = "Tham lang Tí Ngọ ham muốn vật chất / tinh thần";
tinhhe[5][12] = "Đồng Cự Sửu Mùi sáng sủa / âm ám";
tinhhe[5][1] = "Vũ Tướng Dần Thân quá cương / quá nhu";
tinhhe[5][2] = "Nhật Lương Mão Dậu tường hòa / cô kị";
tinhhe[5][3] = "Thất sát Thìn Tuất lý tưởng / ảo tưởng";
tinhhe[5][5] = "Thiên cơ Tị Hợi quyền biến / cơ mưu";

tinhhe[6][6] = "Tử Phá Sửu Mùi bất ổn / an định ";
tinhhe[6][8] = "Thiên phủ Mão Dậu trì trọng / cẩn thận";
tinhhe[6][9] = "Thái âm Thìn Tuất mục tiêu / manh động";
tinhhe[6][10] = "Liêm Tham Tị Hợi tình cảm / vật dục";
tinhhe[6][11] = "Cự môn Tí Ngọ anh hoa nội liễm / nội tâm nghi kị";
tinhhe[6][12] = "Thiên tướng Sửu Mùi ưu nhã / dung tục";
tinhhe[6][1] = "Đồng Lương Dần Thân lãng mạn / nguyên tắc";
tinhhe[6][2] = "Vũ Sát Mão Dậu quyết đoạn / đoản lự";
tinhhe[6][3] = "Thái dương Thìn Tuất bất tha luy / tha luy";
tinhhe[6][5] = "Thiên cơ Tí Ngọ dương cương / âm nhu";

tinhhe[1][1] = "Tử Phủ Dần Thân chủ động / bị động";
tinhhe[1][2] = "Thái âm Mão Dậu kiên cường / bạc nhược";
tinhhe[1][3] = "Tham lang Thìn Tuất kiên nhẫn / táo tiến";
tinhhe[1][4] = "Cự môn Tị Hợi thâm trầm / xung động";
tinhhe[1][5] = "Liêm Tướng Tí Ngọ cương nghị / thúy nhược";
tinhhe[1][6] = "Thiên lương Sửu Mùi chính trực / tinh minh";
tinhhe[1][7] = "Thất sát Dần Thân cô cao / uy quyền";
tinhhe[1][8] = "Thiên đồng Mão Dậu không hư / sung thật";
tinhhe[1][9] = "Vũ khúc Thìn Tuất nhân tuần / tiến thủ";
tinhhe[1][10] = "Thái dương Tị Hợi Tích cực / tiêu cực";
tinhhe[1][11] = "Phá quân Tí Ngọ ngoan hiêu / quả cảm";
tinhhe[1][12] = "Thiên cơ Sửu Mùi thượng tiến / hạ du";

tinhhe[2][2] = "Tử Tham Mão Dậu vật dục / tình dục ";
tinhhe[2][3] = "Cự môn Thìn Tuất kích phát / tao kị";
tinhhe[2][4] = "Thiên tướng Tị Hợi khai sáng lực / nhân nhân thành sự";
tinhhe[2][5] = "Thiên lương Tí Ngọ cô khắc / dung hòa";
tinhhe[2][6] = "Liêm Sát Sửu Mùi phấn phát / cương lệ";
tinhhe[2][9] = "Thiên đồng Thìn Tuất khoáng đạt / đoản chí";
tinhhe[2][10] = "Vũ Phá Tị Hợi thích ứng / phản ảo";
tinhhe[2][11] = "Thái dương Tí Ngọ hư phù / trầm ổn";
tinhhe[2][12] = "Thiên phủ Sửu Mùi khiêm hòa / khiếp nhược.";
tinhhe[2][1] = "Cơ Âm Dần Thân lý trí / tình tự";

tinhhe[3][3] = "Tử Tướng Thìn Tuất hữu tình / vô tình";
tinhhe[3][4] = "Thiên lương Tị Hợi phù đãng / ổn định";
tinhhe[3][5] = "Thất sát Tí Ngọ quyền uy / khắc kị";
tinhhe[3][7] = "Liêm trinh Dần Thân mẫn cảm / đạp thật";
tinhhe[3][9] = "Phá quân Thìn Tuất thiên khô / điều hòa";
tinhhe[3][10] = "Thiên đồng Tị Hợi bạc nhược / kiên cường";
tinhhe[3][11] = "Vũ Phủ Tí Ngọ sanh tài / lý tài";
tinhhe[3][12] = "Âm Dương Sửu Mùi khai láng / trầm uất.";
tinhhe[3][1] = "Tham Lang Dần Thân vật dục / tình dục";
tinhhe[3][2] = "Cơ Cự Mão Dậu ổn trọng / phù bạc";

tinhhe[4][4] = "Tử Sát Tị Hợi quyền uy / chuyên quyền";
tinhhe[4][8] = "Liêm Phá Mão Dậu phụng công / tư lợi";
tinhhe[4][10] = "Thiên phủ Tị Hợi tường hòa / quyền thuật";
tinhhe[4][11] = "Đồng Âm Tí Ngọ Tích cực / tiêu cực";
tinhhe[4][12] = "Vũ Tham Sửu Mùi dục vọng / dã tâm";
tinhhe[4][1] = "Cự Nhật Dần Thân đắc trợ / cô lập";
tinhhe[4][2] = "Thiên tướng Mão Dậu chính trực / tuần tư";
tinhhe[4][3] = "Cơ Lương Thìn Tuất tiêm khắc / minh đoạn";

function h(j) {
	var temp1;
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	if (j == 8 || j == 2 || j == 5 || j == 11)
		temp1 = 3;
	if (j == 3 || j == 4)
		temp1 = 1;
	if (j == 7 || j == 6)
		temp1 = 2;
	if (j == 12 || j == 1)
		temp1 = 5;
	if (j == 9 || j == 10)
		temp1 = 4;
	var color;
	if (temp1 == 5)
		color = 'black';
	if (temp1 == 2)
		color = '#F20D2E';
	if (temp1 == 1)
		color = '#228B22';
	if (temp1 == 4)
		color = 'purple';
	if (temp1 == 3)
		color = '#F9AA07';
	context.fillStyle = color;
	context.strokeStyle = color;
	return color;
}
function g(j) {
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	var temp1;
	if (j == 1 || j == 2)
		temp1 = 1;
	if (j == 3 || j == 4)
		temp1 = 2;
	if (j == 5 || j == 6)
		temp1 = 3;
	if (j == 7 || j == 8)
		temp1 = 4;
	if (j == 9 || j == 10)
		temp1 = 5;
	var color;
	if (temp1 == 5)
		color = 'black';
	if (temp1 == 2)
		color = '#F20D2E';
	if (temp1 == 1)
		color = '#228B22';
	if (temp1 == 4)
		color = 'purple';
	if (temp1 == 3)
		color = '#F9AA07';
	context.fillStyle = color;
	context.strokeStyle = color;
	return color;
}

function f(j, k) {
	var temp1;
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	if (k == 1 || k == 7 || k == 2 || k == 8)
		temp1 = 0;
	if (k == 11 || k == 12 || k == 5 || k == 6)
		temp1 = 2;
	if (k == 3 || k == 4 || k == 9 || k == 10)
		temp1 = 1;
	temp1 = temp1 + Math.floor((j + 1) * 0.5);
	if (temp1 > 5)
		temp1 = temp1 - 5;
	if (temp1 == 2)
		context.fillStyle = 'black';
	if (temp1 == 1)
		context.fillStyle = 'purple';
	if (temp1 == 3)
		context.fillStyle = '#F20D2E';
	if (temp1 == 4)
		context.fillStyle = '#F9AA07';
	if (temp1 == 5)
		context.fillStyle = '#228B22';
}
function bacot(cannam,chinam,thang,ngay,gio,cannamxem,chinamxem,canthangxem,chithangxem,canngayxem,chingayxem,cangioxem,chigioxem,ngayxem, thangxem, namxem) { 

// 1 khai báo các biến

var flag = new Array();
var flug = new Array();
var flg = new Array();


var ccan = new Array();
ccan[1] = "G.";
ccan[2] = "Ấ.";
ccan[3] = "B.";
ccan[4] = "Đ.";
ccan[5] = "M.";
ccan[6] = "K.";
ccan[7] = "C.";
ccan[8] = "T.";
ccan[9] = "N.";
ccan[10] = "Q.";
ccan[11] = ".";
ccan[12] = "Ấ.";
ccan[0] = "Quý";

var canth = new Array();
canth[1] = "9";
canth[2] = "8";
canth[3] = "7";
canth[4] = "6";
canth[5] = "5";
canth[6] = "9";
canth[7] = "8";
canth[8] = "7";
canth[9] = "6";
canth[10] = "5";
canth[11] = "9";
canth[12] = "8";
canth[0] = "Quý";

var chith = new Array();
chith[1] = "9";
chith[2] = "8";
chith[3] = "7";
chith[4] = "6";
chith[5] = "5";
chith[6] = "4";
chith[7] = "9";
chith[8] = "8";
chith[9] = "7";
chith[10] = "6";
chith[11] = "5";
chith[12] = "4";
chith[0] = "Hợi";

var sao = new Array();
sao[1] = "TỬ VI ";
sao[2] = "LIÊM TRINH. ";
sao[3] = "THIÊN ĐỒNG ";
sao[4] = "VŨ KHÚC.-";
sao[5] = "THÁI DƯƠNG ";
sao[6] = "THIÊN CƠ ";
sao[7] = "THIÊN PHỦ ";
sao[8] = "THÁI ÂM ";
sao[9] = "THAM LANG.+";
sao[10] = "CỰ MÔN.+";
sao[11] = "THIÊN TƯỚNG ";
sao[12] = "THIÊN LƯƠNG ";
sao[13] = "THẤT SÁT ";
sao[14] = "PHÁ QUÂN. ";

var ngaytuan = new Array();
ngaytuan[1] = "Chủ Nhật";
ngaytuan[2] = "Thứ Hai";
ngaytuan[3] = "Thứ Ba";
ngaytuan[4] = "Thứ Tư";
ngaytuan[5] = "Thứ Năm";
ngaytuan[6] = "Thứ Sáu";
ngaytuan[7] = "Thứ Bảy";

				var timeline=new Date();

	remember = 1; {
		var list;
		var tieuvan;
		var vitrisaotam = new Array();
		var x = new Array();
		var y = new Array();
		var cung = new Array();
		var xa_x = 300 / 2;
		var xa_y = 20;
		var ngo_x = xa_x + 300;
		var ngo_y = 20;
		var mui_x = ngo_x + 300;
		var mui_y = 20;
		var than_x = mui_x + 300;
		var than_y = 20;
		var thin_y = xa_y + 170;
		var thin_x = xa_x;
		var mao_x = xa_x;
		var mao_y = thin_y + 170;
		var dan_x = xa_x;
		var dan_y = mao_y + 170;
		var suu_y = dan_y;
		var suu_x = dan_x + 300;
		var ty_x = suu_x + 300;
		var ty_y = suu_y;
		var hoi_x = ty_x + 300;
		var hoi_y = suu_y;
		var dau_x = than_x;
		var dau_y = than_y + 170;
		var tuat_x = dau_x;
		var tuat_y = dau_y + 170;
		x[1] = dan_x;
		x[2] = mao_x;
		x[3] = thin_x;
		x[4] = xa_x;
		x[5] = ngo_x;
		x[6] = mui_x;
		x[7] = than_x;
		x[8] = dau_x;
		x[9] = tuat_x;
		x[10] = hoi_x;
		x[11] = ty_x;
		x[12] = suu_x;
		x[0] = x[12];
		x[-1] = x[11]
			y[1] = dan_y;
		y[2] = mao_y;
		y[3] = thin_y;
		y[4] = xa_y;
		y[5] = ngo_y;
		y[6] = mui_y;
		y[7] = than_y;
		y[8] = dau_y;
		y[9] = tuat_y;
		y[10] = hoi_y;
		y[11] = ty_y;
		y[12] = suu_y;
		y[0] = y[12];
		y[-1] = y[11];
		y[13] = y[1];
		x[13] = x[1];
		cung[1] = "MỆNH";
		cung[2] = "PHỤ MẪU";
		cung[3] = "PHÚC ĐỨC";
		cung[4] = "ĐIỀN TRẠCH";
		cung[5] = "QUAN LỘC";
		cung[6] = "GIAO HỮU";
		cung[7] = "THIÊN DI";
		cung[8] = "TẬT ÁCH";
		cung[9] = "TÀI BẠCH";
		cung[10] = "TỬ NỮ";
		cung[11] = "PHU THÊ";
		cung[12] = "HUYNH ĐỆ";
		var xx = new Array();
		var yy = new Array();
		xx[1] = dan_x + 150;
		xx[2] = mao_x + 150;
		xx[3] = thin_x + 150;
		xx[4] = xa_x + 150;
		xx[5] = ngo_x;
		xx[6] = mui_x;
		xx[7] = than_x - 150;
		xx[8] = dau_x - 150;
		xx[9] = tuat_x - 150;
		xx[10] = hoi_x - 150;
		xx[11] = ty_x;
		xx[12] = suu_x;
		yy[1] = dan_y - 20;
		yy[2] = mao_y + 80;
		yy[3] = thin_y + 80;
		yy[4] = xa_y + 150;
		yy[5] = ngo_y + 150;
		yy[6] = mui_y + 150;
		yy[7] = than_y + 150;
		yy[8] = dau_y + 80;
		yy[9] = tuat_y + 80;
		yy[10] = hoi_y - 20;
		yy[11] = ty_y - 20;
		yy[12] = suu_y - 20;
	}
	nhapdulieutuvi();
	for (var i = 1; i <= 12; i++)
		flg[i] = 0;
	for (var i = 1; i <= 12; i++)
		flag[i] = 1;
	for (var i = 1; i <= 12; i++)
		flug[i] = 1; {
		
		function ansao(ben, vitrisao, tensao, mau) {
			var temp;
			d = 14;
			if (vitrisao < 0)
				vitrisao = vitrisao + 12;
			temp = check(vitrisao);
			if (vitrisao < 0)
				vitrisao = vitrisao + 12;
			temp = check(vitrisao);
			temp = check(temp);
			context.fillStyle = mau;
			if (ben == 0)
				if (flag[temp] > 7) {
					ben = 1;
				}
			if (ben == 1)
				if (flug[temp] > 7)
					if (flag[temp] < 8)
						ben = 0;
			if (ben == 1)
				if (flug[temp] > 7)
					if (flag[temp] > 7)
						ben = 2;
			if (ben == 1)
				if (flug[temp] < 8) {
					context.fillText(tensao, x[temp] - 32 - 15, y[temp] + (d) * flug[temp] - d + 50 - 7);
					flug[temp]++;
				}
			if (ben == 0)
				if (flag[temp] < 8) {
					context.fillText(tensao, x[temp] - 32 - 110, y[temp] + (d) * flag[temp] - d + 50 - 7);
					flag[temp]++;
				}
			if (id_phieuphieu == 0)
				if (ben == 2) {
					context.fillText(tensao, x[temp] - 38 + 90 * 1, y[temp] + (d) * (4 + flg[temp]) - d + 42);
					flg[temp]++;
				}
			if (id_phieuphieu == 1)
				if (ben == 2) {
					if (flg[temp] == 1)
						context.fillText(tensao, x[temp] - 38 + 90 * 1, y[temp] + (d) * (4 + flg[temp]) - d + 42);
					flg[temp]++;
				}
			return temp;
		}
	}{
		function anthienma(tchinam, ch) {
			var thienma;
			if (tchinam == 3 || tchinam == 7 || tchinam == 11) {
				thienma = 7;
			} else if (tchinam == 4 || tchinam == 8 || tchinam == 12) {
				thienma = 4;
			} else if (tchinam == 5 || tchinam == 9 || tchinam == 1) {
				thienma = 1;
			} else if (tchinam == 6 || tchinam == 10 || tchinam == 2) {
				thienma = 10;
			}
			ansao(0, thienma, ch + "Thiên Mã ", "#F20D2E");
		}
		function anluuxuongkhuc(tcannam, ch) {
			var luuxuong;
			var luukhuc;
			var xuong=[0,4,5,7,8,7,8,10,11,1,2];
			var khuc=[0,8,7,5,4,5,4,2,1,11,10];
		
			context.font = ' 9pt Arial'; {
				ansao(0, xuong[tcannam], ch + "V. Xương ", 'purple');
				context.font = ' 9pt Arial';
				ansao(0, khuc[tcannam], ch + "V. Khúc ", '#030401');
			}
		}
		function quansat() {
			var s = "";
			if ((chinam == 1) || (chinam == 7) || (chinam == 4))
				if (gio == 10)
					if ((gio == 2) || (gio == 5) || (gio == 8) || (gio == 11))
						s = s + " Hòa Thượng";
			if ((chinam == 3) || (chinam == 7) || (chinam == 11))
				if (gio == 5)
					s = s + " Thiên Điếu";
			if ((thang == 1) || (thang == 2) || (thang == 3))
				if (cangio == 9)
					if (chigio == 5)
						s = s + " Tứ Quý";
			var qs = check(chinam + 11 - thang + ngay - gio + 24);
			if ((qs == 11) || (qs == 5))
				if (gioitinh == 1)
					s = s + " Kim Xà Thiết Tỏa";
			if (check(thang + gio) == 7)
				s = s + " Quan Sát";
			if (((thang + 2) / 3 == 1) && ((gio == 8) || (gio == 2)))
				s = s + " Diêm Vương";
			if (((thang + 2) / 3 == 2) && ((gio == 5) || (gio == 11)))
				s = s + " Diêm Vương";
			if (((thang + 2) / 3 == 3) && ((gio == 1) || (gio == 7)))
				s = s + " Diêm Vương";
			if (((thang + 2) / 3 == 4) && ((gio == 4) || (gio == 10)))
				s = s + " Diêm Vương";
			if (((thang + 2) / 3 == 1) && (gio == 7))
				s = s + " Dạ Đề";
			if (((thang + 2) / 3 == 2) && (gio == 10))
				s = s + " Dạ Đề";
			if (((thang + 2) / 3 == 3) && (gio == 1))
				s = s + " Dạ Đề";
			if (((thang + 2) / 3 == 4) && (gio == 4))
				s = s + " Dạ Đề";
			if (s != "")
				s = "Bị sinh phạm giờ" + s + ".";
			var kl = namxemdl - nam + 1;
			if ((kl % 9 == 1) || (kl % 9 == 3) || (kl % 9 == 6) || (kl % 9 == 8))
				if (gioitinh == 0)
					s = s + " Năm nay phạm Kim Lâu";
			return s;
		}
		function anlocton(tcannam, ch) {
			var tlocton=[0,1,2,4,5,4,5,7,8,10,11];
			var kinhduong;
			var dala;
			var dhkinh;
			var dhda;
			
			kinhduong = tlocton[tcannam] + 1;
			dala =  tlocton[tcannam] + 11;
			context.font = '  8pt Arial';
			ansao(0,  tlocton[tcannam], ch + "Lộc Tồn ", "#F9AA07");
			context.font = '  8pt Arial';
			if (kinhduong % 3 == 0)
				dhkinh = " (M)";
			else
				dhkinh = " (H)";
			if (dala % 3 == 0)
				dhda = " (M)";
			else
				dhda = " (H)";
			ansao(1, kinhduong, ch + "Kình D. " + dhkinh, "purple");
			context.font = '  8pt Arial';
			context.font = '  8pt Arial';
			ansao(1, dala, ch + "Đà La " + dhda, "purple");
			return  tlocton[tcannam];
		}
		function anloctonnt(tcannam, ch) {
			var tlocton=[0,1,2,4,5,4,5,7,8,10,11];
			var kinhduong;
			var dala;
			var dhkinh;
			var dhda;
			
			kinhduong = check(tlocton[tcannam] + 1);
			dala = check(tlocton[tcannam] + 11);
			context.font = ' 8pt Arial';
			ansao(0, tlocton[tcannam], ch + "LỘC TỒN. ", "#F9AA07");
			context.font = ' 8pt Arial';
			if (kinhduong % 3 == 0)
				dhkinh = " (M)";
			else
				dhkinh = " (H)";
			if (dala % 3 == 0)
				dhda = " (M)";
			else
				dhda = " (H)";
			ansao(1, kinhduong, ch + "KÌNH D. " + dhkinh, "purple");
			context.font = '  8pt Arial';
			ansao(1, dala, ch + "ĐÀ LA " + dhda, "purple");
			return tlocton[tcannam];
		}
		function ankhoiviet(tcannam, ch) {
			var tk=[0,6,7,8,10,12,11,12,1,2,4];
			var tv=[0,12,11,10,8,6,7,6,5,4,2];
			
												
			if (ch == "") {
				ansao(0, tk[tcannam], ch + "THIÊN KHÔI ", '#F20D2E');
				ansao(0, tv[tcannam], ch + "THIÊN VIỆT ", '#F20D2E');
			} else {
				ansao(0, tk[tcannam], ch + "Thiên Khôi ", '#F20D2E');
				ansao(0, tv[tcannam], ch + "Thiên Việt ", '#F20D2E');
			}
		}
		function anvongsao(vitrisao, tensao, mau, pos) {
			var temp;
			d = 14;
			if (vitrisao < 0)
				vitrisao = vitrisao + 12;
			temp = check(vitrisao);
			vitrisao = vitrisao + 12;
			temp = check(vitrisao);
			temp = check(temp);
			context.fillStyle = mau;
			context.fillText(tensao, x[temp] - 38 + 90, y[temp] + (d) * pos - 6 - d - 62);
			return temp;
		}
		function anphisao(vitrisao, tensao, mau, pos) {
			var temp;
			d = 14;
			if (vitrisao < 0)
				vitrisao = vitrisao + 12;
			temp = check(vitrisao);
			vitrisao = vitrisao + 12;
			temp = check(vitrisao);
			temp = check(temp);
			context.fillStyle = mau;
			context.fillText(tensao, x[temp] - 38 + 90 * 1, y[temp] + (d) * (pos + 3) - 6 - d - 63);
			return temp;
		}
		function anluuthaitue(tchinam, ch) {
			var ltue = new Array();
			ltue[1] = "Thái Tuế";
			ltue[3] = "Tang Môn";
			ltue[7] = "Tuế Phá";
			ltue[9] = "Bạch Hổ";
			ltue[11] = "Điếu Khách";
			j = tchinam + 10;
			j = check(j);
			context.font = '  8pt Arial';
			ansao(1, j, ch + "Thái Tuế ", "#030401");
			j = check(j + 2);
			ansao(1, j, ch + "Tang Môn ", "#030401");
			j = check(j + 4);
			j = check(j + 2);
			ansao(1, j, ch + "Bạch Hổ ", "#030401");
			j = check(j + 2);
			j = tchinam + 10;
			j = check(j);
			var thienhu = check(6 + j);
			var thienkhoc = check(16 - j);
			ansao(1, thienhu, ch + "Thiên Hư ", "#F20D2E");
			ansao(1, thienkhoc, ch + "Thiên Khốc ", "#F20D2E");
		}
		function anthaitue(tchinam, ch) {
			var mau;
			context.font = '  8pt Arial';
			j = tchinam + 10;
			for (i = 1; i <= 12; i++) {
				j = check(j);
				if (i == 1) {
					mau = "#148AFF";
					context.font = '  8pt Arial';
				}
				if (i == 2)
					mau = "red";
				if (i == 11)
					mau = "red";
				if (i == 5)
					mau = "red";
				if (i == 9)
					mau = 'purple';
				if (i == 3)
					mau = '#228B22';
				anvongsao(j, ch + tue[i], mau, 10);
				context.font = '  8pt Arial';
				j++;
			}
		}
		function antuongtinh() {
			var khoituong;
			var tuongtinh = new Array();
			tuongtinh[1] = "Tướng Tinh";
			tuongtinh[2] = "Phan An";
			tuongtinh[3] = "Thiên Mã ";
			tuongtinh[4] = "Tức Thần";
			tuongtinh[5] = "Hoa Cái ";
			tuongtinh[6] = "Kiếp Sát ";
			tuongtinh[7] = "Tai Sát";
			tuongtinh[8] = "Thiên Sát";
			tuongtinh[9] = "Chỉ Bối";
			tuongtinh[10] = "Đào Hoa ";
			tuongtinh[11] = "Nguyệt Sát";
			tuongtinh[12] = "Vong Thần";
			var chmau = new Array();
			for (i = 1; i <= 12; i++)
				chmau[i] = "#030401";
			chmau[10] = '#000000';
			chmau[3] = 'red';
			chmau[6] = 'red';
			chmau[5] = 'black';
			if (chinam == 3 || chinam == 7 || chinam == 11) {
				khoituong = 5;
			} else if (chinam == 4 || chinam == 8 || chinam == 12) {
				khoituong = 2;
			} else if (chinam == 5 || chinam == 9 || chinam == 1) {
				khoituong = 11;
			} else if (chinam == 6 || chinam == 10 || chinam == 2) {
				khoituong = 8;
			}
			j = khoituong;
			for (i = 1; i <= 12; i++) {
				j = check(j);
				context.font = '  8pt Arial';
				anvongsao(j, tuongtinh[i], chmau[i], 11);
				j++;
			}
		}
		function antapdieu() {
			context.font = ' 8pt Arial';
			context.font = ' 8pt Arial';
			ankhoiviet(cannam, "");
			var locton;
			anloctonnt(cannam, "");
			var p;
			var vx = 22 - gio;
			var vk = gio + 2;
			p = check(vx);
			vx = p;
			var dh;
			if (p == 4 || p == 8 || p == 12)
				dh = " (M)";
			if (p == 7 || p == 11 || p == 3)
				dh = " (Đ)";
			if (p == 10 || p == 6 || p == 2)
				dh = " (Đ)";
			if (p == 1 || p == 5 || p == 9)
				dh = " (H)";
			context.fillStyle = 'purple';
			context.textAlign = 'left';
			context.font = ' 8pt Arial';
			ansao(0, p, "V. XƯƠNG " + dh);
			if (p == 3 || p == 8 || p == 12)
				dh = " (M)";
			if (p == 7 || p == 11 || p == 3)
				dh = " (Đ)";
			if (p == 10 || p == 6 || p == 2)
				dh = " (V)";
			if (p == 1 || p == 5 || p == 9)
				dh = " (H)";
			p = check(vk);
			vk = p;
			context.fillStyle = '#030401';
			context.textAlign = 'left';
			context.font = ' 8pt Arial';
			ansao(0, p, "V. KHÚC. " + dh);
			var diakhong;
			var diakiep;
			diakiep = check(check(10 + gio - 1));
			diakhong = check(22 + 1 - gio);
			if (diakhong == 1 || diakhong == 7)
				dh = " (Đ)";
			else if
			(diakhong == 4 || diakhong == 10)
				dh = " (M)";
			else
				dh = " (H)";
			context.font = ' 8pt Arial';
			ansao(1, diakhong, "ĐỊA KHÔNG " + dh, "#F20D2E");
			context.font = ' 8pt Arial';
			ansao(1, diakiep, "ĐỊA KIẾP " + dh, "#F20D2E");
			var tp = 2 + thang;
			var hb = 22 - thang;
			p = check(tp);
			if (p == 3 || p == 10)
				dh = " (M)";
			if (p == 6 || p == 12)
				dh = " (V)";
			if (p == 1 || p == 2 || p == 4 || p == 5 || p == 7 || p == 8 || p == 9 || p == 11)
				dh = " (H)";
			context.fillStyle = '#F9AA07';
			context.textAlign = 'left';
			context.font = ' 8pt Arial';
			ansao(0, p, "TẢ PHÙ. " + dh, '#F9AA07');
			p = check(hb);
			context.font = ' 8pt Arial';
			ansao(0, p, "HỮU BẬT. " + dh, '#F9AA07');
			context.font = ' 8pt Arial';
			var hoatinh;
			var linhtinh;
			var bd_hoa;
			var bd_linh;
			if (chinam == 3 || chinam == 7 || chinam == 11) {
				bd_hoa = 12;
				bd_linh = 2;
			} else if (chinam == 4 || chinam == 8 || chinam == 12) {
				bd_hoa = 8;
				bd_linh = 9;
			} else if (chinam == 5 || chinam == 9 || chinam == 1) {
				bd_hoa = 1;
				bd_linh = 9;
			} else if (chinam == 6 || chinam == 10 || chinam == 2) {
				bd_hoa = 2;
				bd_linh = 9;
			}
			var chieuhoalinh = 1;
			if (cannam % 2 != 0 && gioitinh == 0)
				chieuhoalinh = -1;
			if (cannam % 2 != 1 && gioitinh == 1)
				chieuhoalinh = -1;
			if (id_vdttlhl == 0) {
				hoatinh = check(bd_hoa + gio - 1);
				linhtinh = check(bd_linh + gio - 1);
			} else {
				hoatinh = check(bd_hoa + chieuhoalinh * (gio - 1) + 12);
				linhtinh = check(bd_linh - chieuhoalinh * (gio - 1) + 12);
			}
			context.font = ' 8pt Arial'
				var dh;
			if (hoatinh == 1 || hoatinh == 5 || hoatinh == 9)
				dh = " (M)";
			if (hoatinh == 4 || hoatinh == 8 || hoatinh == 12)
				dh = " (Đ)";
			if (hoatinh == 2 || hoatinh == 6 || hoatinh == 10)
				dh = " (B)";
			if (hoatinh == 3 || hoatinh == 7 || hoatinh == 11)
				dh = " (H)";
			ansao(1, hoatinh, "HỎA TINH " + dh, "#F20D2E");
			context.font = ' 8pt Arial'
				dh = " (H)";
			if (linhtinh == 1 || linhtinh == 5 || linhtinh == 9)
				dh = " (M)";
			if (linhtinh == 4 || linhtinh == 8 || linhtinh == 12)
				dh = " (Đ)";
			if (linhtinh == 2 || linhtinh == 6 || linhtinh == 10)
				dh = " (B)";
			if (linhtinh == 3 || linhtinh == 7 || linhtinh == 11)
				dh = " (H)";
			ansao(1, linhtinh, "LINH TINH " + dh, "#F20D2E");
			context.font = '  8pt Arial';
			if (id_thaitue == 1) {
				anthaitue(chinam, "");
			}
			function bacsi() {
				context.font = '  8pt Arial';
				var bacsi = new Array();
				bacsi[1] = "Bác Sĩ";
				bacsi[2] = "Lực Sĩ";
				bacsi[3] = "Thanh Long";
				bacsi[4] = "Tiểu Hao";
				bacsi[5] = "Tướng Quân";
				bacsi[6] = "Tấu Thư";
				bacsi[7] = "Phi Liêm";
				bacsi[8] = "Hỉ Thần";
				bacsi[9] = "Bệnh Phù";
				bacsi[10] = "Đại Hao ";
				bacsi[11] = "Phục Binh";
				bacsi[12] = "Quan Phủ";
				var chbsmau = new Array();
				for (i = 1; i <= 12; i++)
					chbsmau[i] = "#030401";
				chbsmau[1] = 'black';
				chbsmau[2] = 'red';
				chbsmau[3] = '#228B22';
				chbsmau[4] = 'red';
				chbsmau[10] = 'red';
				chbsmau[5] = '#228B22';
				chbsmau[6] = "#F20D2E";
				chbsmau[7] = 'red';
				chbsmau[8] = 'red';
				chbsmau[10] = 'red';
				chbsmau[11] = 'red';
				if (cannam == 1)
					locton = 1;
				else if (cannam == 2)
					locton = 2;
				else if (cannam == 3)
					locton = 4;
				else if (cannam == 4)
					locton = 5;
				else if (cannam == 5)
					locton = 4;
				else if (cannam == 6)
					locton = 5;
				else if (cannam == 7)
					locton = 7;
				else if (cannam == 8)
					locton = 8;
				else if (cannam == 9)
					locton = 10;
				else if (cannam == 10)
					locton = 11;
				if ((cannam % 2 != 0 && gioitinh == 1) || (cannam % 2 == 0 && gioitinh == 0)) {
					for (i = 1; i <= 12; i++) {
						anvongsao(check(locton + i - 1), bacsi[i], chbsmau[i], 9);
					}
				} else {
					for (i = 1; i <= 12; i++)
						anvongsao(check(locton + 1 - i), bacsi[i], chbsmau[i], 9);
				}
			}
			if (id_thaitue == 1)
				bacsi();
			if (id_tapdieu == 1) {
				if (id_tuongtinh == 1)
					antuongtinh();
				for (i = 1; i < 13; i++)
					context.font = '  8pt Arial';
				if (id_tapdieu == 1) {
					var thienquan;
					var thienphuc;
					if (cannam == 1) {
						thienquan = 6;
						thienphuc = 8;
					} else if (cannam == 2) {
						thienquan = 3;
						thienphuc = 7;
					} else if (cannam == 3) {
						thienquan = 4;
						thienphuc = 11;
					} else if (cannam == 4) {
						thienquan = 1;
						thienphuc = 10;
					} else if (cannam == 5) {
						thienquan = 2;
						thienphuc = 2;
					} else if (cannam == 6) {
						thienquan = 9;
						thienphuc = 1;
					} else if (cannam == 7) {
						thienquan = 10;
						thienphuc = 5;
					} else if (cannam == 8) {
						thienquan = 7;
						thienphuc = 4;
					} else if (cannam == 9) {
						thienquan = 9;
						thienphuc = 5;
					} else if (cannam == 10) {
						thienquan = 5;
						thienphuc = 4;
					}
					var dx = 90;
					p = thienquan;
					context.fillStyle = '#F9AA07';
					context.textAlign = 'left';
					ansao(0, p, "Thiên quan ", '#F9AA07');
					p = thienphuc;
					context.fillStyle = '#F9AA07';
					context.textAlign = 'left';
					ansao(0, p, "Thiên phúc ", '#F9AA07');
					var thientru;
					if (cannam == 1 || cannam == 3)
						thientru = 4;
					else if (cannam == 2 || cannam == 4)
						thientru = 5;
					else if (cannam == 5)
						thientru = 7;
					else if (cannam == 6)
						thientru = 8;
					else if (cannam == 7)
						thientru = 10;
					else if (cannam == 8)
						thientru = 11;
					else if (cannam == 9)
						thientru = 1;
					else if (cannam == 10)
						thientru = 2;
					ansao(0, thientru, "Thiên Trù", "#228B22");
					context.font = '  8pt Arial';
					var lnvt;
					if (cannam == 1)
						lnvt = 1;
					else if (cannam == 2)
						lnvt = 2;
					else if (cannam == 3)
						lnvt = 4;
					else if (cannam == 4)
						lnvt = 5;
					else if (cannam == 5)
						lnvt = 4;
					else if (cannam == 6)
						lnvt = 5;
					else if (cannam == 7)
						lnvt = 7;
					else if (cannam == 8)
						lnvt = 8;
					else if (cannam == 9)
						lnvt = 10;
					else if (cannam == 10)
						lnvt = 11;
					ansao(0, check(lnvt + 3), "LN. Văn Tinh", "purple");
					ansao(0, check(lnvt + 8), "Quốc Ấn", "purple");
					ansao(0, check(lnvt + 5), "Đường Phù", "purple");
					var luuha=["",8,9,6,7,4,5,2,3,10,1];
			
					ansao(1, luuha[cannam], "Lưu Hà", 'black');
				}
				var thienkhong = chinam - 2 + 1;
				context.font = '  8pt Arial';
				ansao(1, thienkhong, "Thiên Không ", "#F20D2E");
				var thienhu = 4 + chinam;
				var thienkhoc = 18 - chinam;
				ansao(1, thienhu, "Thiên Hư ", "#F20D2E");
				ansao(1, thienkhoc, "Thiên Khốc ", "#F20D2E");
				var hongloan = 15 - chinam;
				var thienhi = hongloan + 6;
				ansao(0, hongloan, "Hồng Loan ", 'black');
				ansao(0, thienhi, "Thiên Hỉ ", 'black');
				var cothan;
				var quatu;
				if (chinam == 3 || chinam == 4 || chinam == 5) {
					cothan = 4;
					quatu = 12;
				} else if (chinam == 6 || chinam == 7 || chinam == 8) {
					cothan = 7;
					quatu = 3;
				} else if (chinam == 9 || chinam == 10 || chinam == 11) {
					cothan = 10;
					quatu = 6;
				} else if (chinam == 12 || chinam == 1 || chinam == 2) {
					cothan = 1;
					quatu = 9;
				}
				ansao(1, cothan, "Cô Thần ", "#F20D2E");
				ansao(1, quatu, "Quả Tú ", "#F20D2E");
				var longtri = 2 + chinam;
				var phuongcac = 22 - chinam;
				ansao(0, longtri, "Long Trì ", "black");
				ansao(0, phuongcac, "Phượng Các ", "#F9AA07");
				var niengiai = phuongcac;
				ansao(0, niengiai, "Niên Giải", "black");
				var phatoai;
				if (chinam == 3 || chinam == 6 || chinam == 9 || chinam == 12) {
					phatoai = 8;
				} else if (chinam == 1 || chinam == 4 || chinam == 7 || chinam == 10) {
					phatoai = 4;
				} else if (chinam == 2 || chinam == 5 || chinam == 8 || chinam == 11) {
					phatoai = 12;
				}
				ansao(1, phatoai, "Phá Toái", 'purple');
			}
			if (id_tapdieu == 1) {
				context.font = '  8pt Arial';
				var daiphu = vk + 2;
				var phongcao = vk + 10;
				ansao(0, daiphu, "Đài Phụ ", '#F9AA07');
				ansao(0, phongcao, "Phong Cáo ", "#228B22");
				var thiendieu = check(12 + thang - 1);
				var thienhinh = check(8 + thang - 1);
				ansao(1, thienhinh, "Thiên Hình ", "#F20D2E");
				ansao(0, check(thienhinh + 11), "Thiên Giải ", "#F20D2E");
				ansao(0, check(thienhinh + 10), "Địa Giải ", "#F20D2E");
				ansao(1, thiendieu, "Thiên Diêu ", "#030401");
				var nguyetgiai;
				var thienvu;
				if (thang == 1 || thang == 2) {
					nguyetgiai = 7;
				} else if (thang == 3 || thang == 4) {
					nguyetgiai = 9;
				} else if (thang == 5 || thang == 6) {
					nguyetgiai = 11;
				} else if (thang == 7 || thang == 8) {
					nguyetgiai = 1;
				} else if (thang == 9 || thang == 10) {
					nguyetgiai = 3;
				} else if (thang == 11 || thang == 12) {
					nguyetgiai = 5;
				}
				if (thang == 1 || thang == 5 || thang == 9) {
					thienvu = 4;
				} else if (thang == 2 || thang == 6 || thang == 10) {
					thienvu = 7;
				} else if (thang == 3 || thang == 7 || thang == 11) {
					thienvu = 1;
				} else if (thang == 4 || thang == 8 || thang == 12) {
					thienvu = 10;
				}
				context.font = '  8pt Arial';
				ansao(0, nguyetgiai, "Nguyệt Giải", "#228B22");
				context.font = '  8pt Arial';
				ansao(0, thienvu, "Thiên Vu", "#228B22");
				var thiennguyet=[0,9,4,3,1,6,2,10,6,1,5,9,1];
		
				ansao(0, thiennguyet[thang], "Thiên Nguyệt", "#228B22");
				var amsat;
				if (thang == 1 || thang == 7) {
					amsat = 1;
				} else if (thang == 2 || thang == 8) {
					amsat = 11;
				} else if (thang == 3 || thang == 9) {
					amsat = 9;
				} else if (thang == 4 || thang == 10) {
					amsat = 7;
				} else if (thang == 5 || thang == 11) {
					amsat = 5;
				} else if (thang == 6 || thang == 12) {
					amsat = 3;
				}
				ansao(1, amsat, "Âm Sát", "#030401");
				var thienthuong;
				var thiensu;
				if ((cannam % 2 != 0 && gioitinh == 1) || (cannam % 2 == 0 && gioitinh == 0)) {
					thienthuong = check(cungmenh + 5);
					thiensu = check(cungmenh + 7);
				} else {
					thienthuong = check(cungmenh + 7);
					thiensu = check(cungmenh + 5);
				}
				ansao(1, thienthuong, "Thiên Thương", "red");
				ansao(1, thiensu, "Thiên Sứ", "red");
				var tamthai;
				var battoa;
				var tinhngay = ngay % 12;
				if (tinhngay == 0)
					tinhngay = 12;
				tamthai = check(tp + tinhngay - 1);
				battoa = check(check(hb) + 12 + 1 - tinhngay);
				battoa = check(battoa);
				ansao(0, tamthai, "Tam Thai ", "#F9AA07");
				ansao(0, battoa, "Bát Tọa ", "#F9AA07");
				var anquang = vx + tinhngay - 2;
				anquang = check(anquang);
				anquang = check(anquang);
				anquang = check(anquang);
				anquang = check(anquang);
				ansao(0, anquang, "Ân Quang ", "#F20D2E");
				var thienquy = vk - tinhngay + 12 + 2;
				thienquy = check(thienquy);
				thienquy = check(thienquy);
				thienquy = check(thienquy);
				ansao(0, thienquy, "Thiên Quý ", '#F9AA07');
				var thientai = check(cungmenh + chinam - 1);
				var thientho = check(cungthan + chinam - 1);
				ansao(0, thientai, "Thiên Tài ", '#228B22');
				ansao(0, thientho, "Thiên Thọ ", '#F9AA07');
				var dauquan;
				var tchi = chinam + 10;
				tchi = check(tchi);
				dauquan = tchi + (13 - thang);
				dauquan = check(dauquan);
				dauquan = dauquan + gio - 1;
				dauquan = check(dauquan);
				ansao(1, dauquan, "Đẩu Quân", 'purple');
			}
		}
	}{
		function antuhoa(tcannam, tchinam, ch) {
			context.font = '   8pt Arial';
			var tp = 2 + thang;
			var hb = 22 - thang;
			if (tcannam == 1)
				p = thienphu + 10;
			if (tcannam == 2)
				p = thienphu + 5;
			if (tcannam == 3)
				p = tuvi + 11;
			if (tcannam == 4)
				p = tuvi + 7;
			if (tcannam == 5)
				p = thienphu + 1;
			if (tcannam == 6)
				p = thienphu + 2;
			if (tcannam == 7)
				p = tuvi + 8;
			if (tcannam == 8)
				p = tuvi + 9;
			if (tcannam == 9)
				p = tuvi;
			if (tcannam == 10)
				p = thienphu + 3;
			p = check(p);
			context.fillStyle = '#F20D2E';
			context.textAlign = 'left';
			ansao(0, p, ch + "Hóa Quyền", 'red');
			if (tcannam == 1)
				p = tuvi + 8;
			if (tcannam == 2)
				p = tuvi;
			if (tcannam == 3)
				p = vx;
			if (tcannam == 4)
				p = tuvi + 11;
			if (tcannam == 5)
				p = hb;
			if (tcannam == 6)
				p = thienphu + 5;
			if (tcannam == 7)
				p = thienphu + 1;
			if (tcannam == 8)
				p = vk;
			if (tcannam == 9)
				p = tp;
			if (tcannam == 10)
				p = thienphu + 1;
			p = check(p);
			context.fillStyle = '#228B22';
			context.textAlign = 'left';
			ansao(0, p, ch + "Hóa Khoa ", '#228B22');
		}
		function phieuphieu(cung, ch, ch2, ch3, ch4) {
			var canvas = document.getElementById('myCanvas');
			var context = canvas.getContext('2d');
		
			var cungloc;
			var cungky;
			var cancung;
			var cancan = cannam;
			cungmenh1 = cungmenh;
			cancung=checkcan(cancan*2+1);
			var cancungdan = cancung;
			var temp = cancung;
			cancung = cancung + cung - 1;
			if (cancung > 10)
				cancung = cancung - 10;
			context.font = ' 8pt Arial';
			if (cancung == 1)
				p = tuvi + 4;
			if (cancung == 2)
				p = tuvi + 11;
			if (cancung == 3)
				p = tuvi + 7;
			if (cancung == 4)
				p = thienphu + 1;
			if (cancung == 5)
				p = thienphu + 2;
			if (cancung == 6)
				p = tuvi + 8;
			if (cancung == 7)
				p = tuvi + 9;
			if (cancung == 8)
				p = thienphu + 3;
			if (cancung == 9)
				p = thienphu + 5;
			if (cancung == 10)
				p = thienphu + 10;
			p = check(p);
			context.fillStyle = '#228B22';
			context.textAlign = 'left';
			if (cung == p)
				anphisao(cung, "Lộc tự hóa", '#148AFF', 9);
			else
				anphisao(cung, ch + pcung[check(p - cungmenh1 + 13)], '#148AFF', 9);
			pp[check(cung - cungmenh1 + 13)][1] = check(p - cungmenh1 + 13);
			philoc[cung] = p;
			cungloc = p;
			context.font = ' 8pt Arial';
			var tp = 2 + thang;
			var hb = 22 - thang;
			var cungkhoa;
			var cungquyen;
			if (cancung == 1)
				p = thienphu + 10;
			if (cancung == 2)
				p = thienphu + 5;
			if (cancung == 3)
				p = tuvi + 11;
			if (cancung == 4)
				p = tuvi + 7;
			if (cancung == 5)
				p = thienphu + 1;
			if (cancung == 6)
				p = thienphu + 2;
			if (cancung == 7)
				p = tuvi + 8;
			if (cancung == 8)
				p = tuvi + 9;
			if (cancung == 9)
				p = tuvi;
			if (cancung == 10)
				p = thienphu + 3;
			p = check(p);
			context.fillStyle = 'red';
			if (cung == p)
				anphisao(cung, "Quyền tự hóa", 'red', 10);
			else
				anphisao(cung, ch3 + pcung[check(p - cungmenh1 + 13)], 'red', 10);
			pp[check(cung - cungmenh1 + 13)][2] = check(p - cungmenh1 + 13);
			cungquyen = p;
			context.textAlign = 'left';
			if (cancung == 1)
				p = tuvi + 8;
			if (cancung == 2)
				p = tuvi;
			if (cancung == 3)
				p = vx;
			if (cancung == 4)
				p = tuvi + 11;
			if (cancung == 5)
				p = hb;
			if (cancung == 6)
				p = thienphu + 5;
			if (cancung == 7)
				p = thienphu + 1;
			if (cancung == 8)
				p = vk;
			if (cancung == 9)
				p = tp;
			if (cancung == 10)
				p = thienphu + 1;
			p = check(p);
			context.fillStyle = '';
			if (cung == p)
				anphisao(cung, "Khoa tự hóa", '#228B22', 11);
			else
				anphisao(cung, ch4 + pcung[check(p - cungmenh1 + 13)], '#228B22', 11);
			pp[check(cung - cungmenh1 + 13)][3] = check(p - cungmenh1 + 13);
			cungkhoa = p;
			if (cancung == 1)
				p = tuvi + 9;
			if (cancung == 2)
				p = thienphu + 1;
			if (cancung == 3)
				p = tuvi + 4;
			if (cancung == 4)
				p = thienphu + 3;
			if (cancung == 5)
				p = tuvi + 11;
			if (cancung == 6)
				p = vk;
			if (cancung == 7)
				p = tuvi + 7;
			if (cancung == 8)
				p = vx;
			if (cancung == 9)
				p = tuvi + 8;
			if (cancung == 10)
				p = thienphu + 2;
			p = check(p);
			context.fillStyle = 'black';
			if (cung == p)
				anphisao(cung, "Kỵ tự hóa", 'black', 12);
			else
				anphisao(cung, ch2 + pcung[check(p - cungmenh1 + 13)], 'black', 12);
			pp[check(cung - cungmenh1 + 13)][4] = check(p - cungmenh1 + 13);
			phiky[cung] = p;
			cungky = p;
			context.textAlign = 'left';
			var xxx = new Array();
			var yyy = new Array();
			xxx[1] = dan_x + 180 - 200;
			xxx[2] = mao_x + 155 - 220;
			xxx[3] = thin_x + 155 - 220;
			xxx[4] = xa_x + 180 - 200;
			xxx[5] = ngo_x;
			xxx[6] = mui_x;
			xxx[7] = than_x - 180 + 200;
			xxx[8] = dau_x - 155 + 220;
			xxx[9] = tuat_x - 155 + 220;
			xxx[10] = hoi_x - 180 + 220;
			xxx[11] = ty_x;
			xxx[12] = suu_x;
			yyy[1] = dan_y - 50 + 150;
			yyy[2] = mao_y + 70;
			yyy[3] = thin_y + 70;
			yyy[4] = xa_y + 180 - 40;
			yyy[5] = ngo_y + 155 - 40;
			yyy[6] = mui_y + 155 - 40;
			yyy[7] = than_y + 180 - 40;
			yyy[8] = dau_y + 70;
			yyy[9] = tuat_y + 70;
			yyy[10] = hoi_y - 50 + 150;
			yyy[11] = ty_y - 25 + 150;
			yyy[12] = suu_y - 25 + 150;
			var xxxx = new Array();
			var yyyy = new Array();
			xxxx[1] = dan_x + 180 + 17 - 200;
			xxxx[2] = mao_x + 155 + 17 - 200;
			xxxx[3] = thin_x + 155 + 17 - 200;
			xxxx[4] = xa_x + 180 + 17 - 200;
			xxxx[5] = ngo_x;
			xxxx[6] = mui_x;
			xxxx[7] = than_x - 180 - 17 + 200;
			xxxx[8] = dau_x - 155 - 17 + 210;
			xxxx[9] = tuat_x - 155 - 17 + 210;
			xxxx[10] = hoi_x - 180 - 17 + 200;
			xxxx[11] = ty_x - 20;
			xxxx[12] = suu_x - 20;
			yyyy[1] = dan_y + 150;
			yyyy[2] = mao_y + 110;
			yyyy[3] = thin_y + 110;
			yyyy[4] = xa_y + 180 + 29 - 95;
			yyyy[5] = ngo_y + 155 + 29 - 95;
			yyyy[6] = mui_y + 155 + 29 - 95;
			yyyy[7] = than_y + 180 + 29 - 95;
			yyyy[8] = dau_y + 100;
			yyyy[9] = tuat_y + 270;
			yyyy[10] = hoi_y - 9 + 150;
			yyyy[11] = ty_y + 25 - 19 + 150;
			yyyy[12] = suu_y + 25 - 19 + 150;
			if (ID_VEPHIEUPHIEU == 1) {
				var c = document.getElementById("myCanvas");
				var context = c.getContext("2d");
				context.fillStyle = '#FF9500';
				context.lineWidth = 0.4;
				context.strokeStyle = '#FF9500';
				context.globalAlpha = 0.9;
				context.fillStyle = "#FF9500";
				if (cung == check(cungloc + 6))
					context.lineWidth = 2;
				if (cung == cungloc) {
					context.strokeStyle = '#FF9500';
					cir(xx[cung], yy[cung], 3);
					context.lineWidth = 1;
				} else
					arrow((xx[cung] - 2) * 0.9 + 60, (yy[cung] + 2) * 0.9 + 29, (xx[cungloc] - 2) * 0.9 + 60 + cung, (yy[cungloc] + 2) * 0.9 + 28 + cung, 600, 330, 25);
				var dx = (xxx[cungloc] + xxx[cung]) * 0.5 * 0.5 + 600 * 0.5 - xxx[cungloc];
				var dy = (yyy[cungloc] + yyy[cung]) * 0.5 * 0.5 + 340 * 0.5 - yyy[cungloc];
				context.globalAlpha = 0.9;
				context.strokeStyle = '#5D00FF';
				context.fillStyle = '#5D00FF';
				if (cung == check(cungky + 6)) {
					context.lineWidth = 2;
				} else
					context.lineWidth = 0.2;
				if (cung == cungky) {
					context.strokeStyle = '#5D00FF';
					cir(xx[cung], yy[cung], 4);
				} else
					arrow(xx[cung] + 2, yy[cung] + 3, xx[cungky] + 2, yy[cungky], 600, 330, 25);
				context.globalAlpha = 0.4;
				if (cannam == 1)
					p = tuvi + 4;
				if (cannam == 2)
					p = tuvi + 11;
				if (cannam == 3)
					p = tuvi + 7;
				if (cannam == 4)
					p = thienphu + 1;
				if (cannam == 5)
					p = thienphu + 2;
				if (cannam == 6)
					p = tuvi + 8;
				if (cannam == 7)
					p = tuvi + 9;
				if (cannam == 8)
					p = thienphu + 3;
				if (cannam == 9)
					p = thienphu + 5;
				if (cannam == 10)
					p = thienphu + 10;
				p = check(p);
				context.strokeStyle = '#148AFF';
				context.globalAlpha = 1;
				context.fillStyle = "white";
				context.beginPath();
				vetuhoa(xxxx[p] - 100, yyyy[p] - 70, 5);
				if (cannam == 1)
					p = tuvi + 9;
				if (cannam == 2)
					p = thienphu + 1;
				if (cannam == 3)
					p = tuvi + 4;
				if (cannam == 4)
					p = thienphu + 3;
				if (cannam == 5)
					p = tuvi + 11;
				if (cannam == 6)
					p = vk;
				if (cannam == 7)
					p = tuvi + 7;
				if (cannam == 8)
					p = vx
						if (cannam == 9)
							if (cannam == 9)
								p = tuvi + 8;
						if (cannam == 10)
							p = thienphu + 2;
						p = check(p);
				context.beginPath();
				context.strokeStyle = 'black';
				context.fillStyle = 'white';
				vetuhoa(xxxx[p] - 100, yyyy[p] - 70, 5);
				context.stroke();
				context.globalAlpha = 1;
			}
		}
		function cir(x, y, r) {
			context.beginPath();
			context.arc(x, y, 3 * r, 0, 2 * Math.PI, false);
			context.stroke();
			context.beginPath();
			context.arc(x, y, 2 * r, 0, 2 * Math.PI, false);
			context.stroke();
			context.beginPath();
			context.arc(x, y, r, 0, 2 * Math.PI, false);
			context.stroke();
		}
	
		function vetuhoaky(x, y, r) {
			context.beginPath();
			context.globalAlpha = 0.2;
			context.arc(x, y, 8, 0, 2 * Math.PI, false);
			context.arc(x, y, 7, 0, 2 * Math.PI, false);
			context.arc(x, y, 6, 0, 2 * Math.PI, false);
			context.arc(x, y, 5, 0, 2 * Math.PI, false);
			context.arc(x, y, 4, 0, 2 * Math.PI, false);
			context.arc(x, y, 3, 0, 2 * Math.PI, false);
			context.arc(x, y, 2, 0, 2 * Math.PI, false);
			context.fill();
			context.globalAlpha = 0.2;
			context.stroke();
		}
		function arrow(x_1, y_1, x_2, y_2, x_3, y_3, d) {
			d = 5;
			context.beginPath();
			context.beginPath();
			context.moveTo(x_1, y_1);
			var xx = 0.3 * x_3 + 0.1 * x_2 + 0.6 * x_1;
			var yy = 0.5 * y_3 + 0.1 * y_2 + 0.4 * y_1;
			context.quadraticCurveTo(xx, yy, x_2, y_2);
			if (Math.abs(y_1 - y_2) + Math.abs(x_1 - x_2) < 250)
				d = 10;
			if (Math.abs(y_1 - y_2) + Math.abs(x_1 - x_2) > 500)
				d = 15;
			var nhon = 0.1;
			if (Math.abs(y_1 - y_2) + Math.abs(x_1 - x_2) > 550)
				nhon = 0.07;
			context.stroke();
			var dx = x_2 - 0.95 * xx - 0.05 * x_1,
			dy = y_2 - 0.95 * yy - 0.05 * y_1;
			var len = Math.sqrt(dx * dx + dy * dy);
			var goc1 = Math.atan2(dx, dy);
			var goc;
			goc = goc1;
			context.lineCap = 'round';
			context.beginPath();
			context.moveTo(x_2, y_2);
			context.lineTo(x_2 - d * Math.sin(goc + nhon), y_2 - d * Math.cos(goc + nhon));
			context.lineTo(x_2 - d * Math.sin(goc - nhon), y_2 - d * Math.cos(goc - nhon));
			context.lineWidth = 1;
			context.closePath();
			context.stroke();
			context.fill();
		}
		function antuhoalk(tcannam, tchinam, ch) {
			context.font = '   8pt Arial';
			if (tcannam == 1)
				p = tuvi + 4;
			if (tcannam == 2)
				p = tuvi + 11;
			if (tcannam == 3)
				p = tuvi + 7;
			if (tcannam == 4)
				p = thienphu + 1;
			if (tcannam == 5)
				p = thienphu + 2;
			if (tcannam == 6)
				p = tuvi + 8;
			if (tcannam == 7)
				p = tuvi + 9;
			if (tcannam == 8)
				p = thienphu + 3;
			if (tcannam == 9)
				p = thienphu + 5;
			if (tcannam == 10)
				p = thienphu + 10;
			context.fillStyle = '#148AFF';
			context.textAlign = 'left';
			context.strokeStyle = '#148AFF';
			if (ch == "Ns.  ")
				loc = p;
			ansaotuhoa(0, p, ch + "Hóa Lộc ", '#148AFF');
			context.font = '  8pt Arial';
			if (tcannam == 1)
				p = tuvi + 9;
			if (tcannam == 2)
				p = thienphu + 1;
			if (tcannam == 3)
				p = tuvi + 4;
			if (tcannam == 4)
				p = thienphu + 3;
			if (tcannam == 5)
				p = tuvi + 11;
			if (tcannam == 6)
				p = vk;
			if (tcannam == 7)
				p = tuvi + 7;
			if (tcannam == 8)
				p = vx
					if (tcannam == 9)
						p = tuvi + 8;
					if (tcannam == 10)
						p = thienphu + 2;
					p = check(p);
			context.fillStyle = 'black';
			context.textAlign = 'left';
			context.strokeStyle = 'black';
			if (ch == "Ns.  ")
				ky = p;
			ansaotuhoa(1, p, ch + "Hóa Kỵ ", 'black');
			context.font = ' 8pt Arial';
		}
		function ansaotuhoa(ben, vitrisao, tensao, mau) {
			var temp;
			d = 14;
			var bengoc=ben;
			if (vitrisao < 0)
				vitrisao = vitrisao + 12;
			temp = check(vitrisao);
			if (vitrisao < 0)
				vitrisao = vitrisao + 12;
			temp = check(vitrisao);
			temp = check(temp);
			context.fillStyle = mau;
			if (ben == 0)
				if (flag[temp] > 7) {
					ben = 1;
				}
			if (ben == 1)
				if (flug[temp] > 7)
					if (flag[temp] < 8)
						ben = 0;
			if (ben == 1)
				if (flug[temp] > 7)
					if (flag[temp] > 7)
						ben = 2;
			if (ben == 1)
				if (flug[temp] < 8) {
					context.fillText(tensao, x[temp] - 32 - 15, y[temp] + (d) * flug[temp] - d + 50 - 7);
					p = check(temp);
					context.strokeStyle = 'mau';
					context.lineWidth = 3;
					context.textAlign = 'left';
					context.font = '  8pt Arial';
					context.beginPath();
					yinyang(context, x[p] + 30, y[p] + (d) * flug[p] - 6 - d + 50 - 5, 5, 1, 1, mau) ;
					flug[temp]++;
				}
			if (ben == 0)
				if (flag[temp] < 8) {
					context.fillText(tensao, x[temp] - 32 - 110, y[temp] + (d) * flag[temp] - d + 50 - 7);
					p = check(temp);
					context.strokeStyle = 'mau';
					context.lineWidth = 3;
					context.textAlign = 'left';
					context.font = '  8pt Arial';
					context.beginPath();
					yinyang(context, x[p] + 25 - 90, y[p] + (d) * flag[p] - 6 - d + 50 - 5, 5, 1, 1, mau) ;
					
					flag[temp]++;
				}
			if (id_phieuphieu == 0)
				if (ben == 2) {
					context.fillText(tensao, x[temp] - 38 + 90 * 1, y[temp] + (d) * (4 + flg[temp]) - d + 42);
					flg[temp]++;
				}
			if (id_phieuphieu == 1)
				if (ben == 2) {
					if (flg[temp] == 1)
						context.fillText(tensao, x[temp] - 38 + 90 * 1, y[temp] + (d) * (4 + flg[temp]) - d + 42);
					flg[temp]++;
				}
			context.stroke();
			return temp;
		}
	}{
		function anluucungluunien(tchinam, ch) {
			
			var tue=["","mệnh","phụ","phúc","điền","quan","nô","di","tật","tài","tử","phu","bào"];
			j = tchinam + 10;
			for (i = 1; i <= 12; i++) {
				context.textAlign = 'right';
				j = check(j);
				if (i == 1) {
					context.globalAlpha = 0.15;
					context.fillStyle = 'blue';
					context.fillRect(x[j] + 55, y[j] - 13, 95, 16);
					context.globalAlpha = 1;
				}
				if ((i == 1) || (i == 9) || (i == 5) || (i == 4) || (i == 3) || (i == 8)) {
					context.fillStyle = '#0004FF';
					context.fillText(ch + tue[i], x[j] + 110, y[j]);
				} else {
					context.fillStyle = 'black';
					context.fillText(ch + tue[i], x[j] + 110, y[j]);
				}
				context.font = '  8pt Arial';
				context.textAlign = 'right';
				if (i < 7)
					context.fillText(namxemdl - 1 + i, x[j] + 146, y[j]);
				else
					context.fillText(namxemdl - 1 + i - 12, x[j] + 146, y[j]);
				j++;
			}
			var tv;
			if (chinam == 1 || chinam == 5 || chinam == 9)
				tv = 11;
			if (chinam == 2 || chinam == 6 || chinam == 10)
				tv = 8;
			if (chinam == 3 || chinam == 7 || chinam == 11)
				tv = 5;
			if (chinam == 4 || chinam == 8 || chinam == 12)
				tv = 2;
			j = tv + 10;
			context.fillStyle = 'black';
			context.font = '  8pt Arial';
			context.textAlign = 'right';
			if (gioitinh == 1)
				for (i = 1; i <= 12; i++) {
					j = check(j);
					if (check(chinam + i - 1) == chinamxem) {
						context.fillStyle = 'purple';
						tieuvan = j;
						context.fillStyle = 'black';
						context.globalAlpha = 0.15;
						context.fillStyle = 'blue';
						context.fillRect(x[j] + 90, y[j] + 5, 60, 14);
						context.globalAlpha = 1;
					} else
						context.fillStyle = 'black';
					chitieuvan[j] = check(chinam + i - 1);
					j++;
				}
			else
				for (i = 1; i <= 12; i++) {
					j = check(j);
					if (check(chinam - i + 1) == chinamxem) {
						context.fillStyle = 'purple';
						context.fillStyle = 'black';
						context.globalAlpha = 0.15;
						context.globalAlpha = 0.15;
						context.fillStyle = 'blue';
						context.fillRect(x[j] + 90, y[j] + 5, 60, 14);
						context.globalAlpha = 1;
						tieuvan = j;
					} else
						context.fillStyle = 'black';
					chitieuvan[j] = check(chinam - i + 13);
					j++;
				}
			context.fillStyle = 'purple';
			for (i = 1; i <= 12; i++) {
				f(ctieuvan[i], chitieuvan[i]);
				context.textAlign = 'right';
				context.fillText(ccan[ctieuvan[i]] + " " + chi[chitieuvan[i]], x[check(i)] + 145, y[check(i)] + 15);
			}
		}
		function anluucungdaivan(tchinam, ch) {
	var tue=["","mệnh","phụ","phúc","điền","quan","nô","di","tật","tài","tử","phu","bào"];
			var cantieuvan = checkcan(2 * cancungdaivan + 1);
			j = tchinam + 10;
			context.font = '  8pt Arial';
			for (i = 1; i <= 12; i++) {
				j = check(j);
				context.fillStyle = '#00008B';
				if ((i == 1) || (i == 9) || (i == 5) || (i == 4) || (i == 3) || (i == 8)) {
					context.fillStyle = '#0004FF';
					context.fillText(ch + tue[i], x[j] - 145, y[j] + 15);
					if (i == 1) {
						context.globalAlpha = 0.15;
						context.fillStyle = 'blue';
						context.fillRect(x[j] - 146, y[j] + 2, 68, 16);
						context.globalAlpha = 1;
					}
				} else {
					context.fillStyle = 'black';
					context.fillText(ch + tue[i], x[j] - 145, y[j] + 15);
				}
				context.textAlign = 'left';
				ctieuvan[i] = checkcan(i + cantieuvan - 1);
				j++;
			}
		}
		function nguyetvan(luudauquan) {
			var tue = new Array();
			tue[1] = "Th. 1";
			tue[2] = "Th. 2";
			tue[3] = "Th. 3";
			tue[4] = "Th. 4";
			tue[5] = "Th. 5";
			tue[6] = "Th. 6";
			tue[7] = "Th. 7";
			tue[8] = "Th. 8";
			tue[9] = "Th. 9";
			tue[10] = "Th. 10";
			tue[11] = "Th. 11";
			tue[12] = "Th. 12";
			var j;
			if (id_vdttl == 0) {
				j = luudauquan;
			} else
				j = check(luudauquan);
			context.font = '  8pt Arial';
			for (i = 1; i <= 12; i++) {
				j = check(j);
				if ((thangxem == i) & (id_luunguyet == 1)) {
					context.fillStyle = 'purple';
					context.font = '  8pt Arial';
					context.textAlign = 'left';
					context.fillText(tue[i], x[j] - 141, y[j] + 141);
					context.globalAlpha = 0.15;
					context.fillStyle = 'blue';
					context.fillRect(x[j] - 145, y[j] + 128, 90, 16);
					context.globalAlpha = 1;
				} else {
					context.fillStyle = 'black';
					context.textAlign = 'left';
					context.font = ' 8pt Arial';
					context.fillText(tue[i], x[j] - 141, y[j] + 141);
				}
				context.font = ' 8pt Arial';
				var canthangln = cannamxem * 2 + i;
				var chithangln = check(i + 2);
				if (chithangln == 0)
					chithangln = 12;
				if (canthangln > 10)
					canthangln = canthangln - 10;
				if (canthangln > 10)
					canthangln = canthangln - 10;
				if (canthangln > 10)
					canthangln = canthangln - 10;
				if (canthangln == 10)
					canthangln = 10;
				context.textAlign = 'left'
					context.fillStyle = 'black';
				context.textAlign = 'left'
					context.fillStyle = '#00008B';
				var p = canthangln;
				var q = chithangln;
				f(p, q);
				context.textAlign = 'left';
				context.fillText(ccan[p] + " " + chi[q], x[j] - 104, y[j] + 141);
				j++;
			}
			context.textAlign = 'left';
			context.font = ' 8pt Arial';
		}
	}{
		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		context.lineWidth = 2.3;
		var imageObj = new Image();
		context.clearRect(0, 0, canvas.width, canvas.height);
		canvas.width = 1225 * sizesize * 0.001 + 5;
		canvas.height = 700 * sizesize * 0.001 + 5;
		context.save();
		context.scale(sizesize * 0.001, sizesize * 0.001);
		var w = 300;
		var d = 170;
		
		
		
		
		
		
		
		
			
		
		
		
		context.lineWidth = 1.6;
		context.fillStyle = '#F7F7F5';
				context.beginPath();

			context.lineWidth = 3;
		context.fillStyle = '#F7F7F5';
		context.beginPath();
		context.clearRect(0, 0, 1200, 800);
		
		context.closePath();
		context.stroke();
		context.fillStyle = '#F7F7F5';
		context.fill();
			
		
			
		
		context.globalAlpha = 1;
		context.fillStyle = '#FFFFFA';
		context.lineWidth = 3;
		context.strokeStyle = 'black';
		context.shadowColor = '#999';
		context.shadowBlur = 10;
		context.shadowOffsetX = 10;
		context.shadowOffsetY =10;
		roundRect(context,2,2,1200,680,10,0,0);
		context.fill();

			
			context.globalAlpha = 1;
			context.fillStyle = '#FFFFFA';
			context.lineWidth = 3;
			context.strokeStyle = 'black';
			context.shadowColor = '#999';
			context.shadowBlur = 0;
			context.shadowOffsetX = 0;
			context.shadowOffsetY = 0;
	roundRect(context,2,2,1200,680,10,1,1);
			context.fill();
			

			// main
			//drawTree(context,630,680, -90, 14);
			
				
				
				
		context.stroke();
		context.fillStyle = '#F7F7F5';
		context.fill();
		context.lineWidth = 2;
		context.strokeStyle = "black";
	
		context.stroke();
		context.lineWidth = 1.3;
		context.beginPath();
		context.moveTo(0, d);
		context.lineTo(4 * w+2, d);
		context.moveTo(0, d);
		context.lineTo(4 * w, d);
		context.moveTo(0, 3 * d);
		context.lineTo(4 * w+2, 3 * d);
		context.moveTo(0, 2 * d);
		context.lineTo(w, 2 * d);
		context.moveTo(0, 2 * d);
		context.lineTo(w, 2 * d);
		context.moveTo(3 * w, 2 * d);
		context.lineTo(w * 4+2, 2 * d);
		context.moveTo(w, 0);
		context.lineTo(w, 4 * d+2);
		context.moveTo(2 * w, 0);
		context.lineTo(2 * w, d+2);
		context.moveTo(2 * w, 3 * d);
		context.lineTo(2 * w, 4 * d+2);
		context.moveTo(3 * w, 0);
		context.lineTo(3 * w, 4 * d+2);
		context.stroke();
		context.closePath();
	}{
		context.lineWidth = 1.3;
		context.strokeStyle = '#000000';
		context.stroke();
		context.font = ' 8pt Arial';
		context.textAlign = 'center';
		context.fillStyle = '#F0EFEB';
		

			
		var cungmenh = check(Math.abs(12 + thang + 1 - gio));
		var cungthan = check(thang + gio - 1);
		var j = cungmenh;
		context.font = ' 8pt Arial';
		for (i = 1; i <= 12; i++) {
			if (j > 12)
				j = 1;
			if (j == cungthan) {
				cung[i] = cung[i] + "-THÂN";
			}
			context.fillStyle = '#F7F7F5'; {
				//context.fillRect(x[j] - 148, y[j] - 18, 296, 165);
			}
			context.textAlign = 'center';
			if ((i == 1) || (i == 9) || (i == 5) || (i == 4) || (i == 3) || (i == 8)) {
				context.fillStyle = '#0004FF';
				context.fillText(cung[i], x[j], y[j] - 1);
			} else {
				context.fillStyle = 'black';
				context.fillText(cung[i], x[j], y[j] - 1);
			}
			j++;
		}
		context.lineWidth = 5;
		context.strokeStyle = '#F0F2E4';
		context.closePath();
		context.globalAlpha = 0.2;
		
		context.beginPath();
		context.lineWidth = 1.3;
		context.globalAlpha = 1;
		
		for (i = 1; i <= 12; i++) {
			context.beginPath();
			context.strokeStyle = "black";
			context.moveTo(x[i] - 36, y[i] + 150);
			context.lineWidth = 0.2;
			context.lineTo(x[i] - 36, y[i] - 20);
			context.beginPath();
			context.strokeStyle = "black";
			context.moveTo(x[i] - 150, y[i] + 40);
			context.lineWidth = 0.2;
			context.lineTo(x[i] - 36, y[i] + 40);
			context.beginPath();
			context.strokeStyle = "black";
			context.moveTo(x[i] - 150, y[i] + 95);
			context.lineWidth = 0.2;
			context.lineTo(x[i] - 36, y[i] + 95);
			context.beginPath();
			context.strokeStyle = "black";
			context.moveTo(x[i] - 150, y[i] + 115);
			context.lineWidth = 0.2;
			context.lineTo(x[i] - 36, y[i] + 115);
			context.strokeStyle = "black";
			context.moveTo(x[i] - 92, y[i] + 150);
			context.lineWidth = 0.2;
			context.lineTo(x[i] - 92, y[i] + 115);
		}
		
		
		
		}			context.globalAlpha=0.1;
	yinyang(context,600, 340,300,1,1,'grey') ;		context.globalAlpha=1;
	
	
	{//an ở giữa
		context.font = '  8pt Arial'
			context.textAlign = 'left'
			context.fillStyle = 'black';
		context.fillText("Ngày: ", 330, 240 + l * 2);
		if (nhuan == 1)
			context.fillText("Tháng Nhuận:", 330, 240 + l);
		else
			context.fillText("Tháng:", 330, 240 + l * 1);
		context.fillText("Năm: ", 330, 240);
		context.fillText("Giờ: ", 330, 240 + l * 3);
		context.fillText("Thai Nguyên: ", 330, 240 + l * 4);
		context.fillText("Mệnh: ", 330, 240 + l * 6);
		if (id_vdttl != 0)
			context.fillText("An tứ hóa theo Khâm Thiên Môn", 330, 240 + l * 5);
		context.fillText("Năm xem: ", 330, 240 + l * 10);
		context.fillText("Cục: ", 330, 240 + l * 7);
		context.fillText("Chủ Mệnh: ", 660, 240 + l * 6);
		context.fillText("Chủ Thân: ", 660, 240 + l * 7);
		context.textAlign = 'left'
			context.fillStyle = '#00008B';
		j = cannamxem;
		k = chinamxem;
		g(j);
		context.fillText(can[cannamxem], 660, 240 + l * 10);
		h(k);
		context.fillText(chi[chinamxem], 710, 240 + l * 10);
		context.font = '  8pt Arial';
		f(j, k);
		context.fillText(nh[j][k], 770, 240 + l * 10);
		context.fillText(namxem, 500, 240 + l * 10);
		f(j, k);
		if (namdl == nam)
			context.fillText(namxemdl - nam + 1 + " tuổi âm", 560, 240 + l * 10);
		else
			context.fillText(namxemdl - nam + 1 + " tuổi", 560, 240 + l * 10);
		context.fillStyle = '#00008B';
		context.fillText(namxemdl, 420, 240 + l * 10);
		if (id_luunguyet == 1) {
			context.font = '  8pt Arial';
			context.textAlign = 'left';
			context.fillStyle = '#00008B';
			if (ID_LUUNHAT == 1) {
				context.fillText(ngayxemdl, 420, 240 + l * 12);
				var j = canngayxem;
				var k = chingayxem;
				g(j);
				context.fillText(can[canngayxem], 660, 240 + l * 12);
				h(k);
				context.fillText(chi[chingayxem], 710, 240 + l * 12);
				context.fillStyle = 'black';
				context.fillText("Ngày xem", 330, 240 + l * 12);
				context.fillStyle = '#00008B';
				var j = canngayxem;
				var k = chingayxem;
				context.font = '  8pt Arial';
				f(j, k);
				context.fillText(ngayxem, 500, 240 + l * 12);
				context.fillText(ngaytuan[thu], 560, 240 + l * 12);
				if (ID_LUUTHOI == 1) {
					context.fillStyle = 'black';
					context.fillText("Giờ xem", 330, 240 + l * 13);
					context.fillStyle = '#00008B';
					if (chigioxem !== 1)
						context.fillText(gioxem + " h", 420, 240 + l * 13);
					else
						context.fillText("23-1", 420, 240 + l * 13);
					var j = cangioxem;
					var k = chigioxem;
					context.font = '  8pt Arial';
					f(j, k);
					context.fillText("giờ xem", 500, 240 + l * 13);
					g(j);
					context.fillText(can[cangioxem], 660, 240 + l * 13);
					h(k);
					context.fillText(chi[chigioxem], 710, 240 + l * 13);
				}
			}
		}
		if (document.getElementById("ID_LICH").value == 1) {
			var j = cangio;
			var k = gio;
			context.font = '  8pt Arial';
			f(j, k);
			context.fillText(nh[j][k], 770, 240 + l * 3);
			g(j);
			context.fillText(can[cangio], 660, 240 + l * 3);
			h(k);
			context.fillText(chi[gio], 710, 240 + l * 3);
		}
		if (document.getElementById("ID_LICH").value == 1) {
			g(canngay);				
			context.fillText(can[canngay], 660, 240 + l * 2);
			h(chingay);
			context.fillText(chi[chingay], 710, 240 + l * 2);
		}
		if (document.getElementById("ID_LICH").value == 1) {
			context.fillStyle = '#00008B';
			if (giodl == 23)
				context.fillText("đã sang ngày mới", 546, 240 + l * 2);
			context.fillText(ngaydl, 420, 240 + l * 2);
			var j = canngay;
			var k = chingay;
			context.font = '  8pt Arial';
			f(j, k);
			context.fillText(nh[j][k], 770, 240 + l * 2);
			context.fillText(ngay, 500, 240 + l * 2);
		} else {
			var j = canngay;
			var k = chingay;
			f(j, k);
			context.fillText(ngay, 500, 240 + l * 2);
		}
		canthang = checkcan(2 * cannam + thang);
		f(j, k);
		var j = canthang;
		var k = chithang;
		g(j);
		context.fillText(can[j], 660, 240 + l * 1);
		h(k);
		context.fillText(chi[k], 710, 240 + l * 1);
		context.font = '  8pt Arial'
			context.textAlign = 'left'
			context.fillStyle = 'black';
		var j = checkcan(canthang - 9);
		var k = check(chithang - 9);
		g(j);
		context.fillText(can[j], 660, 240 + l * 4);
		h(k);
		context.fillText(chi[k], 710, 240 + l * 4);
		context.font = '  8pt Arial';
		f(j, k);
		context.fillText(nh[j][k], 770, 240 + l * 4);
		if (nhuan == 1) {
			if (document.getElementById("ID_LICH").value == 1) {
				context.fillStyle = '#00008B';
				context.fillText(thangdl, 420, 240 + l * 1);
				var j = canthang;
				var k = chithang;
				f(j, k);
				context.fillText(thang, 500, 240 + l * 1);
			} else {
				var j = canthang;
				context.font = '  8pt Arial';
				var k = chithang;
				f(j, k);
				context.fillText(nh[j][k], 770, 240 + l * 1);
				context.fillText(thang, 500, 240 + l * 1);
			}
		} else {
			if (document.getElementById("ID_LICH").value == 1) {
				context.fillStyle = '#00008B';
				context.fillText(thangdl, 420, 240 + l * 1);
				var j = canthang;
				var k = chithang;
				f(j, k);
				context.fillText(thang, 500, 240 + l * 1);
			} else {
				var j = canthang;
				var k = chithang;
				f(j, k);
				context.fillText(thang, 500, 240 + l * 1);
			}
		}
		


		var j = cannam;
		var k = chinam;
		g(j);
		context.fillText(can[cannam], 660, 240);
		h(k);
		context.fillText(chi[chinam], 710, 240);
		if (document.getElementById("ID_LICH").value == 1) {
			context.fillStyle = '#00008B';
			context.fillText(namdl, 420, 240);
			var j = cannam;
			var k = chinam;
			f(j, k);
			context.font = '  8pt Arial';
			context.fillText(nh[j][k], 770, 240);
			context.fillText(nam, 500, 240);
		} else {
			var j = cannam;
			context.font = '  8pt Arial';
			var k = chinam;
			f(j, k);
			context.fillText(nh[j][k], 770, 240);
			context.fillText(nam + " (âm)", 500, 240);
		}
		if (document.getElementById("ID_LICH").value == 1) {
			if (phutdl < 10)
				context.fillText(giodl + ":0" + phutdl, 420, 240 + l * 3);
			else
				context.fillText(giodl + ":" + phutdl, 420, 240 + l * 3);
		} else {
			h(gio);
			context.fillText(chi[gio], 500, 240 + l * 3);
		}
		if (document.getElementById("ID_LICH").value == 1) {
			var j = cangio;
			var k = gio;
			context.font = '  8pt Arial';
			f(j, k);
		//	context.fillText(nh[j][k], 770, 240 + l * 3);
			context.fillText("giờ âm", 500, 240 + l * 3);
		}
		var cun = check(chinam + 10);
		
		if (cun == 0)
			cun = 12;
		if (cun == 11)
			context.fillText("Tham Lang", 750, 240 + l * 6);
		if (cun == 12 || cun == 10)
			context.fillText("Cự Môn", 750, 240 + l * 6);
		if (cun == 1 || cun == 9)
			context.fillText("Lộc Tồn", 750, 240 + l * 6);
		if (cun == 2 || cun == 8)
			context.fillText("Văn Khúc", 750, 240 + l * 6);
		if (cun == 3 || cun == 7)
			context.fillText("Liêm Trinh", 750, 240 + l * 6);
		if (cun == 4 || cun == 6)
			context.fillText("Vũ Khúc", 750, 240 + l * 6);
		if (cun == 5)
			context.fillText("Phá Quân", 750, 240 + l * 6);
		if (chinam - 2 == -1)
			context.fillText("Linh Tinh", 750, 240 + l * 7);
		if (chinam - 2 == 0 || chinam - 2 == 6)
			context.fillText("Thiên Tướng", 750, 240 + l * 7);
		if (chinam - 2 == 1 || chinam - 2 == 7)
			context.fillText("Thiên Lương", 750, 240 + l * 7);
		if (chinam - 2 == 2 || chinam - 2 == 8)
			context.fillText("Thiên Đồng", 750, 240 + l * 7);
		if (chinam - 2 == 3 || chinam - 2 == 9)
			context.fillText("Văn Xương", 750, 240 + l * 7);
		if (chinam - 2 == 4 || chinam - 2 == 10)
			context.fillText("Thiên Cơ", 750, 240 + l * 7);
		if (chinam - 2 == 5)
			context.fillText("Hỏa Tinh", 750, 240 + l * 7);
		var canthangxem = checkcan(cannamxem * 2 + thangxem);
		var chithangxem = check(thangxem + 2);
		if (chithangxem == 0)
			chithangxem = 12;
		if (id_luunguyet == 1) {
			context.textAlign = 'left'
				context.fillStyle = 'black';
			context.fillText("Tháng xem", 330, 240 + l * 11);
			context.textAlign = 'left'
				context.fillStyle = '#00008B';
			context.font = '  8pt Arial'
				context.fillText(thangxemdl, 420, 240 + l * 11);
			context.font = '  8pt Arial'
				j = canthangxem;
			k = chithangxem;
			f(j, k);
			if (xemnhuan == 1)
				context.fillText(thangxem + " nhuận", 500, 240 + l * 11);
			else
				context.fillText(thangxem, 500, 240 + l * 11);
			g(j);
			context.fillText(can[canthangxem], 660, 240 + l * 11);
			h(k);
			context.fillText(chi[chithangxem], 710, 240 + l * 11);
		}
		context.textAlign = 'left'
			context.fillStyle = 'blue';
		context.textAlign = 'left'
			context.fillStyle = '#00008B';
		var temp1,
		temp2;
		context.font = '1 8pt';
		f(cannam, chinam);
		context.font = '  8pt Arial';
		context.fillText(nh[cannam][chinam], 420, 240 + l * 6);
	}
	var menh; {
		context.font = ' 8pt';
		cancung = checkcan(2 * cannam + 1);
		j = cancung;
		for (i = 1; i <= 12; i++) {
			j = checkcan(j);
			var k = check(i + 2);
			f(j, k);
			context.font = '  8pt  Arial';
			context.textAlign = 'left';
			var th = canth[j] + " " + chith[k];
			var th = parseInt(canth[j]) + parseInt(chith[k]);
			context.fillText(ccan[j] + " " + chi[k], x[i] - 145, y[i]);
			j++;
		}
	}
	
	
	context.textAlign = 'left';
	context.font = ' 8pt Arial';
	context.fillStyle = 'purple'; {
		var a;
		var b;
		var tennguoituvi = tennguoi;
		var cungancuc = cungmenh;
		var id_diaban =0;
		id_diaban=	 parseInt(	document.getElementById('ID_DIABAN').value);

		if (id_diaban == 0)
			cungancuc = cungmenh;

		if (id_diaban == 1) {
			if (cungmenh !== cungthan)
				cungancuc = cungthan;
			else
				if
				((cannam % 2 != 0 && gioitinh == 1) || (cannam % 2 == 0 && gioitinh == 0))
					cungancuc = cungthan + 2;
				else
					cungancuc = cungthan - 2;
			context.font = ' 12pt Arial'
				context.textAlign = 'right'
				tennguoituvi = tennguoituvi + "- Lá Số Địa Bàn";
				
		} else if (id_diaban == 2) {
			cungancuc = check(cungmenh + 2);
			context.font = ' 12pt Arial'
				context.textAlign = 'center'
				tennguoituvi = tennguoituvi + "- Lá Số Nhân Bàn";
		}

		var cancung = checkcan(2 * cannam + 1);
		var cancungdan = cancung;
		var temp = cancung;
		cancung = checkcan(cancung + cungancuc - 1);
		var temp22 = cancung;
		var chicung = check(cungancuc + 2);
		cuc = timcuc(cancung, chicung);
		context.font = '  8pt Arial'
			context.textAlign = 'left'
			context.fillStyle = 'black';
		context.fillText(hanh[cuc], 420, 240 + l * 7);
	}{
		context.textAlign = 'right';
		context.font = '  8pt Arial';
		j = cungmenh;
		var k = cuc;
		var tempk;
		var bddaivan;
		var ktdaivan;
		context.textAlign = 'left';
		context.fillStyle = 'black';
		context.font = ' 8pt Arial';
		var chieudaivan=1;
		
		if ((cannam % 2 != 0 && gioitinh == 1) || (cannam % 2 == 0 && gioitinh == 0)) 
		{
			for (i = 0; i < 12; i++) {
				bddaivan = k + i * 10;
				ktdaivan = k - 1 + (i + 1) * 10;
				var kt = bddaivan + 9;
				if (j > 12)
					j = 1;
				context.fillText(bddaivan + "-" + kt, x[j] - 100, y[j]);
				j++;
			}
		} 
		
		else {chieudaivan=-1;
			for (i = 0; i < 12; i++) {
				bddaivan = k + i * 10;
				ktdaivan = k - 1 + (i + 1) * 10;
				var kt = bddaivan + 9;
				if (j > 12)
					j = 1;
				context.fillText(bddaivan + "-" + kt, x[j] - 100, y[j]);
				j = check(j + 11);
			}
		}
	}
	
	
	
	
	function tuvi(cuc) {
		var X = cuc - ngay % cuc;
		if (ngay % cuc == 0)
			X = 0;
		var Y = (ngay + X) / cuc;
		var z;
		if (X % 2 == 0)
			z = Y + X;
		if (X % 2 != 0)
			z = Y - X;
		if (z > 12)
			z = z - 12;
		if (z < 1)
			z = check(z + 12);
		return z;
	}
	z = tuvi(cuc);
	for (i = 0; i < 13; i++)
		flag[i] = 0; {
		context.font = 'bold 11pt Arial';
		context.textAlign = 'center';
		var ch;
		var temp;
		var tuvi = z;
		dh = " ";
		if (z == 0)
			z = 12;
		context.fillStyle = '#F9AA07';

		var tuv=[" ","M","V","B","V","M","M","V","B","N","V","B","M"];
		context.fillText(sao[1] + " (" + tuv[z] + ")", x[z], y[z] + 15);
		flag[z] = 1;
		temp = z + 4;
		z = check(temp);
		context.fillStyle = '#F20D2E';
var liem=[" ","M","N","V","H","B","M","M","B","V","H","B","V"];
context.fillText(sao[2] + " (" + liem[z] + ")", x[z], y[z] + 15);
		flag[z] = 1;
		temp = z + 3;
		z = check(temp);
		context.fillStyle = '#030401';
		if (z == 11)
			dh = "V";
		if (z == 12)
			dh = "H";
		if (z == 1)
			dh = "N";
		if (z == 2)
			dh = "M";
		if (z == 3)
			dh = "B";
		if (z == 4)
			dh = "M";
		if (z == 5)
			dh = "H";
		if (z == 6)
			dh = "H";
		if (z == 7)
			dh = "V";
		if (z == 8)
			dh = "B";
		if (z == 9)
			dh = "B";
		if (z == 10)
			dh = "M";
		context.fillText(sao[3] + " (" + dh + ")", x[z], y[z] + 15);
		flag[z] = 1;
		temp = z + 1;
		z = check(temp);
		context.fillStyle = 'purple';
		if (z == 11)
			dh = "V";
		if (z == 12)
			dh = "M";
		if (z == 1)
			dh = "N";
		if (z == 2)
			dh = "H";
		if (z == 3)
			dh = "M";
		if (z == 4)
			dh = "B";
		if (z == 5)
			dh = "V";
		if (z == 6)
			dh = "M";
		if (z == 7)
			dh = "B";
		if (z == 8)
			dh = "V";
		if (z == 9)
			dh = "M";
		if (z == 10)
			dh = "B";
		context.fillText(sao[4] + " (" + dh + ")", x[z], y[z] + 15);
		flag[z] = 1;
		temp = z + 1;
		z = check(temp);
		context.fillStyle = '#F20D2E';
		if (z == 11)
			dh = "H";
		if (z == 12)
			dh = "H";
		if (z == 1)
			dh = "V";
		if (z == 2)
			dh = "M";
		if (z == 3)
			dh = "V";
		if (z == 4)
			dh = "V";
		if (z == 5)
			dh = "M";
		if (z == 6)
			dh = "B";
		if (z == 7)
			dh = "N";
		if (z == 8)
			dh = "N";
		if (z == 9)
			dh = "H";
		if (z == 10)
			dh = "H";
		context.fillText(sao[5] + " (" + dh + ")", x[z], y[z] + 15);
		flag[z] = 1;
		temp = z + 2;
		z = check(temp);
		context.fillStyle = '#228B22';
		if (z == 11)
			dh = "M";
		if (z == 12)
			dh = "H";
		if (z == 1)
			dh = "V";
		if (z == 2)
			dh = "V";
		if (z == 3)
			dh = "M";
		if (z == 4)
			dh = "B";
		if (z == 5)
			dh = "M";
		if (z == 6)
			dh = "H";
		if (z == 7)
			dh = "B";
		if (z == 8)
			dh = "V";
		if (z == 9)
			dh = "M";
		if (z == 10)
			dh = "B";
		context.fillText(sao[6] + " (" + dh + ")", x[z], y[z] + 15);
		flag[z] = 1;
		var thienphu = check(14 - tuvi);
		z = thienphu;
		temp = z;
		var d;
		z = check(temp);
		d = 15;
		if (flag[z] == 0)
			d = 0;
		context.fillStyle = '#F9AA07';
		if (z == 11)
			dh = "M";
		if (z == 12)
			dh = "M";
		if (z == 1)
			dh = "M";
		if (z == 2)
			dh = "B";
		if (z == 3)
			dh = "M";
		if (z == 4)
			dh = "B";
		if (z == 5)
			dh = "V";
		if (z == 6)
			dh = "M";
		if (z == 7)
			dh = "B";
		if (z == 8)
			dh = "B";
		if (z == 9)
			dh = "M";
		if (z == 10)
			dh = "V";
		context.fillText(sao[7] + " (" + dh + ")", x[z], y[z] + 15 + d);
		temp = z + 1;
		z = check(temp);
		d = 15;
		if (flag[z] == 0)
			d = 0;
		context.fillStyle = '#000000';
		if (z == 11)
			dh = "M";
		if (z == 12)
			dh = "M";
		if (z == 1)
			dh = "N";
		if (z == 2)
			dh = "H";
		if (z == 3)
			dh = "N";
		if (z == 4)
			dh = "H";
		if (z == 5)
			dh = "H";
		if (z == 6)
			dh = "B";
		if (z == 7)
			dh = "B";
		if (z == 8)
			dh = "V";
		if (z == 9)
			dh = "V";
		if (z == 10)
			dh = "M";
		context.fillText(sao[8] + " (" + dh + ")", x[z], y[z] + 15 + d);
		temp = z + 1;
		z = check(temp);
		d = 15;
		if (flag[z] == 0)
			d = 0;
		context.fillStyle = '#228B22';
		if (z == 11)
			dh = "V";
		if (z == 12)
			dh = "M";
		if (z == 1)
			dh = "B";
		if (z == 2)
			dh = "B";
		if (z == 3)
			dh = "M";
		if (z == 4)
			dh = "H";
		if (z == 5)
			dh = "V";
		if (z == 6)
			dh = "M";
		if (z == 7)
			dh = "B";
		if (z == 8)
			dh = "B";
		if (z == 9)
			dh = "M";
		if (z == 10)
			dh = "H";
		context.fillText(sao[9] + " (" + dh + ")", x[z], y[z] + 15 + d);
		temp = z + 1;
		z = check(temp);
		d = 15;
		if (flag[z] == 0)
			d = 0;
		context.fillStyle = '#000000';
		if (z == 11)
			dh = "V";
		if (z == 12)
			dh = "H";
		if (z == 1)
			dh = "M";
		if (z == 2)
			dh = "M";
		if (z == 3)
			dh = "B";
		if (z == 4)
			dh = "B";
		if (z == 5)
			dh = "V";
		if (z == 6)
			dh = "H";
		if (z == 7)
			dh = "M";
		if (z == 8)
			dh = "M";
		if (z == 9)
			dh = "H";
		if (z == 10)
			dh = "V";
		context.fillText(sao[10] + " (" + dh + ")", x[z], y[z] + 15 + d);
		temp = z + 1;
		z = check(temp);
		d = 15;
		if (flag[z] == 0)
			d = 0;
		context.fillStyle = '#000000';
		if (z == 11)
			dh = "M";
		if (z == 12)
			dh = "M";
		if (z == 1)
			dh = "M";
		if (z == 2)
			dh = "H";
		if (z == 3)
			dh = "V";
		if (z == 4)
			dh = "B";
		if (z == 5)
			dh = "V";
		if (z == 6)
			dh = "N";
		if (z == 7)
			dh = "M";
		if (z == 8)
			dh = "H";
		if (z == 9)
			dh = "N";
		if (z == 10)
			dh = "B";
		context.fillText(sao[11] + " (" + dh + ")", x[z], y[z] + 15 + d);
		temp = z + 1;
		z = check(temp);
		d = 15;
		if (flag[z] == 0)
			d = 0;
		context.fillStyle = '#F9AA07';
		if (z == 11)
			dh = "M";
		if (z == 12)
			dh = "V";
		if (z == 1)
			dh = "M";
		if (z == 2)
			dh = "M";
		if (z == 3)
			dh = "V";
		if (z == 4)
			dh = "H";
		if (z == 5)
			dh = "M";
		if (z == 6)
			dh = "V";
		if (z == 7)
			dh = "H";
		if (z == 8)
			dh = "B";
		if (z == 9)
			dh = "V";
		if (z == 10)
			dh = "H";
		context.fillText(sao[12] + " (" + dh + ")", x[z], y[z] + 15 + d);
		temp = z + 1;
		z = check(temp);
		d = 15;
		if (flag[z] == 0)
			d = 0;
		context.fillStyle = 'purple';
		if (z == 11)
			dh = "V";
		if (z == 12)
			dh = "M";
		if (z == 1)
			dh = "M";
		if (z == 2)
			dh = "H";
		if (z == 3)
			dh = "V";
		if (z == 4)
			dh = "B";
		if (z == 5)
			dh = "V";
		if (z == 6)
			dh = "V";
		if (z == 7)
			dh = "M";
		if (z == 8)
			dh = "N";
		if (z == 9)
			dh = "M";
		if (z == 10)
			dh = "B";
		context.fillText(sao[13] + " (" + dh + ")", x[z], y[z] + 15 + d);
		temp = z + 4;
		z = check(temp);
		d = 15;
		if (flag[z] == 0)
			d = 0;
		context.fillStyle = '#030401';
		if (z == 11)
			dh = "M";
		if (z == 12)
			dh = "V";
		if (z == 1)
			dh = "H";
		if (z == 2)
			dh = "V";
		if (z == 3)
			dh = "V";
		if (z == 4)
			dh = "N";
		if (z == 5)
			dh = "M";
		if (z == 6)
			dh = "M";
		if (z == 7)
			dh = "H";
		if (z == 8)
			dh = "H";
		if (z == 9)
			dh = "V";
		if (z == 10)
			dh = "B";
		context.fillText(sao[14] + " (" + dh + ")", x[z], y[z] + 15 + d);
	}
	for (i = 0; i < 13; i++)
		flag[i] = 1;
	d = 10;
	context.font = 'bold 8pt Arial'; {
		var p;
		var vx = 22 - gio;
		var vk = gio + 2;
		p = check(vx);
		vx = p;
		var dh;
		if (p == 4 || p == 8 || p == 12)
			dh = " (M)";
		if (p == 7 || p == 11 || p == 3)
			dh = " (Đ)";
		if (p == 10 || p == 6 || p == 2)
			dh = " (Đ)";
		if (p == 1 || p == 5 || p == 9)
			dh = " (H)";
		context.fillStyle = 'purple';
		context.textAlign = 'left';
		context.font = 'bold 8pt Arial';
		if (p == 3 || p == 8 || p == 12)
			dh = " (M)";
		if (p == 7 || p == 11 || p == 3)
			dh = " (Đ)";
		if (p == 10 || p == 6 || p == 2)
			dh = " (V)";
		if (p == 1 || p == 5 || p == 9)
			dh = " (H)";
		p = check(vk);
		vk = p;
		context.fillStyle = '#030401';
		context.textAlign = 'left';
		context.font = ' bold 8pt Arial';
	}{
		context.fillStyle = '#030401';
		context.textAlign = 'center';
		if (cuc == 2)
			p = 7;
		if (cuc == 3)
			p = 10;
		if (cuc == 4)
			p = 4;
		if (cuc == 5)
			p = 7;
		if (cuc == 6)
			p = 1;
		context.font = '  8pt Arial';
		if ((cannam % 2 != 0 && gioitinh == 1) || (cannam % 2 == 0 && gioitinh == 0))
			for (i = 1; i <= 12; i++) {
				p = check(p);
				context.fillText(ts[i], x[p], y[p] + 141);
				p++;
			}
		else
			for (i = 1; i <= 12; i++) {
				p = check(p);
				context.fillText(ts[i], x[check(p + 12)], y[check(p + 12)] + 141);
				p = p + 11;
			}
		context.textAlign = 'left';
	}
	
	antapdieu();
	{
		var dichma;
		if (chingay == 1 || chingay == 5 || chingay == 9)
			dichma = 1;
		if (chingay == 2 || chingay == 6 || chingay == 10)
			dichma = 10;
		if (chingay == 3 || chingay == 7 || chingay == 11)
			dichma = 7;
		if (chingay == 4 || chingay == 8 || chingay == 12)
			dichma = 4;
		if (saothem3 == "TCP")
			ansao(0, dichma, "Nhật Mã", 'red');
		if (saothem3 == "TCP")
			ansao(0, check(dichma + 7), "Nhật Hàm Trì", '#000000');
	}{
		var j = checkcan(2 * cannam + thangtk);
		var k = check(thangtk + 2);
		context.font = '  8pt Arial';
		f(j, k);
		if (document.getElementById("ID_LICH").value == 1)
			context.fillText(thangtk + " (tk)", 520, 240 + l * 1);
		g(j);
		if (document.getElementById("ID_LICH").value == 1)
			context.fillText(can[j], 560, 240 + l * 1);
		h(k);
		if (document.getElementById("ID_LICH").value == 1)
			context.fillText(chi[k] + " (tk)", 595, 240 + l * 1);
		f(j, k);
		context.fillText(nh[j][k] + " (tk)", 770, 240 + l * 1);
		context.font = ' 8pt Arial';
		ansao(1, check(k + 10), "Nguyệt Lệnh", 'purple');
		ansao(1, check(chingay + 10), "Nhật Thần", 'purple');
		ansao(1, check(gio + 10), "Thời Thần", 'purple');
	}
	var tuoitemp; {
		i = cannam;
		j = chinam;
		var tuoi = 1;
		while (i != cannamxem || j != chinamxem) {
			tuoi++;
			i++;
			j++;
			if (i > 10)
				i = 1;
			j = check(j);
		}
		if (document.getElementById("ID_LICH").value == 1)
			if (namdl == nam) {
				tuoi = namxemdl - namdl + 1
			} else {
				tuoi = namxemdl - namdl + 2
			};
		tuoitemp = tuoi;
		var cungdaivan = cungmenh;
		var step;
		if ((cannam % 2 != 0 && gioitinh == 1) || (cannam % 2 == 0 && gioitinh == 0))
			step = 1;
		else
			step = -1;
		k = cuc;
		for (i = 0; i < 12; i++) {
			bddaivan = k + i * 10;
			ktdaivan = k - 1 + (i + 1) * 10;
			if (cungdaivan > 12)
				cungdaivan = 1;
			if (cungdaivan == 0)
				cungdaivan = 12;
			if (tuoi >= bddaivan && tuoi <= ktdaivan) {
				break;
			}
			cungdaivan = cungdaivan + step;
		}
		
		
cancung=checkcan(2*cannam+1);		
		var cancungdaivan = checkcan(cungdaivan + cancung - 1);
		chicungdaivan = check(cungdaivan + 2);
	g(10);	
	context.fillText("thuộc Đại Vận", 560, 240 + l * 9);
		g(cancungdaivan);
		
		context.fillText(can[cancungdaivan], 660, 240 + l * 9);

		h(chicungdaivan);
		context.fillText(chi[chicungdaivan], 710, 240 + l * 9);
		
	j=cancungdaivan;
	k=chicungdaivan;
		f(j, k);
		context.fillText(nh[j][k] , 770, 240 + l * 9);
		context.font = ' 8pt Arial';
		
		
		
		
		context.font = '  8pt Arial'
			context.textAlign = 'left'
			context.fillStyle = 'black';
	}
	context.font = '  8pt Arial';
	antuhoalk(cannam, chinam, "");
	antuhoa(cannam, chinam, "");
	context.font = ' 8pt Arial';
	if (id_luudaivan == 1) {
		context.font = '  8pt Arial';
		antuhoalk(cancungdaivan, chicungdaivan, "Đv. ");
		context.font = '  8pt Arial';
		antuhoa(cancungdaivan, chicungdaivan, "Đv. ");
		anlocton(cancungdaivan, "Đv. ");
		anluuxuongkhuc(cancungdaivan, "Đv. ");
		ankhoiviet(cancungdaivan, "Đv. ");
		anthienma(chicungdaivan, "Đv. ");
		anluucungdaivan(chicungdaivan, "Đv. ");
		context.font = '  8pt Arial';
		if (id_luunien == 1) {
			context.fillText("LNĐV tại cung "+ chi[lndv(tuoi,chicungdaivan,bddaivan,chieudaivan)], 330,240 + l * 9);
			
			context.font = '  8pt Arial';
			antuhoalk(cannamxem, chinamxem, "L. ");
			context.font = '  8pt Arial';
			antuhoa(cannamxem, chinamxem, "L. ");
			anlocton(cannamxem, "L. ");
			context.font = '  8pt Arial';
			if (ID_LUUNHAT != 1)
				anluuxuongkhuc(cannamxem, "L. ");
			ankhoiviet(cannamxem, "L. ");
			anluuthaitue(chinamxem, "L. ");
			anthienma(chinamxem, "L. ");
			anluucungluunien(chinamxem, "L. ");
			if (id_luunguyet == 1) {
				if (saothem3 == "TCP") {
					antuhoalk(canthangxem, chithangxem, "N. ");
					antuhoa(canthangxem, chithangxem, "N. ");
					var j = chingayxem;
					var i = canngayxem;
					if (saothem3 == "TCP")
						if (ID_LUUNHAT == 1) {
							context.font = '  8pt Arial';
							context.font = '  8pt Arial';
							antuhoalk(canngayxem, chingayxem, "Nh. ");
							if (ID_LUUTHOI == 1) {
								context.font = '  8pt Arial';
								if (saothem3 == "TCP")
									antuhoalk(cangioxem, chigioxem, "T. ");
							}
						}
				}
			}
		}
	}
	
	
	if (id_luudaivan == 1) {
		if (id_luunien == 1) {
			var luudauquan;
			var tchi = chinamxem + 10;
			tchi = check(tchi);
			luudauquan = tchi + (13 - thang);
			luudauquan = check(luudauquan);
			luudauquan = luudauquan + gio - 1;
			luudauquan = check(luudauquan);
			nguyetvan(luudauquan);
			var ltuankhong;
			var ltrietkhong;
			j = chinamxem;
			for (i = cannamxem; i <= 10; i++) {
				j++;
				j = check(j);
			}
			if (cannamxem == 1 || cannamxem == 6)
				ltrietkhong = 7;
			else if (cannamxem == 2 || cannamxem == 7)
				ltrietkhong = 5;
			else if (cannamxem == 3 || cannamxem == 8)
				ltrietkhong = 3;
			else if (cannamxem == 4 || cannamxem == 9)
				ltrietkhong = 1;
			else if (cannamxem == 5 || cannamxem == 10)
				ltrietkhong = 11;
			context.font = '  8pt Arial';
			context.textAlign = 'left';
			context.fillStyle = 'black';
			ltuankhong = check(j + 10);
			if (saothem3 == "TCP") {
				context.font = '  8pt Arial';
				context.textAlign = 'right';
				context.fillStyle = 'black';
				if (ltuankhong == trietkhong) {
					context.fillText("L.TT", x[check(ltuankhong)] + 92, y[check(ltuankhong)] + 141);
					context.fillText("L.TT", x[check(ltuankhong + 1)] + 92, y[check(ltuankhong + 1)] + 141);
				} else {
					context.fillText("L.T", x[check(ltuankhong)] + 82, y[check(ltuankhong)] + 141);
					context.fillText("L.T", x[check(ltuankhong + 1)] + 82, y[check(ltuankhong + 1)] + 141);
					context.fillText("L.Tr", x[check(ltrietkhong)] + 92, y[check(ltrietkhong)] + 141);
					context.fillText("L.Tr", x[check(ltrietkhong + 1)] + 92, y[check(ltrietkhong + 1)] + 141);
				}
			}
			if (id_luunguyet == 1) {
				luudauquan = tchi + (13 - thang);
				luudauquan = luudauquan + gio - 1;
				luudauquan = check(luudauquan);
				var luunhatvan = check(luudauquan + thangxem - 2 + ngayxem);
				luunhatvan = check(luunhatvan);
				context.textAlign = 'right';
				context.font = '  8pt Arial';
				var tempday;
				var daypos = new Array();
				if (saothem3 == "TCP")
					if (ID_LUUNHAT == 1)
						for (i = 1; i < 13; i++)
							daypos[i] = 0;
				for (k = 1; k < 31; k++) {
					if (k == ngayxem) {
						context.fillStyle = 'deeppurple';
					} else
						context.fillStyle = 'black';
					tempday = check(check(check(luudauquan + thangxem - 2 + k)));
					daypos[tempday]++;
					context.fillText(k + " ", x[tempday] - daypos[tempday] * 16 + 162, y[tempday] + 141);
					if (k == ngayxem) {
						context.globalAlpha = 0.2;
						context.fillStyle = 'blue';
						if (saothem3 == "TCP")
							context.fillRect(x[tempday] + 90, y[tempday] + 129, 55, 14);
						context.globalAlpha = 1;
					}
				}
			}
		}
	}
	
	if (vitrithem3 != 0) {
		context.font = ' 8pt Arial';
		ansao(0, vitrithem3, saothem3, 'purple');
		}{
		var muiten = cungmenh;
		
		if (id_phieuphieu == 0) {
			context.strokeStyle = "black";
			context.moveTo(xx[muiten], yy[muiten]);
			context.lineWidth = 0.5;
			context.lineTo(xx[check(muiten + 6)], yy[check(muiten + 6)]);
			context.stroke();
			context.beginPath();
			context.strokeStyle = "black";
			context.moveTo(xx[muiten], yy[muiten]);
			context.lineWidth = 0.5;
			context.lineTo(xx[check(muiten + 4)], yy[check(muiten + 4)]);
			context.stroke();

			context.beginPath();
			context.strokeStyle = "black";
			context.moveTo(xx[muiten], yy[muiten]);
			context.lineWidth = 0.5;
			context.lineTo(xx[check(muiten + 8)], yy[check(muiten + 8)]);
			context.stroke();
		}
		context.beginPath();
		//context.strokeStyle = '#148AFF';
		//	context.lineWidth = 3;
		var note = cungmenh;
		if (saothem3 == "TCP")
		if (id_luudaivan == 1) {
			note = chicungdaivan;
			if (id_luunien == 1) {
				note = check(chinamxem + 10);
				if (id_luunguyet == 1) {
					note = check(luudauquan + thangxem - 1)
					if (ID_LUUNHAT == 1) {
						note = check(check(check(check(luudauquan + thangxem - 2 + ngayxem))));
						if (ID_LUUTHOI == 1) {
							note = check(luudauquan + thangxem - 3 + ngayxem + 1+INT((gioxem+1)/2));
						}
					}
				}
			}
		}
		if (saothem3 == "TCP") {
			//context.strokeStyle = 'purple';
			//context.beginPath();
			context.globalAlpha=1;
				
			yinyang(context, xx[note], yy[note], 10, 0, 0,'#7D542A');
			context.stroke();
		}
	}
	
	if (cannamthem1 != 0) {
		antuhoalk(cannamthem1, "** ");
	}
	if (cannamthem != 0) {
		antuhoalk(cannamthem, "* ");
	}{
		var xt = new Array();
		var yt = new Array();
		var ww = 300;
		var dd = 150;
		var xa_x = ww / 2;
		var xa_y = 20;
		var ngo_x = xa_x + 300;
		var ngo_y = 20;
		var mui_x = ngo_x + 300;
		var mui_y = 20;
		var than_x = mui_x + 300;
		var than_y = 20;
		var thin_y = xa_y + 150;
		var thin_x = xa_x;
		var mao_x = xa_x;
		var mao_y = thin_y + 150;
		var dan_x = xa_x;
		var dan_y = mao_y + 150;
		var suu_y = dan_y;
		var suu_x = dan_x + 300;
		var ty_x = suu_x + 300;
		var ty_y = suu_y;
		var hoi_x = ty_x + 300;
		var hoi_y = suu_y;
		var dau_x = than_x;
		var dau_y = than_y + 150;
		var tuat_x = dau_x;
		var tuat_y = dau_y + 10;
		xt[1] = dan_x;
		xt[2] = mao_x;
		xt[3] = thin_x;
		xt[4] = thin_x;
		xt[5] = (ngo_x + mui_x) * 0.5;
		xt[6] = (ngo_x + mui_x) * 0.5;
		xt[7] = than_x;
		xt[8] = dau_x;
		xt[9] = tuat_x;
		xt[10] = tuat_x;
		xt[11] = (ty_x + suu_x) * 0.5;
		xt[12] = (ty_x + suu_x) * 0.5;
		xt[0] = x[12];
		xt[-1] = x[11]
			yt[1] = tuat_y + 12 + 170;
		yt[2] = tuat_y + 12 + 170;
		yt[3] = xa_y + 2;
		yt[4] = xa_y + 2;
		yt[5] = ngo_y + 2;
		yt[6] = mui_y + 2;
		yt[7] = than_y + 2;
		yt[8] = than_y + 2;
		yt[9] = tuat_y + 12 + 170;
		yt[10] = tuat_y + 12 + 170;
		yt[11] = yt[9];
		yt[12] = yt[9];
		var tuankhong;
		var trietkhong;
		j = chinam;
		for (i = cannam; i <= 10; i++) {
			j++;
			j = check(j);
		}
		if (cannam == 1 || cannam == 6)
			trietkhong = 7;
		else if (cannam == 2 || cannam == 7)
			trietkhong = 5;
		else if (cannam == 3 || cannam == 8)
			trietkhong = 3;
		else if (cannam == 4 || cannam == 9)
			trietkhong = 1;
		else if (cannam == 5 || cannam == 10)
			trietkhong = 11;
		var temp1;
		var temp2;
		context.textAlign = 'center';
		tuankhong = check(j + 10);
		context.textAlign = 'center';
		if (tuankhong != trietkhong) {
			context.fillStyle = 'black';
			context.fillRect(xt[trietkhong] - 40, yt[trietkhong] + 141, 80, 14);
			context.fillRect(xt[tuankhong] - 40, yt[tuankhong] + 141, 80, 14);
			context.font = " 7pt Arial";
			context.textAlign = 'center';
			context.fillStyle = 'white';
			context.fillText("Tuần", xt[tuankhong], yt[tuankhong] + 152);
			context.font = ' 7pt Arial';
			context.fillText("Triệt", xt[trietkhong], yt[trietkhong] + 152);
		} else {
			context.font = ' 7pt Arial';
			context.fillStyle = 'black';
			context.fillRect(xt[trietkhong] - 40, yt[trietkhong] + 141, 80, 14);
			context.fillStyle = 'white';
			context.textAlign = 'center';
			context.fillText("Tuần-Triệt", xt[trietkhong], yt[trietkhong] + 152);
		}
		if (saothem3 == "TCP") {
			context.textAlign = 'left';
			var j = chingayxem;
			var i = canngayxem;
			if (ID_LUUNHAT == 1) {
				context.font = '  8pt Arial';
				context.font = '  8pt Arial';
				for (i = canngayxem + 1; i <= 10; i++) {
					j++;
				}
				context.textAlign = 'left';
				context.font = '  8pt Arial';
				context.globalAlpha = 0.2;
				context.fillStyle = 'blue';
				context.fillRect(xt[check(j)] - 90, yt[check(j)] + 141, 180, 14);
				context.globalAlpha = 1;
				context.font = ' 8pt Arial';
				context.globalAlpha = 0.2;
				context.globalAlpha = 1;
				context.textAlign = 'left';
			}
		}
		if (id_luunguyet == 1)
			if (ID_LUUNHAT == 1)
				if (ID_LUUTHOI == 1) {
					context.font = '  8pt Arial';
				}
	}
	var cungmenh1 = cungmenh;
	if (vitrithem != 0) {
		context.font = ' 8pt Arial';
		ansao(0, vitrithem, saothem, 'purple');
	}
	if (vitrithem1 != 0) {
		context.font = ' 8pt Arial';
		ansao(0, vitrithem1, saothem1, 'purple');
	}
	if (vitrithem2 != 0) {
		context.font = ' 8pt Arial';
		ansao(0, vitrithem2, saothem2, 'purple');
	}

	
	
	var chugiai;
	chugiai = document.getElementById('CHUGIAI').value;
	context.textAlign = 'left';
	context.fillStyle = "purple";
	if (chugiai != " ")
		context.fillText(chugiai, 378, 240 + l * 5);
	var doicung;
	var bienthu = 0;
	if (id_phieuphieu == 1)
		for (i = 1; i <= 12; i++) {
			phieuphieu(i, "Lộc ---> ", "Kỵ ---> ", "Quyền ---> ", "Khoa ---> ");
		}
	var thedung = cungmenh;
	context.fillStyle = 'white';
	context.textAlign = 'center';
	
	context.strokeStyle = '#7D542A';
		context.shadowColor = '#999';
		context.shadowBlur = 10;
		context.shadowOffsetX = 5;
		context.shadowOffsetY = 5;
	//context.strokeStyle = '#7D542A';
	context.rect(300, 205, 300 * 2, 20);
	context.fillStyle = '#7D542A';
	context.fill();
	context.stroke();

		
	
	context.strokeStyle = '#7D542A';
	context.shadowColor = '#999';
	context.shadowBlur = 0;
	context.shadowOffsetX = 0;
	context.shadowOffsetY = 0;
	//context.strokeStyle = '#7D542A';
	context.rect(300, 205, 300 * 2, 20);
	//context.fillStyle = '#7D542A';
	context.closePath();
	context.fill();
	context.stroke();
	
	
	
	
	
	context.fillStyle = 'blue';
	context.fillStyle = 'red';
	
	context.font = 'italic 16pt Arial';
	context.fillStyle = 'black';
	context.fillStyle = 'black';
	context.fillText("http://trungchaugroup.com", 600, 240 + l * 8);
	context.fillStyle = 'black';
	context.textAlign = 'center';
	context.strokeStyle = 'red';
	context.font = 'italic 18pt Arial';
	context.fillStyle = 'black';
	context.textAlign = 'left';
	context.font = '  18pt Arial';
	context.textAlign = 'center';
	
	var s;
		if (cannam % 2 != 0 && gioitinh == 1)s="Dương Nam ";
		if (cannam % 2 != 0 && gioitinh == 0)s="Dương Nữ ";
		if (cannam % 2 != 1 && gioitinh == 1)			s="Âm Nam ";
		if (cannam % 2 != 1 && gioitinh == 0)			s="Âm Nữ ";
		s=s+tennguoituvi;	context.fillText(s, 600,200);
			context.font = '  8pt Arial';
			context.fillStyle = 'white';
	if (tuvi > 6) {
		thedung = check(thedung + 6);
		tuvi = tuvi - 6;
	}
	context.fillText(tinhhe[tuvi][thedung], 600, 220);
	context.textAlign = 'left';
	context.fillStyle = 'blue';
	if (id_phieuphieu == 1)
		for (cung = 1; cung <= 12; cung++) {
			doicung = check(cung + 6);
			if (check(cung + 12 - phiky[cung]) == 6)
				if (ky == check(cung + 6)) {
					if (loc != ky)
						if (philoc[doicung] != doicung)
							if (phiky[doicung] != doicung) {
								ansao(1, cung, "Nghịch Thủy Kỵ");
								bienthu = 1;
							}
					if (bienthu == 0)
						ansao(1, cung, "Tiết Xuất Kỵ");
				}
			if (phiky[phiky[cung]] == cung)
				if (phiky[cung] != cung)
					ansao(1, cung, "Tuần Hoàn Kỵ");
			if (philoc[phiky[cung]] == cung)
				if (phiky[cung] != check(cung + 6))
					ansao(1, cung, "Thị Phi Kỵ "+pcung[check(phiky[cung] - cungmenh1 + 13)]);
			if (phiky[philoc[cung]] == cung)
				if (philoc[cung] != check(cung + 6))
					ansao(1, cung, "Thị Phi Lộc "+pcung[check(philoc[cung] - cungmenh1 + 13)]);
		}
	if (check(cungmenh + 10) == ky)
		if (phiky[ky] = ky)
			if (ky % 3 == 0)
				ansao(1, ky, "Khiếm Trái Kỵ");
	if ((cungdaivan == cungmenh) || (cungdaivan == check(cungmenh + 4)) || (cungdaivan == check(cungmenh + 8)))
		if ((phiky[cungdaivan] == check(cungmenh + 2)) || (phiky[cungdaivan] == check(cungmenh + 6)) || (phiky[cungdaivan] == check(cungmenh + 10)))
			ansao(1, cungdaivan, "Phản Cung Kỵ");
	if (phiky[1] == 1)
		ansao(1, 1, "Tứ Mã Kỵ");
	if (phiky[4] == 4)
		ansao(1, 4, "Tứ Mã Kỵ");
	if (phiky[7] == 7)
		ansao(1, 7, "Tứ Mã Kỵ");
	if (phiky[10] == 10)
		ansao(1, 10, "Tứ Mã Kỵ");
	if (ky % 3 == 1)
		ansao(1, 10, "Tứ Mã Kỵ");
	if ((ky == 3) || (ky == 6) || (ky == 9) || (ky == 12)) {
		if ((phiky[ky] != ky) && (philoc[ky] != ky))
			ansao(1, ky, "Nhập Khố Kỵ");
		else
			ansao(1, ky, "Tiết Khố Kỵ");
	}
	context.fillStyle = 'black';
		context.fillText(quansat(), 630, 240 + l * 5);
	canvas.addEventListener("mousedown", getPosition, false);
	context.fillStyle = '#F9AA07';
	if (saothem3 == "TCP")
		if (id_luudaivan == 1) {
			cuc = timcuc(cancungdaivan, chicungdaivan);
			if (id_luunien == 1)
				cuc = timcuc(checkcan(cannam * 2 + cungmenh), cungmenh);
		}
	var X = cuc - ngay % cuc;
	if (ngay % cuc == 0)
		X = 0;
	var Y = (ngay + X) / cuc;
	var z;
	if (X % 2 == 0)
		z = Y + X;
	if (X % 2 != 0)
		z = Y - X;
	if (z < 1)
		z = check(z + 12);
	if (id_luudaivan == 1)
		if (id_luunien == 1)
			ansao(1, z, "L. Tọa ");
	if (id_luudaivan == 1)
		if (id_luunien != 1)
			ansao(1, z, "Đv. Tọa");
				var timeline1=new Date();

				ansao(1,1,timeline1-timeline);
				
	dataURL = canvas.toDataURL();
	image4me = dataURL;
	return dataURL;
}
var dataURL;