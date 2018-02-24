$(function(){
	/*点击移动*/
	move()
	/*图片换色以及点击*/
	moves()
	/*显示提示框*/
	shows()

	/*点击移动*/
	function move(){
		var w=$("#fat-list ul").width()
		var	len=$("#fat-list ul").length
		var ind=0
		$("#fat-list").width(w*len)
		var zw=$("#fat-list").width()
		var num=$(".cur-grounp").html()
		$("#next_btn").on("click",function(){
			$(".prev_disabled").removeClass().addClass("prev_btn")
			if($("#fat-list").is(":animated"))return false
			if($("#fat-list").position().left<=-(zw-w))return false
			$("#fat-list").stop().animate({"left":"-="+w},600)
			num++
			if(num>=len){
				num=len
				$("#next_btn").removeClass().addClass("next_disabled")
			}
			$(".cur-grounp").html("0"+num)
		})
		$("#prev_btn").on("click",function(){

			$(".next_disabled").removeClass().addClass("next_btn")

			if($("#fat-list").is(":animated"))return false
			if($("#fat-list").position().left==0)return false
			$("#fat-list").stop().animate({"left":"+="+w},600)
			num--
			if(num<=1){
				num=1
				$(".prev_btn").removeClass().addClass("prev_disabled")
			}
			$(".cur-grounp").html("0"+num)
		})
	}
	/*图片换色以及点击*/
	function moves(){
		$.each($("#my-pro-list>li"),function(i){
			var num=i%6
			switch(num){
				case 0:
				case 5:
				$(this).addClass("red");
				break;
				case 1:
				$(this).addClass("gray");
				break;
				case 4:
				$(this).addClass("gray-2");
				break;
				case 2:
				case 3:
				$(this).addClass("orange");
				break;
			}
		})
		var he=$("#my-pro-list").outerHeight()
		var lih=$("#my-pro-list li").outerHeight()
		$("#downbtn").on("click",function(){
			if($("#my-pro-list").is(":animated"))return false
			if($("#my-pro-list").position().top<=-(he-lih*2)) return false 
			$("#my-pro-list").stop().animate({"top":"-="+lih})
		})
		$("#up").on("click",function(){
			if($("#my-pro-list").is(":animated"))return false
			if($("#my-pro-list").position().top==0) return false 
			$("#my-pro-list").stop().animate({"top":"+="+lih})
		})
	}
	/*显示提示框*/
	function shows(){
		$(".tip").on("click",function(){
			var marks=$("<div class='markbg'></div>")
			$(marks).appendTo("body")
			marks.height($("body").height())
			$("#pro-mask").css("display","block")
		})
		$("#close-mask").on("click",function(){
			$("#pro-mask").css("display","none")
			$(".markbg").remove()
		})
		$("#select").on("click","li",function(){
			$(this).addClass("checked").siblings().removeClass("checked")
		})
		$("#select li:last").on("click",function(){
			$("#confirm").css("display","block")
			$("#confirm li").removeClass()
		})
		$("#select li:first").on("click",function(){
			$("#confirm").css("display","none")
		})
		$("#nobuy").on("click","li",function(){
			$("#select li").removeClass()
			$(this).addClass("checked").siblings().removeClass()
			
		})
	}
})