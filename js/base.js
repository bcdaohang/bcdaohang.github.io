

function _validatelogin() {
    if ($.trim($("#loginform [name=mno]").val()) === '') {
        $("#loginform [name=mno]").focus();
        return false;
    }

    if ($.trim($("#loginform [name=mpwd]").val()) === '') {
        $("#loginform [name=mpwd]").focus();
        return false;
    }

    if ($.trim($("#loginform [name=logincode]").val()) === '') {
        $("#loginform [name=logincode]").focus();
        return false;
    }
    return true;
}



function getCookie(c_name) {
    if (document.cookie.length > 0) {//�Ȳ�ѯcookie�Ƿ�Ϊ�գ�Ϊ�վ�return ""
        c_start = document.cookie.indexOf(c_name + "=")//ͨ��String�����indexOf()��������cookie�Ƿ���ڣ������ھ�Ϊ -1����
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1//������+1��ʵ���Ǳ�ʾ"="�����������ͻ�ȡ����cookieֵ�Ŀ�ʼλ��
            c_end = document.cookie.indexOf(";", c_start)//��ʵ�Ҹտ���indexOf()�ڶ���������ʱ����Ȼ�е��Σ�������������ʾָ���Ŀ�ʼ������λ��...�����Ϊ�˵õ�ֵ�Ľ���λ�á���Ϊ��Ҫ�����Ƿ������һ�����ͨ��";"���Ƿ�������ж�
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))//ͨ��substring()�õ���ֵ�����˽�unescape()����֪��escape()����ʲô�ģ����Ǻ���Ҫ�Ļ��������˽�Ŀ��������£������½�β��Ҳ����н���cookie����ϸ��
        }
    }
    return ""
}


function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 15 * 60000);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/"; ;
}




function dyniframesize(down) {
    var pTar = null;
    if (document.getElementById) {
        pTar = document.getElementById(down);
    }
    else {
        eval('pTar = ' + down + ';');
    }
    if (pTar && !window.opera) {
        //begin resizing iframe 
        pTar.style.display = "block"
        if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight) {
            //ns6 syntax 
            pTar.height = pTar.contentDocument.body.offsetHeight + 20;
            pTar.width = pTar.contentDocument.body.scrollWidth + 20;
        }
        else if (pTar.Document && pTar.Document.body.scrollHeight) {
            //ie5+ syntax 
            pTar.height = pTar.Document.body.scrollHeight;
            pTar.width = pTar.Document.body.scrollWidth;
        }
    }
}



function _ts(obj, cid) {
    $("#ifm_ts").attr("src", "ts.aspx@i=" + cid + "&r=" + Date.parse(new Date()))
    $("#div_ts").css("left", jQuery(obj).offset().left).css("top", jQuery(obj).offset().top + jQuery(obj).outerHeight()).hide().show();
    //����#divShow��������������Ϊ�ı�������������ߵľ��롣
    //����#divShow���붥���ľ���Ϊ�ı�����붥���ľ�������ԡ���������������������������������������������������������������������������������������������������߶ȡ�
}


function _ts_hide(obj, cid) {
    $("#div_ts").hide();
    $("#ifm_ts").attr("src", "") //����#divShow��������������Ϊ�ı�������������ߵľ��롣
    //����#divShow���붥���ľ���Ϊ�ı�����붥���ľ�������ԡ���������������������������������������������������������������������������������������������������߶ȡ�
}


function _go(u, isv) {
    if (!isv) {
        document.getElementById("go_continue").href = unescape(u || "");
        showid('fengxiandiv');
        return;
    }
    window.open(unescape(u || ""));
}


function show_lhcrec(u) {
    window.open("six.aspx");
}



