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
		location.href = "login.html";
	});
}