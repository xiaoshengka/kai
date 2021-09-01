$(function () {
    var api = 'e240c2cb5d7c95530b0a57353c53b8b6';
    $(".add1").click(function () {
        $.ajax({
            url: "http://api.tianapi.com/txapi/worldtime/index?key=" + api + "&city=" + $("#input1").val(),
            type: 'get',
            dataType: "json",
            success: function (data, status) {
                console.log(data);
                var li=$("<li class='itli libgc1'>国家:"+JSON.stringify(data.newslist[0].country)+" 城市:"+JSON.stringify(data.newslist[0].city)+" 时间:"+JSON.stringify(data.newslist[0].strtime)+" <a href='javascript:;'>✘</a></li>");
                $(".box1 ul").prepend(li);
            }
        });
    });
    $(".add2").click(function () {
        $.ajax({
            url: "http://api.tianapi.com/txapi/lunar/index?key=" + api + "&date=" + $("#input2").val(),
            type: 'get',
            dataType: "json",
            success: function (data, status) {
                console.log(data);
                var li=$("<li class='itli libgc2'>季节:"+JSON.stringify(data.newslist[0].lmonthname)+" <br>公历日期:"+JSON.stringify(data.newslist[0].gregoriandate)+" <br>农历日期:"+JSON.stringify(data.newslist[0].lunardate)+" <br>农历节日:"+JSON.stringify(data.newslist[0].lunar_festival)+" <br>适宜:"+JSON.stringify(data.newslist[0].fitness)+" <br>不宜:"+JSON.stringify(data.newslist[0].taboo)+" <br>星宿:"+JSON.stringify(data.newslist[0].xingsu)+" <a href='javascript:;'>✘</a></li>");
                $(".box2 ul").prepend(li);
            }
        });
    });
    $(".add3").click(function () {
        $.ajax({
            url: "http://api.tianapi.com/txapi/caihongpi/index?key=" + api,
            type: 'get',
            dataType: "json",
            success: function (data, status) {
                console.log(data);
                var li=$("<li class='itli libgc3'>舔狗:"+JSON.stringify(data.newslist[0].content)+" <a href='javascript:;'>✘</a></li>");
                $(".box3 ul").prepend(li);
            }
        });
    });
    $("#input1").on({
        focus: function () {
            if ($(this).val() == '请输入主要城市名' ) {
                $(this).val('');
                $(this).css({ color: 'black' });
            }
        },
        blur: function () {
            if ($(this).val() == '') {
                $(this).css({ color: '#ccc' });
                $(this).val('请输入主要城市名');
            }
        }
    })
    $("#input2").on({
        focus: function () {
            if ($(this).val() == '时间，如:2021-08-30' ) {
                $(this).val('');
                $(this).css({ color: 'black' });
            }
        },
        blur: function () {
            if ($(this).val() == '') {
                $(this).css({ color: '#ccc' });
                $(this).val('时间，如:2021-08-30');
            }
        }
    })
    $("#city").on({
        click:function(){
            $(".box2").css('display','none');
            $(".box3").css('display','none');
            $(".box1").css('display','inline-block');
        }
    })
    $("#stuff").on({
        click:function(){
            $(".box1").css('display','none');
            $(".box3").css('display','none');
            $(".box2").css('display','inline-block');
        }
    })
    $("#pi").on({
        click:function(){
            $(".box2").css('display','none');
            $(".box1").css('display','none');
            $(".box3").css('display','inline-block');
        }
    })
    $(".box1 ul").on("click","a",function(){
        $(this).parent().remove();
    })
    $(".box2 ul").on("click","a",function(){
        $(this).parent().remove();
    })
    $(".box3 ul").on("click","a",function(){
        $(this).parent().remove();
    })
})