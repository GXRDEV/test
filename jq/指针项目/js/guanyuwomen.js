$(function(){
	function again(){
		/*遮罩层*/
		mark()
		/*图片滚动*/
		move()
		/*tab切换 人物简介*/
		show1()
	}
	again()



	/*遮罩层*/
	function mark(){
		$("#hzicon").on("mouseenter","a",function(){
			$(this).find(".amark").css({"display":"block"})
			$(this).find("div").css("display","block")
		})
		$("#hzicon").on("mouseleave","a",function(){
			$(this).find($(".amark")).css("display","none")
			$(this).find("div").css("display","none")
		})
	}

	/*图片滚动*/
	function move(){
		var hei=$("#icon-scroll").height()
		var he=$("#icon-scroll img").height()

		
		$(".downbtn").on("click",function(){
			if($("#icon-scroll").is(":animated"))return false
			if($("#icon-scroll").position().top<-(hei-he*3))return false
			$("#icon-scroll").stop().animate({"top":"-="+he},600)
		})
		$(".topbtn").on("click",function(){
			if($("#icon-scroll").is(":animated"))return false
			if($("#icon-scroll").position().top==0)return false
			$("#icon-scroll").stop().animate({"top":"+="+he},600)
		})
	}
	/*tab切换*/
	function show1(){

		$(".rw_info").eq(4).show().siblings().hide()
		$("#team").on("mouseenter","a",function(){
			var ind1=$(this).index()
			$(this).addClass("curItem").siblings().removeClass("curItem")
			$(".rw_info").eq(ind1).show().siblings().hide()
		})

	}

})