function showid(idname) {
    while (document.getElementById("layer")) {
        document.body.removeChild(document.getElementById("layer"))
    }

    var isIE = (document.all) ? true : false;
    var isIE6 = isIE && ([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6);
    var newbox = document.getElementById(idname);
    newbox.style.zIndex = "9999";
    newbox.style.display = "block"
    newbox.style.position = !isIE6 ? "fixed" : "absolute";
    newbox.style.top = newbox.style.left = "50%";
    newbox.style.marginTop = -newbox.offsetHeight / 2 + "px";
    newbox.style.marginLeft = -newbox.offsetWidth / 2 + "px";


    var layer = document.createElement("div");
    layer.id = "layer";
    layer.style.width = layer.style.height = "100%";
    layer.style.position = !isIE6 ? "fixed" : "absolute";
    layer.style.top = layer.style.left = 0;
    layer.style.backgroundColor = "#000";
    layer.style.zIndex = "9998";
    layer.style.opacity = "0.6";
    document.body.appendChild(layer);

    var closeX = document.getElementById("closeX")
    closeX.style.position = !isIE6 ? "fixed" : "absolute";
    closeX.style.paddingLeft = "630px";
    closeX.style.width = "40px";
    closeX.style.height = "40px";
    closeX.style.fontSize = "larger";
    closeX.style.fontWeight = "bold";
    closeX.style.float = "right";


    var sel = document.getElementsByTagName("select");
    for (var i = 0; i < sel.length; i++) {
        sel[i].style.visibility = "hidden";
    }
    function layer_iestyle() {
        layer.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) + "px";
        layer.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px";
    }
    function newbox_iestyle() {
        newbox.style.marginTop = document.documentElement.scrollTop - newbox.offsetHeight / 2 + "px";
        newbox.style.marginLeft = document.documentElement.scrollLeft - newbox.offsetWidth / 2 + "px";
    }
    if (isIE) { layer.style.filter = "alpha(opacity=60)"; }
    if (isIE6) {
        layer_iestyle()
        newbox_iestyle();
        window.attachEvent("onscroll", function () {
            newbox_iestyle();
        })
        window.attachEvent("onresize", layer_iestyle)
    }
    layer.onclick = function () {
        newbox.style.display = "none"; layer.style.display = "none"; for (var i = 0; i < sel.length; i++) {
            sel[i].style.visibility = "visible";
        }
    }
}




function loadlhc() {
    $.getJSON("ashx/adHandler.ashx", { action: "getlhcdata", r: Date.parse(new Date()) }, function (data) {
        if (!data)
            return;
        loadlhc_data(data.lhcdata);
        $("#ad_lhc").replaceWith(data.ad.adcontent);
    });
}

function loadlhc_data(d) {
    if (!d)
        return;
    $("#lhc_current_qihao").html(d.qihao + "��");
    var ld = [];
    if (!d)
        return;
    $("#lhc_current_qihao").html(d.qihao + "��");
    var ld = [];
    if (!d.n1 || d.n1 == 0) {
        ld.push("<span style=\"display:block;width:420px;text-align:center;\">" + d.status + "</span>");
    }
    else {
        ld.push("<span class=\"shenx r1\">" + d.n1 + "</span>" + (d.x1 || "&nbsp;&nbsp;"));
        ld.push("<span class=\"shenx r2\">" + d.n2 + "</span>" + (d.x2 || "&nbsp;&nbsp;"));
        ld.push("<span class=\"shenx r3\">" + d.n3 + "</span>" + (d.x3 || "&nbsp;&nbsp;"));
        ld.push("<span class=\"shenx r4\">" + d.n4 + "</span>" + (d.x4 || "&nbsp;&nbsp;"));
        ld.push("<span class=\"shenx r5\">" + d.n5 + "</span>" + (d.x5 || "&nbsp;&nbsp;"));
        ld.push("<span class=\"shenx r6\">" + d.n6 + "</span>" + (d.x6 || "&nbsp;&nbsp;"));
        ld.push("<span style=\"margin-left:10px;\">+</span>");
        ld.push("<span class=\"shenx r7\">" + d.n7 + "</span>" + (d.x7 || "&nbsp;&nbsp;"));
    }



    $("#lhc_current_qihao").html(d.qihao + "��").attr("title", d.status);
    $("#lhc_current_data").html(ld.join(' '));

    var nk = new Date(d.next_kjdate.toString().replace(/-/g, "default.htm"));
    var nk_month = nk.getMonth() + 1 > 10 ? nk.getMonth() + 1 : "0" + (nk.getMonth() + 1);
    var nk_day = nk.getDate() > 10 ? nk.getDate() : "0" + nk.getDate();

    $("#lhc_next_data").html(d.next_qihao + "����" + nk_month + "��" + nk_day + "�� " + " " + nk.getHours() + ":" + nk.getMinutes() + " ����" + ['��', 'һ', '��', '��', '��', '��', '��', ][nk.getDay()] + "����");


}

