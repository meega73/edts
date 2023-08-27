$(document).ready(function () {

    //ajax call from demo database to get data
    $.ajax({
        url: "http://localhost:2222/mkt/getall",
        type: 'get',
        http2: true,
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            $.blockUI({ message: '<h1><i class="fa fa-spinner fa-spin"></i></h1>' });
        },
        success: function (result) {
            const accordion = $('#accordion');
            accordion.empty();
            accordion.append(result);

        }
    })

});