<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap-switch/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-switch/bootstrap-switch.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.7.5/css/bootstrap-select.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.7.5/js/bootstrap-select.min.js"></script>

</head>

<body>
    <div class="container header">
        <form action="ansao/ansao.php" method="POST" id="submit"> 
            <div class="row">
                <div class="col-md-12">
                    <input type="text" id="id_name" name="name" class="form-control" placeholder="Nhập Họ Tên">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm-6 col-12 gender">
                    <input id="id_nam_nu" type="checkbox" data-on-color="primary" data-off-color="default" data-on-text="Nam" data-off-text="Nữ" checked>
                </div>
                <div class="col-sm-6 col-12 date">
                    <input id="id_am_duong_lich" type="checkbox" data-on-color="success" data-off-color="danger" data-on-text="Dương Lịch " data-off-text="Âm Lịch" checked onchange="ShowHide_Duong_Am_Lich()">
                </div>
            </div>
            <fieldset id="id_lich_1" class="scheduler-border">
                <legend class="scheduler-border">Dương Lịch</legend>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 birth">
                        <div id="change_nam_dl">
                            <select class="selectpicker" data-style="btn-info" data-live-search="true" id="id_nam_dl" name="set_nam_duong">
                                <optgroup label="Năm">
                                    <option>Chọn Năm</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 birth">
                        <div id="change_thang_dl">
                            <select class="selectpicker" data-style="btn-info" data-live-search="true" id="id_thang_dl" name="set_thang_duong">
                                <optgroup label="Tháng">
                                    <option>Chọn Tháng</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 birth">
                        <div id="change_ngay_dl">
                            <select class="selectpicker" data-style="btn-info" data-live-search="true" id="id_ngay_dl" name="set_ngay_duong">
                                <optgroup label="Ngày">
                                    <option>Chọn Ngày</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 birth">
                        <select class="selectpicker selcls" data-style="btn-info" data-live-search="true" id="id_gio_dl" name="set_gio_duong">
                            <optgroup label="Giờ">
                                <option>Chọn Giờ</option>
                                <option value="0"> 0h giờ Tý</option>
                                <option value="1" selected="selected"> 1h giờ Sửu</option>
                                <option value="2"> 2h giờ Sửu</option>
                                <option value="3"> 3h giờ Dần</option>
                                <option value="4"> 4h giờ Dần </option>
                                <option value="5"> 5h giờ Mão</option>
                                <option value="6"> 6h giờ Mão</option>
                                <option value="7"> 7h giờ Thìn </option>
                                <option value="8"> 8h giờ Thìn</option>
                                <option value="9"> 9h giờ Tỵ </option>
                                <option value="10"> 10h giờ Tỵ</option>
                                <option value="11"> 11h giờ Ngọ</option>
                                <option value="12"> 12h giờ Ngọ</option>
                                <option value="13"> 13h-1h chiều giờ Mùi </option>
                                <option value="14"> 14h-2h chiều giờ Mùi</option>
                                <option value="15"> 15h-3h chiều giờ Thân</option>
                                <option value="16"> 16h-4h chiều giờ Thân</option>
                                <option value="17"> 17h-5h chiều giờ Dậu</option>
                                <option value="18"> 18h-6h chiều giờ Dậu</option>
                                <option value="19"> 19h-7h tối giờ Tuất</option>
                                <option value="20"> 20h-8h tối giờ Tuất</option>
                                <option value="21"> 21h-9h tối giờ Hợi </option>
                                <option value="22"> 22h-10h đêm giờ Hợi </option>
                                <option value="23"> 23h-11h giờ Tý hôm sau</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <br>
            </fieldset>
            <fieldset id="id_lich_0" class="scheduler-border">
                <legend class="scheduler-border">Âm Lịch</legend>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 birth">
                        <div id="change_nam_al">
                            <select class="selectpicker" data-style="btn-info" data-live-search="true" id="id_nam_al" name="set_nam_am">
                                <optgroup label="Năm">
                                    <option>Chọn Năm</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 birth">
                        <div id="change_thang_al">
                            <select class="selectpicker" data-style="btn-info" data-live-search="true" id="id_thang_al" name="set_thang_am">
                                <optgroup label="Tháng">
                                    <option>Chọn Tháng</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 birth">
                        <div id="change_ngay_al">
                            <select class="selectpicker" data-style="btn-info" data-live-search="true" id="id_ngay_al" name="set_ngay_am">
                                <optgroup label="Ngày">
                                    <option>Chọn Ngày</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 birth">
                        <select class="selectpicker selcls" data-style="btn-info" data-live-search="true" id="id_gio_al" name="set_gio_am">
                            <optgroup label="Giờ">
                                <option>Chọn Giờ</option>
                                <option value="1" selected="selected"> 23h-1h giờ tý</option>
                                <option value="2"> 1h-3h giờ Sửu</option>
                                <option value="3"> 3h-5h giờ Dần</option>
                                <option value="4"> 5h-7h giờ Mão </option>
                                <option value="5"> 7h-9h giờ Thìn</option>
                                <option value="6"> 9h-11h giờ Tỵ</option>
                                <option value="7"> 11h-13h giờ Ngọ </option>
                                <option value="8"> 13h-15h giờ Mùi</option>
                                <option value="9"> 15h-17h giờ Thân </option>
                                <option value="10"> 17h-19h giờ Dậu</option>
                                <option value="11"> 19h-21h giờ Tuất</option>
                                <option value="12"> 21h-23h giờ Hợi</option>
                            </optgroup>
                        </select>
                    </div>
                    <br>

                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 birth">
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 birth">
                        <input type="checkbox" checked>
                        <span class="thangnhuan">Tháng Nhuận</span>
                    </div>
                </div>
            </fieldset>
            <input type="hidden" name="json" value="" id="json">
            <input type="submit" name="submit" class="form-control row-content row-submit" title="Lập Lá Số" value="Lập Lá Số">
        </form>
    </div>

    <script src="js/bootstrap-switch/highlight.js"></script>
    <script src="js/bootstrap-switch/bootstrap-switch.js"></script>
    <script src="js/bootstrap-switch/main.js"></script>
    <script src="js/xu_ly_DOM/convertlich.js"></script>
    <script src="js/xu_ly_DOM/xu_ly_DOM.js"></script>
    <script src="js/xu_ly_DOM/input.js"></script>
    <script src="js/xu_ly_DOM/chang_date_al_dl.js"></script>
    <script src="js/xu_ly_DOM/conver_hour_al_dl.js"></script>
    <script src="js/xu_ly_DOM/send_json.js"></script>
</body>

</html>