function openHistory() {
    window.open('lhc_history.aspx@y=' + new Date().getFullYear(), '', 'scrollbars=1,width=680,height=300,left=' + (screen.width - 680) / 2 + ',top=' + (screen.height - 300) / 2);
}

function showxxx(x) {
    if (x == 1) {
        if (document.getElementById("showxxx1").o == "1") {
            document.getElementById("liveiframe").src = "about:blank";
            document.getElementById("liveiframe").style.display = "none";
            document.getElementById("showxxx1").innerHTML = "<img src='skin/tf1.gif' border='0' />";
            document.getElementById("showxxx1").o = "0";
        }
        else {
            document.getElementById("liveiframe").src = "../live.live8bo.com_3A892/free.html";
            document.getElementById("liveiframe").style.display = "";
            document.getElementById("showxxx1").innerHTML = "<img src='skin/tf1_.gif' border='0' />";
            document.getElementById("showxxx2").innerHTML = "<img src='skin/tf2.gif' border='0' />";
            document.getElementById("showxxx3").innerHTML = "<img src='skin/tf3.gif' border='0' />";
            document.getElementById("showxxx1").o = "1";
            document.getElementById("showxxx2").o = "0";
            document.getElementById("showxxx3").o = "0";
        }
    }
    else if (x == 2) {
        if (document.getElementById("showxxx2").o == "1") {
            document.getElementById("liveiframe").src = "about:blank";
            document.getElementById("liveiframe").style.display = "none";
            document.getElementById("showxxx2").innerHTML = "<img src='skin/tf2.gif' border='0' />";
            document.getElementById("showxxx2").o = "0";
        }
        else {
            document.getElementById("liveiframe").src = "../basket.7m.cn/free_big.aspx@tz=+0800";
            document.getElementById("liveiframe").style.display = "";
            document.getElementById("showxxx2").innerHTML = "<img src='skin/tf2_.gif' border='0' />";
            document.getElementById("showxxx1").innerHTML = "<img src='skin/tf1.gif' border='0' />";
            document.getElementById("showxxx3").innerHTML = "<img src='skin/tf3.gif' border='0' />";
            document.getElementById("showxxx2").o = "1";
            document.getElementById("showxxx1").o = "0";
            document.getElementById("showxxx3").o = "0";
        }
    }
    else if (x == 3) {
        if (document.getElementById("showxxx3").o == "1") {
            document.getElementById("liveiframe").src = "about:blank";
            document.getElementById("liveiframe").style.display = "none";
            document.getElementById("showxxx3").innerHTML = "<img src='skin/tf3.gif' border='0' />";
            document.getElementById("showxxx3").o = "0";
        }
        else {
            document.getElementById("liveiframe").src = "../bf.bet007.com/ft.aspx@Edition=&type=0&lang=1&ad=&adurl=&color=EEEEEE&sound=";
            document.getElementById("liveiframe").style.display = "";
            document.getElementById("showxxx1").innerHTML = "<img src='skin/tf1.gif' border='0' />";
            document.getElementById("showxxx3").innerHTML = "<img src='skin/tf3_.gif' border='0' />";
            document.getElementById("showxxx2").innerHTML = "<img src='skin/tf2.gif' border='0' />";
            document.getElementById("showxxx3").o = "1";
            document.getElementById("showxxx1").o = "0";
            document.getElementById("showxxx2").o = "0";
        }

    }
}


