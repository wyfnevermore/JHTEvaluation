var fouce_li_num = -1;///默认没有选择任何下拉内容
var width_ = 220;//这里设置的是搜索框的宽度，目的为了与下面的列表宽度相同
var li_color = "#F5F5F5";//默认的下拉背景颜色
var li_color_ = "#CCC";//当下拉选项获取焦点后背景颜色

function bindSearchEl(obj,urlPath,changeFlag,callbakFunc,showField,fieldArray,widthVal) {
	var fileData;
	if(urlPath.indexOf(".data")>0){
		$.ajaxSettings.async = false;
		$.getJSON (urlPath,function (json){
			fileData = json;
		});
	}else{
		fileData = urlPath;
	}
	obj.off().on({
		keyup:function(event) {
			keyEvent($(this),event, obj, fileData,changeFlag,callbakFunc,showField,fieldArray);
		},
		compositionend:function(event){
			keyEvent($(this),event, obj, fileData,changeFlag,callbakFunc,showField,fieldArray);
		}});
	//当焦点从搜索框内离开则，隐藏层
	$("body").click(function() {
		$("#foraspcn").hide();
	});
	///创建隐藏的div，用来显示搜索下的内容
	$("body").append("<div id='foraspcn'></div>");
	if(typeof(widthVal)!=undefined){
		width_ = widthVal;
	}
	$("#foraspcn").css({
		"width" : "" + width_ + "px",
		"background" : "#F5F5F5",
		"position" : "absolute",
		"z-index" : "1999",
		"list-style" : "none",
		"border" : "solid #E4E4E4 1px",
		"display" : "none"
	});//这里设置列下拉层的样式，默认为隐藏的
}
//定义非开始运行函数
function delkeycode(keycode) {// 去除了不必要的按键反应，当比如删除，f1 f2等按键时，则返回
	var array = [ 9, 16, 19, 20, 27, 33, 34, 35, 36, 45, 91, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 145, 192 ];
	for (i = 0; i < array.length; i++) {
		if (keycode == array[i]) {
			return true;
			break;
		}
	}
	return false;
}


function keyEvent(obj,event, obj, fileData,changeFlag,callbakFunc,showField,fieldArray){
	var keycode = event.keyCode;
	if (delkeycode(keycode)) return;
	if(changeFlag!=null){
		changeFlag(false);
	}
	var key_ = obj.val();// 获取搜索值
	var top_ = obj.offset().top;// 获搜索框的顶部位移
	var left_ = obj.offset().left;// 获取搜索框的左边位移
	if (keycode == 13) {
		if (fouce_li_num >= 0) {
			var josnDataTmp = JSON.parse($("#foraspcn >li:eq(" + fouce_li_num + ")").attr("jsonData"));
			obj.val(josnDataTmp[showField]);
			if(callbakFunc!=null){
				callbakFunc(josnDataTmp,obj);
			}
			if(changeFlag!=null){
				changeFlag(true);
			}
			$("#foraspcn >li:eq(" + fouce_li_num + ")").parent().hide();
			fouce_li_num = -1;
		} else {
			// ///当没有选中下拉表内容时 则提交form 这里可以自定义提交你的搜索
		}
		$("#foraspcn").hide();
	} else if (keycode == 40) {// 单击键盘向下按键
		fouce_li_num++;
		var li_allnum = $("#foraspcn >li").css("background-color", li_color).size();
		if (fouce_li_num >= li_allnum && li_allnum != 0) {// 当下拉选择不为空时
			fouce_li_num = 0;
		} else if (li_allnum == 0) {
			fouce_li_num--;
			return;
		}
		$("#foraspcn >li:eq(" + fouce_li_num + ")").css("background-color", li_color_);
	} else if (keycode == 38) {// 点击键盘向上按键
		fouce_li_num--;
		var li_allnum = $("#foraspcn >li").css("background-color", li_color).size();
		if (fouce_li_num < 0 && li_allnum != 0) {// 当下拉选择不为空时
			fouce_li_num = li_allnum - 1;
		} else if (li_allnum == 0) {
			fouce_li_num++;
			return;
		}
		$("#foraspcn >li:eq(" + fouce_li_num + ")").css("background-color", li_color_);
	} else {// 进行数据查询，显示查询结果
		fouce_li_num = -1;
		$("#foraspcn").empty();
		// /ajax调用 这里使用的是 测试内容
		var jSToObject = [];
		var lineCount = 0;
		var inputText = obj.val();
		for(var i=0;i<fileData.length;i++){
			if(lineCount>10){
				break;
			}
			if(inputText.trim()==""){
				jSToObject.push(fileData[i]);
				lineCount++;
				continue;
			}
			for(var j=0;j<fieldArray.length;j++){
				if(fileData[i][fieldArray[j]].toUpperCase().indexOf(inputText.toUpperCase())>-1){
					jSToObject.push(fileData[i]);
					lineCount++;
					break;
				}
			}
		}
		for ( var json in jSToObject) {
			var jsonData = JSON.stringify(jSToObject[json]);
			$("#foraspcn").append("<li style='width:" + width_ + "px;' jsonData='"+jsonData+"'>" + jSToObject[json][showField] + "</li>");
		}
		$("#foraspcn >li").mouseover(function() {
			$(this).css("background-color", li_color_);
		});
		$("#foraspcn >li").mouseout(function() {
			$(this).css("background-color", li_color);
		});
		$("#foraspcn >li").click(function() {
			obj.val($.trim($(this).text()));
			if(callbakFunc!=null){
				callbakFunc(JSON.parse($(this).attr("jsonData")),obj);
			}
			if(changeFlag!=null){
				changeFlag(true);
			}
			$(this).parent().hide();
		});
		//赋值完毕后进行显示
		$("#foraspcn").show().css({"top" : top_ + 22, "left" : left_ });
	}
}