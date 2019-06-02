/*window.onload = function() {
	var tt = getCookie("username");
	alert(tt);
	$(".loginwith").append(tt);
	alert($(".loginwith").val())
}*/
function loadcookie() {
	var tt = getCookie("username");
	$(".loginwith").append(tt);
}

function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if(cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function mywork(){
	$("#mywork").click(function(){
		location.href = "myworkspace.html";
	});
}

function getUrlParam(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			var r = window.location.search.substr(1).match(reg); //匹配目标参数
			if(r != null) return unescape(r[2]);
			return null; //返回参数值
		}

function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg)) {
		return unescape(arr[2]);
	} else {
		return null;
	}
}
var user = getCookie("username");

function quitpage() {
	$("#quit").click(function() {
		delCookie("username");
		delCookie("level");
		location.href = "login.html";
	});
}