function _loadad() {
    $.getJSON("ashx/adHandler.ashx", { action: "getfontad", r: Date.parse(new Date()) }, function (data) {
        if (!data)
            return;

        loadlhc_data(data.lhcdata);
        for (var i in data.json) {
            if (!data.json[i])
                continue;
            switch (data.json[i].adposition) {
                //                case "�ƽ��²�":  
                //                    $("#ad_tj_img").replaceWith(data.json[i].adcontent);  
                //                    break;  
                //                case "�ƽ��²�����":  
                //                    $("#ad_tj_text").replaceWith(data.json[i].adcontent);  
                //                    break;  

                //                case "�ȷ��²�":  
                //                    $("#ad_bf").replaceWith(data.json[i].adcontent);  
                //                    break;  

                //                case "��Ѷ�²�":  
                //                    $("#ad_zx").replaceWith(data.json[i].adcontent);  
                //                    break;  

                //                case "�����²�":  
                //                    $("#ad_remen").replaceWith(data.json[i].adcontent);  
                //                    break;  
                //                case "�����²�":  
                //                    $("#ad_xy").replaceWith(data.json[i].adcontent);  
                //                    break;  
                //                case "��Ѷ�²�":  
                //                    $("#ad_zx").replaceWith(data.json[i].adcontent);  
                //                    break;  

                case "���ϲ��Ƽ�":
                    $("#ad_lhc").replaceWith(data.json[i].adcontent);
                    break;

                //                case "�����²�":  
                //                    $("#ad_zq_img").replaceWith(data.json[i].adcontent);  
                //                    break;  

                //                case "�����²�����":  
                //                    $("#ad_zq_text").replaceWith(data.json[i].adcontent);  
                //                    break;  
                //                case "��Ʊ�²�":  
                //                    $("#ad_cp_img").replaceWith(data.json[i].adcontent);  
                //                    break;  
                //                case "��Ʊ�²�����":  
                //                    $("#ad_cp_text").replaceWith(data.json[i].adcontent);  
                //                    break;  

                //                case "����":  
                //                    $("#ad_top").replaceWith(data.json[i].adcontent);  
                //                    break;   

                case "ͼ���Ҳ�":
                    $("#ad_menu_right").replaceWith(data.json[i].adcontent);
                    break;

                //                case "�˵��²�":  
                //                    $("#ad_cd").replaceWith(data.json[i].adcontent);  
                //                    break;  

                //                case "�˵��ϲ�":  
                //                    $("#ad_cd_top").replaceWith(data.json[i].adcontent);  
                //                    break;  
                //                case "�����²�":  
                //                    $("#ad_kj").replaceWith(data.json[i].adcontent);  
                //                    break;  


                //                case "�ղ��²�":  
                //                    $("#ad_sc").replaceWith(data.json[i].adcontent);  
                //                    break;  

                case "��վ�ײ�":
                    $("#footer").replaceWith(data.json[i].adcontent);

                    break;

                case "��վ����":
                    $("#ad_notice").replaceWith(data.json[i].adcontent);
                    break;

                case "���ٱȷ�":
                    $("#nav_score").attr("href", data.json[i].adcontent);
                    break;

                case "��վͼ��":
                    $("#cimg,#head_logo").replaceWith("<img src=\"" + data.json[i].adcontent + "\" alt=\"\" />");

                    break;

                case "��������":
                    $("#ad_float_top").append(data.json[i].adcontent);
                    break;

                case "��ม��":
                    $("#ad_float_left").append(data.json[i].adcontent);
                    break;

                case "�Ҳม��":
                    $("#ad_float_right").append(data.json[i].adcontent);
                    break;

            }

        }
    });
}



function print_date() {
    var now = new Date();
    $("#date_now").html(now.getFullYear() + "��" + (now.getMonth() + 1) + "��" + now.getDate() + "�� " + " ����" + ['��', 'һ', '��', '��', '��', '��', '��', ][now.getDay()]);
}


function _addFav(o, id) {
    var $o = $(o);
    $(".SC_con").remove(".tips");
    if (win_user.islogin) {

        $.getJSON("ashx/favHandler.aspx", { id: id, action: "insert" }, function (_d) {
            if (_d && _d.code != "S") {
                alert(_d.message);
                return;
            }
        });

    } else {
        var _cookie = getCookie("qxw_fc");
        var arr = _cookie.split(',');
        if (arr.length > 99) {
            alert("�ղ�����Ϊ100��");
            return;
        }

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == id) {
                alert("�����");
                return;
            }
        }
        arr.unshift(id)
        $.cookie("qxw_fc", arr.join(','), { path: 'default.htm' });

    }


    $("li[data-cid=" + id + "] ul ").find("li:last a").replaceWith("<a href=\"javascript:void(0)\" onclick=\"_removeFav(this," + id + ")\">ȡ���ղ�</a>");


    var _o = $("li[data-cid=" + id + "] ul ").find("li:last a").parent(".relv").parent().parent(".relv").clone();

    $("#favourites").prepend(_o).find("li[data-cid=" + id + "] ul ").trigger("mouseout");

}

