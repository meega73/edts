$(document).ready(function () {
    getallData()
    //ajax call from demo database to get data
    function getallData() {
        $.ajax({
            url: "http://demo.eldoradotrucking.com:2222/mkt/getall",
            type: 'get',
            http2: true,
            dataType: 'json',
            contentType: 'application/json',
            success: function (result) {
                const accordion = $('#accordion');
                accordion.empty();
                accordion.append(result);

            }
        })
    }

    //onchange event for status
    $('#accordion').on('change', 'input', function () {
        const status = $(this).val();
        const id = $(this).attr('data-id');
        var feild
        $(this).hasClass('status') ? feild = 'Status' : feild = 'contacted_by';
        const data = { id: id, thisField: feild, value: status };
        $.ajax({
            url: "http://demo.eldoradotrucking.com:2222/mkt/update",
            type: 'post',
            http2: true,
            dataType: 'json',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (result) {
                getallData()
                console.log(result);
            }
        })
    })


});