var dataid =1;

$(document).ready(function() { //---------------nas轉換
    $("#nasbutton").click(function(){
        
        if($("#inputnas").val().length<1) /*---------input failure---------*/
        {	
            $(".notify").toggleClass("activefailure");
            $("#notifyType").addClass("failure");
            $("#error").prepend("failure");

            setTimeout(function(){
                $(".notify").removeClass("activefailure");
                $("#notifyType").removeClass("failure");
            },2000);
            
            return false;
        }
        else {

            var zz = $("#inputnas").val();
            var yy = $("#outputnas").val();

            if(document.getElementById('togBtn').checked) //win -> mac
            {
                var nzz= zz.replace(/\\/g,'/'); // replace \ -> /
                var nnzz=nzz.replace('//diskstation','/Volumes');
                
                $("#outputnas").attr("value",nnzz);						
            }
            else  //mac -> win
            {
                var nzz= zz.replace(/\//g,'\\'); // replace / -> \
                var nnzz=nzz.replace('\\Volumes\\','');
                var m="\\\\diskstation\\"+nnzz;
                $("#outputnas").attr("value",m);	
            }

            var copyText = document.getElementById("outputnas"); //---------Copy Text
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            
            $(".notify").toggleClass("active"); //----------- Notify
            $("#notifyType").toggleClass("success");
            
            setTimeout(function(){
                $(".notify").removeClass("active");
                $("#notifyType").removeClass("success");
            },2000);
        }
    });
});

$(document).ready(function() {// Ramdom eat
    $("#Eatbutton").click(function(){
        var items = ["二馬","大安健康餐盒","廚餘街","摩斯","Subway","全家","越南河粉","小勇士炸雞"];
        var randomitems = items[Math.floor(Math.random()*items.length)];
        $("#eatoutput").attr("value",randomitems);
    });
});

$('form').submit(function(e) { //防止submit refresh
        e.preventDefault();
});