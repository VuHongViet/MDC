function check(x) {
    return (x + 1200 - 1) % 12 + 1;
}

//Hàm convert sang giờ âm lịch
function hour_dl2al() {
    let hour_dl = parseInt(document.getElementById('id_gio_dl').value);
    return check((Math.floor((hour_dl + 3) / 2)));
}
//Hàm convert sang giờ dương lịch
function hour_al2dl() {
    let hour_al = parseInt(document.getElementById('id_gio_al').value);
    return hour_al * 2 - 2;
}
//jQuery viết cho dễ :))
$(document).ready(function() {

    // Sự kiện khi thay đổi giờ dương lịch thì convert sang giờ âm lịch
    $('#id_gio_dl').change(function() {
        let hour_am_lich = hour_dl2al();
        //thay đổi selected cho giờ âm lịch
        $('select[name=set_gio_am]').val(hour_am_lich);
        $('.selectpicker').selectpicker('refresh');
    })

    // Sự kiện khi thay đổi giờ âm lịch thì convert sang giờ dương lịch
    $('#id_gio_al').change(function() {
            let hour_duong_lich = hour_al2dl();
            console.log(hour_duong_lich);
            //thay đổi selected cho giờ dương lịch
            $('select[name=set_gio_duong]').val(hour_duong_lich);
            $('.selectpicker').selectpicker('refresh');
        })
        //Hàm update lại giờ âm dương khi load trang 
    $(window).on('load', function() {
        let update_hour_am_lich = hour_dl2al();
        $('select[name=set_gio_am]').val(update_hour_am_lich);
        $('.selectpicker').selectpicker('refresh');
    })
})