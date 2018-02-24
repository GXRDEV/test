$(function () {
	var arr=[]
	//选择城市
	$("#city-list").on("click","span",function(){
		var txt=$(this).text()
		$("#current-city").show().text(txt)
		$(this).parents(".cur-show").hide().siblings().show()
		arr=[]
	})
	//更多城市点击
	$("#slide").on("click",function(){
		if($(this).text()=="更多"){
			$(this).parent().prev().css("height","auto")
			$(this).text("收起")
		}else{
			$(this).parent().prev().css("height","25px")
			$(this).text("更多")
		}
	})
	//"全国目的地"点击
	$("#all").on("click",function(){
		$(".cur-show").show().siblings().hide()
	})
	//每一个span点击
	$(".rows").on("click","span",function(){
		//获取span祖先元素.rows的下标
		var index1=$(this).parents(".rows").index()
		//将user-select-list下li的下标与.rows的下标相关联
		var index2=$("#user-select-list").children("li").eq(index1)
		var text1=$(this).text()
		//console.log(text1)
		//console.log(index2)
		//判断，当前元素的父级元素是否为li
		if($(this).parent().is("li")){
			$(this).addClass("on").parent().siblings().find("span").removeClass("on")
		}else{
			$(this).addClass("on").siblings().removeClass("on")
		}
		var lis="<span>"+text1+"<em>X</em></span>"
		$(index2).html(lis)
	})
	//删除
	$("#user-select-list").on("click","em",function(){
		var index3=$(this).parent().parent().index()
		//删除对应的样式
		$(".rows").eq(index3).find("span").removeClass("on")
		//删除当前元素
		$(this).parent().remove()
	})
	//多选
	$(".check-box :checkbox").on("click",function(){
		var len=$(".check-box :checked").length
		if(len>5){
			//如果选取的复选框超过5个，则不能选取
			$(this).prop("checked",false)
			alert("最多选取五个景点")
		}
	})
	//确认按钮
	//建立空数组，放到外面

	$("#done").on("click",function(){
		$(this).addClass("cur-btn").siblings().removeClass("cur-btn")
		var check=$(".check-box :checked").next()
		$.each(check,function(){
			//选中多选按钮的下一个元素的文本
			var text2=$(this).text()
			if(arr.indexOf(text2)==-1){
				var str="<span>"+text2+"<em>X</em></span>"
				$("#user-select-list li").eq(0).append(str)
				arr.push(text2)
			}
		})
		
	})
	//取消按钮
	$("#cancel").on("click",function(){
		$(this).addClass("cur-btn").siblings().removeClass("cur-btn")
		$(".check-box :checkbox").prop("checked",false)
	})
})