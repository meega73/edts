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

    //read data from csv file

    $.getJSON("data.json", function (data) {
        const accordion = $('#accordion');
        accordion.empty();
        $.each(data, function (key, value) {
            accordion.append('<div class="card">' +
                '<div class="card-header" id="heading' + value + '">' +
                '<h5 class="mb-0">' +
                '<button class="btn btn-link" data-toggle="collapse" data-target="#collapse' + key + '" aria-expanded="true" aria-controls="collapse' + key + '">' +
                value.title +
                '</button>' +
                '</h5>' +
                '</div>' +
                '<div id="collapse' + key + '" class="collapse" aria-labelledby="heading' + key + '" data-parent="#accordion">' +
                '<div class="card-body">' +
                value.body +
                '</div>' +
                '</div>' +
                '</div>');
        });
    });

    //read data from csv file
    $.ajax({
        type: "GET",
        url: "data.csv",
        dataType: "text",
        success: function (data) {
            const accordion = $('#accordion');
            accordion.empty();
            const allRows = data.split(/\r?\n|\r/);
            for (let singleRow = 0; singleRow < allRows.length; singleRow++) {
                if (singleRow === 0) {
                    const rowCells = allRows[singleRow].split(',');
                    accordion.append('<div class="card">' +
                        '<div class="card-header" id="heading' + rowCells[0] + '">' +
                        '<h5 class="mb-0">' +
                        '<button class="btn btn-link" data-toggle="collapse" data-target="#collapse' + rowCells[0] + '" aria-expanded="true" aria-controls="collapse' + rowCells[0] + '">' +
                        rowCells[1] +
                        '</button>' +
                        '</h5>' +
                        '</div>' +
                        '<div id="collapse' + rowCells[0] + '" class="collapse" aria-labelledby="heading' + rowCells[0] + '" data-parent="#accordion">' +
                        '<div class="card-body">' +
                        rowCells[2] +
                        '</div>' +
                        '</div>' +
                        '</div>');
                } else {
                    const rowCells = allRows[singleRow].split(',');
                    accordion.append('<div class="card">' +
                        '<div class="card-header" id="heading' + rowCells[0] + '">' +
                        '<h5 class="mb-0">' +
                        '<button class="btn btn-link" data-toggle="collapse" data-target="#collapse' + rowCells[0] + '" aria-expanded="true" aria-controls="collapse' + rowCells[0] + '">' +
                        rowCells[1] +
                        '</button>' +
                        '</h5>' +
                        '</div>' +
                        '<div id="collapse' + rowCells[0] + '" class="collapse" aria-labelledby="heading' + rowCells[0] + '" data-parent="#accordion">' +
                        '<div class="card-body">' +
                        rowCells[2] +
                        '</div>' +
                        '</div>' +
                        '</div>');
                }
            }
        }
    })


});