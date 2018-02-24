$(function(){
	/*图片轮播  无缝*/
	move()

	
	function move(){
		time=null;
		w=$("#page-slider li").width();
		h=$("#page-slider li").length;
		ind=0
		
		$("#img-list").width(w*h);
		$("#page-slider").hover(function(){
			clearInterval(time)
		},function(){
			time=setInterval(show1,1000)
		})
		$("#num-info").find(".cur-num").html("0"+1)
		$("#num-info span:last").html("/0"+h)
	}
	
	time=setInterval(show1,1000);
	function show1(){
		
		if($("#img-list").is(":animated"))return false
		$("#img-list").stop().animate({"left":-w},900,function(){
			$("#img-list>li:first").appendTo($("#img-list"))
			$("#img-list").css("left",0)
		})
		ind++
		if(ind>h-1){
			ind=0
		}
		inde=ind+1
		$("#num-info").find(".cur-num").html("0"+inde)
	}
	function show2(){
		
		if($("#img-list").is(":animated"))return false
		
		$("#img-list>li:last").prependTo($("#img-list"))
		$("#img-list").css("left",-w)
		$("#img-list").stop().animate({"left":0},900)
		ind--
		if(ind<0){
			inde=h
			ind=h-1
		}else{
			inde=ind+1
		}
		$("#num-info").find(".cur-num").html("0"+inde)
	}
	$("#next").on("click",function(){
		show1()
	})
	$("#prev").on("click",function(){
		show2()
	})
})