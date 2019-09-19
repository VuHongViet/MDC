<?php
$MOC=1;$HOA=2;$KIM=4;$THUY=5;$THO=3;


class Thong_tin{
	public $thong_tin_client;
    public $menh;
	public $cuc;
	public $chu_menh;
	public $chu_than;
	public $can_chi;
	

	
}


class La_So{
	public $cung_lap_cuc;

}
class Ngu_Hanh{
	public $ten_ngu_hanh = [];
	public $id_ngu_hanh;
	public $color_code;
		function __construct($ten,$id,$color)
		{
			$this->ten_ngu_hanh = $ten;
			$this->id_ngu_hanh = $id;
			$this->color_code = $color;

		}

}


$obj_ngu_hanh[1]=new Ngu_Hanh("Mộc",1, "#00BF25"); // xanh #00BF25
$obj_ngu_hanh[2]=new Ngu_Hanh("Hỏa",2, "#FD3939"); // đỏ  #FD3939
$obj_ngu_hanh[3]=new Ngu_Hanh("Thổ",3, "#951EB4");// tím #951EB4
$obj_ngu_hanh[4]=new Ngu_Hanh("Kim",4, "#FFD634"); // vàng #FFD634
$obj_ngu_hanh[5]=new Ngu_Hanh("Thủy",5, "#000000"); //đen #000000


class Can {

    public $ten_can ;
    public $id_can ;
   	public $am_duong_can;
		public $ngu_hanh;
		function __construct($ten,$id)
		{
			$this->ten_can=$ten;
			$this->id_can=$id;
			$this->am_duong_can=$id%2;
		}
}
class Chi{
	public $ten_chi = [];
	public $id_chi ;
	public $am_duong_chi;
	public $ngu_hanh;
		function __construct($ten_chi,$id)
		{
			$this->ten_chi=$ten_chi;
			$this->id_chi=$id;
			$this->am_duong_chi= $id%2;
		}

}
class Nap_Am{
	public $id_can;
	public $id_chi;
	public $id_ngu_hanh_don;


	function __construct($id_can,$id_chi)
	{
		$this->id_can=$id_can; //id_can = 1 $num_can[1]=1;
		$this->id_chi=$id_chi; //id_chi = 1 $num_chi[1]=0;
		$num_chi=["",0,0,1,1,2,2,0,0,1,1,2,2]; // 12 can nhung array bat dau tu 0 // cùng hàng
		$num_can=["",1,1,2,2,3,3,4,4,5,5]; // 10 can gộp thành 1 nhóm
		$temp = ($num_can[$this->id_can]+$num_chi[$this->id_chi]-1)%5+1;
		$nap_am_ngu_hanh=[1=>4,5,2,3,1];
		$this->id_ngu_hanh_don=$nap_am_ngu_hanh[$temp];
	}

}
class Sao{
	public $ten;
	public $ngu_hanh;
	public $ngu_hanh_phu;
//	public $id_ngu_hanh;
	public $nam_bac; // bắc = 1 nam =2 trung = 0
	public $ten_nam_bac;
	public $hoa_khi;
	public $cat_hung=1;
	public $loai="phu_tinh";
	public $am_duong_sao;
	function __construct($ten,$ngu_hanh)
	{
		$this->ten = $ten;
		$this->ngu_hanh=$ngu_hanh;

	}
}




class  Cung_Vi
{
	public $can;
	public $chi;
	public $ngu_hanh_don;
	public $ngu_hanh_nap_am;
	public $cuc_so;
	public $sao=[];

}
class Cung_Chuc extends Cung_Vi{
	public $id_cung_chuc;
	public $ten_cung_chuc;

}


$ten_cung_chuc= array(1=>"Mệnh","Phụ Mẫu","Phúc Đức","Điền Trạch","Quan Lộc",
"Giao Hữu","Thiên Di","Tật Ách","Tài Bạch","Tử Nũ","Phu Thê","Huynh Đệ");



$obj_can[1]=new Can("Giáp",1);
$obj_can[2]=new Can("Ất",2);
$obj_can[3]=new Can("Bính",3);
$obj_can[4]=new Can("Đinh",4);
$obj_can[5]=new Can("Mậu",5);
$obj_can[6]=new Can("Kỷ",6);
$obj_can[7]=new Can("Canh",7);
$obj_can[8]=new Can("Tân",8);
$obj_can[9]=new Can("Nhâm",9);
$obj_can[10]=new Can("Quý",10);
for ($i=1;$i<=10;$i++){
	$obj_can[$i]->ngu_hanh=$obj_ngu_hanh[floor(($i+1)/2)]; // tìm ngũ hành của can
}


//var_dump(json_encode($ngu_hanh[2]));

$obj_chi[1]=new Chi("Tý",1); //thủy
$obj_chi[2]=new Chi("Sửu",2);
$obj_chi[3]=new Chi("Dần",3);
$obj_chi[4]=new Chi("Mão",4);
$obj_chi[5]=new Chi("Thìn",5);
$obj_chi[6]=new Chi("Tỵ",6);
$obj_chi[7]=new Chi("Ngọ",7);
$obj_chi[8]=new Chi("Mùi",8);
$obj_chi[9]=new Chi("Thân",9);
$obj_chi[10]=new Chi("Dậu",10);
$obj_chi[11]=new Chi("Tuất",11);
$obj_chi[12]=new Chi("Hợi",12);
//var_dump($chi[2]);

$xxx=[1=>$THUY,$THO,$MOC,$MOC,$THO,$HOA,$HOA,$THO,$KIM,$KIM,$THO,$THUY];
for ($i=1;$i<=12;$i++){
	$obj_chi[$i]->ngu_hanh=$obj_ngu_hanh[$xxx[$i]]; //tý => $obj_ngu_hanh [$xxx[1]]=> $THUY =>5
}


?>
