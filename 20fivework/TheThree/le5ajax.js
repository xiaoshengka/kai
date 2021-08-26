$(function () {
    $(".submit").on('click', function () {
        $.ajax({
            url: 'http://127.0.0.1:9077/note',
            data: { vl: $(".note").val() },
            type: "GET",
            dataType: "json",
            success: function (data) {
                /* if ($(".note").val() != "") {
                    $("ul").append("<li><p>" + $('.note').val() + "</p> <a href='javascript:;'><img src='https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg' alt=''></a></li>");
                    $(".note").val("");
                    console.log(data.data);
                } else {
                    return false;
                } */
                $("h1").html(data.data);
            }
        })
    })
})