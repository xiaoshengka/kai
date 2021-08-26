$(function () {
    load();
    $(".note").on({
        keyup: function (e) {
            if (e.keyCode === 13) {
                var mydat = getData();
                mydat.push({ txt: $(this).val() });
                saveData(mydat);
                load();
                $(this).val("");
            }
        },
        focus: function () {
            $(".note").hover(function () {
                $(".submit").fadeIn(500);
            }, function () {
                $(".submit").fadeOut(10);
            })
            if ($(this).val() == "把卷的东西放进来") {
                $(this).val("");
                $(this).css({
                    textAlign: 'left',
                    color: '#000',
                    textIndent: '1em'
                })
            } else {
                $(this).val() = $(this).val();
            }
        },
        blur:function(){
            if ($(this).val() == "") {
                $(this).val("把卷的东西放进来");
                $(this).css({
                    textAlign: 'center',
                    color: '#dacdcdda',
                    textIndent: 0
                })
            } else {
                $(this).val() = $(this).val();
            }
        }
    })
    $("ul").on("click", "a", function () {
        var data = getData();
        var as = $(this).attr("id");
        data.splice(as, 1);
        saveData(data);
        load();
    })
    $(".submit").on({
        click: function () {
            var data = getData();
            if ($(".note").val() != "") {
                data.push({ txt: $(".note").val() });
                saveData(data);
                load();
                $(".note").val("");
            }else{
                return false;
            }
        },
        mouseover:function(){
            $(this).fadeIn(10);
        }
    })

    function getData() {
        var data = localStorage.getItem("txt");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];      //没有数据则返回空
        }
    }

    function saveData(data) {
        localStorage.setItem("txt", JSON.stringify(data));
    }

    function load() {
        var data = getData();
        $("ul").empty();
        $.each(data, function (i, n) {
            $("ul").append("<li><p>" + n.txt + "</p> <a href='javascript:;' id=" + i + "><img src='https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg' alt=''></a></li>");
        })
    }
})
