var dataid = 1;

$(document).ready(function () {
    //---------------nas轉換
    $("#nasbutton").click(function () {
        var nasinput = $("#inputnas").val();
        var nasoutput = $("#outputnas").val();

        if (nasinput.length < 1) {
            /*---------input failure---------*/
            $(".notify").toggleClass("activefailure");
            $("#notifyType").addClass("failure");
            $("#error").prepend("failure");

            //$(".feedback").toggleClass("active"); //----------- Notify
            $("#feedbackType").toggleClass("invalid_feedback");

            setTimeout(function () {
                $(".notify").removeClass("activefailure");
                $("#notifyType").removeClass("failure");
            }, 2000);

            return false;
        } else if ((nasinput.indexOf("/") == -1 && nasinput.indexOf("\\") == -1) || nasinput.indexOf("mixcode_workshare") == -1) {
            // 沒偵測到路徑
            $("#outputnas").attr("value", "不是正確路徑");
        } else {
            if (nasinput.indexOf("\\") >= 0) {
                //win -> mac
                var slashtrans = nasinput.replace(/\\/g, "/"); // replace \ -> /
                var nnzz = slashtrans.replace("//diskstation", "/Volumes");

                $("#outputnas").attr("value", nnzz);
                $("#togBtn").prop("checked", true);
            } //mac -> win
            else {
                var slashtrans = nasinput.replace(/\//g, "\\"); // replace / -> \
                var nnzz = slashtrans.replace("\\Volumes\\", "");
                var m = "\\\\diskstation\\" + nnzz;
                $("#outputnas").attr("value", m);
                $("#togBtn").prop("checked", false);
            }

            var copyText = document.getElementById("outputnas"); //---------Copy Text
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");

            $(".notify").toggleClass("active"); //----------- Notify
            $("#notifyType").toggleClass("success");

            setTimeout(function () {
                $(".notify").removeClass("active");
                $("#notifyType").removeClass("success");
            }, 2000);
        }
    });
});

$(document).ready(function () {
    // Ramdom eat
    $("#Eatbutton").click(function () {
        var items = ["二馬", "大安健康餐盒", "廚餘街", "摩斯", "Subway", "全家", "越南河粉", "小勇士炸雞"];
        var randomitems = items[Math.floor(Math.random() * items.length)];
        $("#eatoutput").attr("value", randomitems);
    });
});

$("form").submit(function (e) {
    //防止submit refresh
    e.preventDefault();
});
