<?php  session_start();
if(isset($_SESSION['data'])){
	$json= $_SESSION['data'];
	$obj= (json_decode($json,true));

} ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="container"></div>
    <div id="demo"></div>
</body>
<script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"> </script> 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script>
    var obj = null;
	obj = <?php echo json_encode($obj) ?>;
    console.log(obj);
    
    var paper  = Raphael("container", 1080, 1920);
    var w = 720/4;
    var h = 980/4;
    var hh = 4*h;
    var ww = 4*w;
    function txt(text,x,y,size,color='black'){

return paper.text(x,y, text)
.attr({"font-family": "Time New Roman","font-size": size,'text-anchor': 'start','fill':color});

}
function line(x1,y1,x2,y2,stroke_width,color){
  var s = "M" + x1 + ',' + y1 + "L" + x2 + ',' + y2;
if (color!=null)  return paper.path(s).attr({"stroke-width":3,"stroke":color}) ;
	else
  return paper.path(s).attr({"stroke-width":4}) ;
}

line(2,2,2,4*h-2);
line(2,2,4*w-2,2);
line(4*w,2,4*w-2,4*h-2);
line(2,4*h,4*w,4*h);

line(2,h,ww,h);
line(2,2*h,w,2*h);
line(3*w,2*h,ww,2*h);
line(2,3*h,ww,3*h);
line(w,2,w,hh);
line(2*w,2,2*w,h);
line(2*w,3*h,2*w,hh);
line(3*w,2,3*w,hh);

//set up 

var x=[];
var y=[];
x[1]=2;y[1]=3*h;
x[2]=2;y[2]=2*h;
x[3]=2;y[3]=h;
x[4]=2;y[4]=2;
x[5]=w;y[5]=2;
x[6]=2*w;y[6]=2;
x[7]=3*w;y[7]=2;
x[8]=3*w;y[8]=h;
x[9]=3*w;y[9]=2*h;
x[10]=3*w;y[10]=3*h;
x[11]=2*w;y[11]=3*h;
x[12]=w;y[12]=3*h;

var sao_chinh_tinh = [] ;
var sao_phu_tinh = [] ;
var sao_vts = [] ;
var id_cot_1=[];
var id_cot_2=[];
var id_chinh_tinh=[];
var id_vts = [];
var cung_chuc=[];

for (var i=1;i<=12;i++){
		id_cot_1[i]=0;
		id_cot_2[i]=0;
		id_chinh_tinh[i]=0;
		id_vts[i]=0;
		cung_chuc[i]={};
		cung_chuc[i].sao=[];
		
}

function an_la_so(obj){}


function an_sao(obj){
	//obj.cat_hung=Math.floor(Math.random()*2);
	if (obj.loai == "chinh_tinh")
	{	
		id_chinh_tinh[obj.vi_tri]++;
		sao_chinh_tinh =  txt(obj.ten.toUpperCase(),x[obj.vi_tri]+w/2,y[obj.vi_tri]+18*id_chinh_tinh[obj.vi_tri]+15,
		14,		obj.ngu_hanh.color_code).attr({'text-anchor': 'middle',"font-weight" : "bold"});
		
	}
	else if (obj.loai == "vts")
	{
		id_vts[obj.vi_tri]++;
		sao_vts= txt(obj.ten.toUpperCase(),x[obj.vi_tri]+w/2,y[obj.vi_tri] + h -20,
		8,		obj.ngu_hanh.color_code).attr({'text-anchor': 'middle',"font-weight" : "bold"});
	}
	else{
	if (obj.cat_hung==0){
			id_cot_1[obj.vi_tri]++;
			sao_phu_tinh=	txt(obj.ten,x[obj.vi_tri]+10,y[obj.vi_tri]+20*id_cot_1[obj.vi_tri]+60,12,obj.ngu_hanh.color_code);

		}
		else
		{	id_cot_2[obj.vi_tri]++;
			sao_phu_tinh= txt(obj.ten,x[obj.vi_tri]+(w/2)+5,y[obj.vi_tri]+20*id_cot_2[obj.vi_tri]+60,12,obj.ngu_hanh.color_code);
		}
	}
	
}


function an_thong_tin(obj){
	txt("Dương Nam",1.5*w,h+30,14);
	txt("Mệnh: " + obj.thong_tin.menh



	,1.5*w,h+45,14);
	txt("Cục: " + obj.thong_tin.cuc.ten_cuc,1.5*w,h+60,14).attr({"fill":obj.thong_tin.cuc.color_code }); 
	txt("Chủ Mệnh: ",1.5*w,h+75,14);
	txt("Chủ Thân: ",1.5*w,h+90,14);
	txt("Thân cư " + obj.obj_cung_vi[obj.thong_tin.id_than_cung].id_ten_cung_chuc,1.5*w,h+105,14);

	// ngày tháng năm sinh 
	txt("DL",w+10,2*h+20,14);
	txt("ÂL",w+10,2*h+40,14);
	txt("Năm",w+75,2*h,14);	//
	txt(obj.thong_tin.thong_tin_client.Duong_Lich.nam_dl,w+75,2*h+20,14);
	txt(obj.thong_tin.thong_tin_client.Am_Lich.nam_al,w+75,2*h+40,14);
	txt("Tháng",w+150,2*h,14);	//
	txt(obj.thong_tin.thong_tin_client.Duong_Lich.thang_dl,w+150,2*h+20,14);
	txt(obj.thong_tin.thong_tin_client.Am_Lich.thang_al,w+150,2*h+40,14);
	txt("Ngày",w+225,2*h,14); //
	txt(obj.thong_tin.thong_tin_client.Duong_Lich.ngay_dl,w+225,2*h+20,14);
	txt(obj.thong_tin.thong_tin_client.Am_Lich.ngay_al,w+225,2*h+40,14);
	txt("Giờ",w+300,2*h,14);
	txt(obj.thong_tin.thong_tin_client.Duong_Lich.gio_dl,w+300,2*h+20,14);
	txt(obj.thong_tin.thong_tin_client.Am_Lich.gio_al,w+300,2*h+40,14);
	// Can chi 
	txt("Can Chi",w+10,2*h+80,14);
	txt("Nạp Âm",w+10,2*h+100,14);
	
	// Thời gian xem 
	txt("Thời gian xem:",w+10,2*h+180,14);
	txt("Ngày Lập: " + obj.thong_tin.thong_tin_client.ngay_lap,w+10,2*h+220,14)
}

an_thong_tin(obj);



for (var cung=1;cung<=12;cung++){
	var list_sao=obj.cung_chuc[cung].sao;
	var arrayLength = list_sao.length;
	// tên cung chức
	txt(obj.obj_cung_vi[cung].id_ten_cung_chuc.toUpperCase(),x[cung]+w/2,y[cung]+15,18)
	.attr({'text-anchor': 'middle',"font-weight" : "bold"});
	// đại vận
	txt(obj.obj_cung_vi[cung].dai_van,x[cung]+15,y[cung]+20,8)
	.attr({'text-anchor': 'middle',"font-weight" : "bold"});
	// cung vi
	txt(obj.obj_cung_vi[cung].obj_can.ten_can+' '+obj.obj_cung_vi[cung].obj_chi.ten_chi,x[cung]+20,y[cung]+10,8)
	.attr({'text-anchor': 'middle'});
	
	for (var i = 0; i < arrayLength; i++) {
	cung_chuc[cung].sao.push(an_sao(list_sao[i]));
	}	
	
}

</script>

</html>