$(document).ready(function() {
    $('#id_nam_dl').change(function() {
        //Lấy năm tháng này dương lịch khi thay đổi năm âm lịch
        let change_nam_al = parseInt($('#id_nam_dl').val());
        let change_thang_al = parseInt($('#id_thang_dl').val());
        let change_ngay_al = parseInt($('#id_ngay_dl').val());
        //convert sang năm âm lịch
        let lunar = convertSolar2Lunar(change_ngay_al, change_thang_al, change_nam_al, 7);
        // gán lại giá trị
        change_nam_al = lunar[2];
        change_thang_al = lunar[1];
        change_ngay_al = lunar[0];
        //thay đổi giá trị năm tháng ngày khi năm bị thay đổi
        $('#change_nam_al').children().find('.pull-left').text(change_nam_al);
        $('#change_thang_al').children().find('.pull-left').text(change_thang_al);
        $('#change_ngay_al').children().find('.pull-left').text(change_ngay_al);

        // thay đổi selected cho select option ngày,tháng, năm âm
        $('select[name=set_ngay_am]').val(change_ngay_al);
        $('select[name=set_thang_am]').val(change_thang_al);
        $('select[name=set_nam_am]').val(change_nam_al);
        $('.selectpicker').selectpicker('refresh');

    })
    $('#id_thang_dl').change(function() {
        //Lấy năm tháng này dương lịch khi thay đổi năm âm lịch
        let change_nam_al = parseInt($('#id_nam_dl').val());
        let change_thang_al = parseInt($('#id_thang_dl').val());
        let change_ngay_al = parseInt($('#id_ngay_dl').val());
        //convert sang năm âm lịch
        let lunar = convertSolar2Lunar(change_ngay_al, change_thang_al, change_nam_al, 7);
        // gán lại giá trị
        change_nam_al = lunar[2];
        change_thang_al = lunar[1];
        change_ngay_al = lunar[0];
        //thay đổi giá trị năm tháng ngày khi năm bị thay đổi
        $('#change_nam_al').children().find('.pull-left').text(change_nam_al);
        $('#change_thang_al').children().find('.pull-left').text(change_thang_al);
        $('#change_ngay_al').children().find('.pull-left').text(change_ngay_al);

        // thay đổi selected cho select option ngày,tháng, năm âm
        $('select[name=set_ngay_am]').val(change_ngay_al);
        $('select[name=set_thang_am]').val(change_thang_al);
        $('select[name=set_nam_am]').val(change_nam_al);
        $('.selectpicker').selectpicker('refresh');
    })
    $('#id_ngay_dl').change(function() {
        //Lấy năm tháng này dương lịch khi thay đổi năm âm lịch
        let change_nam_al = parseInt($('#id_nam_dl').val());
        let change_thang_al = parseInt($('#id_thang_dl').val());
        let change_ngay_al = parseInt($('#id_ngay_dl').val());
        //convert sang năm âm lịch
        let lunar = convertSolar2Lunar(change_ngay_al, change_thang_al, change_nam_al, 7);
        // gán lại giá trị
        change_nam_al = lunar[2];
        change_thang_al = lunar[1];
        change_ngay_al = lunar[0];
        //thay đổi giá trị năm tháng ngày khi năm bị thay đổi
        $('#change_nam_al').children().find('.pull-left').text(change_nam_al);
        $('#change_thang_al').children().find('.pull-left').text(change_thang_al);
        $('#change_ngay_al').children().find('.pull-left').text(change_ngay_al);

        // thay đổi selected cho select option ngày,tháng, năm âm
        $('select[name=set_ngay_am]').val(change_ngay_al);
        $('select[name=set_thang_am]').val(change_thang_al);
        $('select[name=set_nam_am]').val(change_nam_al);
        $('.selectpicker').selectpicker('refresh');

    })
    $('#id_nam_al').change(function() {
        //Lấy năm tháng này âm lịch khi thay đổi năm âm lịch
        let change_nam_dl = parseInt($('#id_nam_al').val());
        let change_thang_dl = parseInt($('#id_thang_al').val());
        let change_ngay_dl = parseInt($('#id_ngay_al').val());
        //convert sang dương lịch
        let solar = convertLunar2Solar(change_ngay_dl, change_thang_dl, change_nam_dl, 0, 7);
        // gán lại giá trị
        change_nam_dl = solar[2];
        change_thang_dl = solar[1];
        change_ngay_dl = solar[0];
        //thay đổi giá trị năm tháng ngày khi năm bị thay đổi
        $('#change_nam_dl').children().find('.pull-left').text(change_nam_dl);
        $('#change_thang_dl').children().find('.pull-left').text(change_thang_dl);
        $('#change_ngay_dl').children().find('.pull-left').text(change_ngay_dl);

        // thay đổi selected cho select option ngày,tháng, năm âm
        $('select[name=set_ngay_duong]').val(change_ngay_dl);
        $('select[name=set_thang_duong]').val(change_thang_dl);
        $('select[name=set_nam_duong]').val(change_nam_dl);
        $('.selectpicker').selectpicker('refresh');
    })
    $('#id_thang_al').change(function() {
        //Lấy năm tháng này âm lịch khi thay đổi năm âm lịch
        let change_nam_dl = parseInt($('#id_nam_al').val());
        let change_thang_dl = parseInt($('#id_thang_al').val());
        let change_ngay_dl = parseInt($('#id_ngay_al').val());
        //convert sang dương lịch
        let solar = convertLunar2Solar(change_ngay_dl, change_thang_dl, change_nam_dl, 0, 7);
        // gán lại giá trị
        change_nam_dl = solar[2];
        change_thang_dl = solar[1];
        change_ngay_dl = solar[0];
        //thay đổi giá trị năm tháng ngày khi năm bị thay đổi
        $('#change_nam_dl').children().find('.pull-left').text(change_nam_dl);
        $('#change_thang_dl').children().find('.pull-left').text(change_thang_dl);
        $('#change_ngay_dl').children().find('.pull-left').text(change_ngay_dl);

        // thay đổi selected cho select option ngày,tháng, năm âm
        $('select[name=set_ngay_duong]').val(change_ngay_dl);
        $('select[name=set_thang_duong]').val(change_thang_dl);
        $('select[name=set_nam_duong]').val(change_nam_dl);
        $('.selectpicker').selectpicker('refresh');
    })
    $('#id_ngay_al').change(function() {
        //Lấy năm tháng này âm lịch khi thay đổi năm âm lịch
        let change_nam_dl = parseInt($('#id_nam_al').val());
        let change_thang_dl = parseInt($('#id_thang_al').val());
        let change_ngay_dl = parseInt($('#id_ngay_al').val());

        //convert sang dương lịch
        let solar = convertLunar2Solar(change_ngay_dl, change_thang_dl, change_nam_dl, 0, 7);
        // gán lại giá trị
        change_nam_dl = solar[2];
        change_thang_dl = solar[1];
        change_ngay_dl = solar[0];
        //thay đổi giá trị năm tháng ngày khi năm bị thay đổi
        $('#change_nam_dl').children().find('.pull-left').text(change_nam_dl);
        $('#change_thang_dl').children().find('.pull-left').text(change_thang_dl);
        $('#change_ngay_dl').children().find('.pull-left').text(change_ngay_dl);

        // thay đổi selected cho select option ngày,tháng, năm âm
        $('select[name=set_ngay_duong]').val(change_ngay_dl);
        $('select[name=set_thang_duong]').val(change_thang_dl);
        $('select[name=set_nam_duong]').val(change_nam_dl);
        $('.selectpicker').selectpicker('refresh');
    })
})