function _removeFav(o, id) {
    if (win_user.islogin) {

        $.getJSON("ashx/favHandler.aspx", { id: id, action: "remove" }, function (_d) {
            if (_d && _d.code != "S") {
                alert(_d.message);
                return;
            }
        });

    }
    else {
        var _cookie = getCookie("qxw_fc");
        var arr = _cookie.split(',');
        var arr2 = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == id)
                continue;
            arr2.push(arr[i]);
        }

        $.cookie("qxw_fc", arr2.join(','), { path: 'default.htm' });

    }




    $("#favourites li[data-cid=" + id + "]").remove();

    $("li[data-cid=" + id + "] ul ").find("li:last a").replaceWith("<a href=\"javascript:void(0)\" onclick=\"_addFav(this," + id + ")\">����ղ�</a>");
}






$(document).ready(function () {
    $('.j_nav').delegate("li", "mouseover", function () {
        $(this).children(".pull-down").show();
        $(this).addClass("relv");
    });

    $('.j_nav').delegate("li", "mouseout", function () {
        $(this).children(".pull-down").hide();
        $(this).removeClass("relv");
    })



    $(".in_s_right").each(function () {
        var _this = $(this);
        _this.find("a").bind("click", function () {
            var _atext = $(this).text();
            $(_this.attr("controlid")).find(">li").each(function () {
                var $this = $(this);
                if (_atext === "ȫ��") {
                    $this.show();
                    return true;
                }
                if ($this.attr("data-cpy")[0] && $this.attr("data-cpy")[0] === _atext) {
                    $this.show();
                }
                else {
                    $this.hide();
                }
            });

        });
    });

    print_date();
    _loadad();

    $("#closeX").bind("click", function () {
        $("#layer").each(function (j, o) {

            $(o).click()
        });
    });

    $(":button.keyBtn,.sea_btn").bind("click", function () {
        var _sv = $("[name=sv]").val($(this).prev(":text").val());

        if ($.trim(_sv.val()) === "") {
            alert("������ؼ���");
            return;
        }

        if (_sv.val().length > 10) {
            alert("�ؼ����10λ");
            return;
        }

        $("#form_search").submit();
    });

    _checklogin();

})



var win_user = { username: "", islogin: false };

function _checklogin() {
    $.getJSON("ashx/memHandler.ashx", { action: "checklogin", r: Date.parse(new Date()) }, function (data) {
        if (!data)
            return;
        win_user.username = data.username;
        win_user.islogin = data.islogin;

        var _html = [];
        if (data.islogin) {
            _html.push(data.username + "��ӭ���ٱ�վ <a href=\"memedit.aspx\" class=\"login\">�޸�����</a>");
            _html.push("<a href=\"javascript:void(0);\" class=\"login\" onclick=\"javascript:window.location.href='ashx/regHandler.aspx@action=loginout';return false;\">��ȫ�ǳ�</a>");
        }
        else {
            _html.push("<form id=\"loginform\" action=\"ashx/loginHandler.aspx@l=index\" method=\"post\" onsubmit=\"return _validatelogin();\">");
            _html.push("<div class=\"nav_r\">");
            _html.push("    �û�����<input type=\"text\" class=\"in\" name=\"mno\" />");
            _html.push("    ���룺<input type=\"password\" class=\"in\" name=\"mpwd\" />");
            _html.push("    ��֤��:<input type=\"text\" name=\"logincode\" class=\"required\" size=\"3\" />");
            _html.push("    <img alt=\"\" src=\"webtools/verify_code.ashx@action=login&r=" + Date.parse(new Date()) + "\"");
            _html.push("     onclick=\"this.src ='webtools/verify_code.ashx@action=reg&t=' + Math.random();\" style=\"cursor: pointer\" />");
            _html.push("    <label>");
            _html.push("    <input type=\"checkbox\" name=\"autologin\" value=\"1\" />�Զ���½</label>");
            _html.push("    <input type=\"submit\" class=\"login\" name=\"login\" value=\"��½\" />");
            _html.push("<input type=\"button\" class=\"login\" value=\"ע��\" onclick=\"javascript:window.location.href='reg.aspx'\" />");

            _html.push("</div>");
            _html.push("</form>");
        }
        $("#favourites").html(data.favourite);
        if ($("#favourites").children().length === 0) {
            $("#favourites").after(" <div class=\"tips\"><span class=\"ico\"></span>ע���ղؼ��û�����������Զ�����վ��</div>")
        }
        $("#loginBox").html(_html.join(''));
    });



}