$(function(){
	var divlen=$(".pic-wrap").children("div").length
	var divwidth=$(".pic-wrap").children("div").width()
	var divindex=1
	var divindexs=0
	$(".pic-wrap").width(divlen*divwidth)
	//右点击
	$("#next").on("click",function(){
		divindexs++
		if(divindexs>divlen-1){
			divindexs=0
		}
		if($(".pic-wrap").is(":animated")) return false
		$(".pic-wrap").stop().animate({"marginLeft":-divwidth*divindex},1000,function(){
			$(".pic-wrap div").slice(0,divindex).appendTo(".pic-wrap")
			$(".pic-wrap").css("marginLeft",0)
		})
		$(".num-nav").children().eq(divindexs).addClass("on").siblings().removeClass("on")
	})
	//左点击
	$("#prev").on("click",function(){
		divindexs--
		if(divindexs<0){
			divindexs=divlen-1
		}
		$(".pic-wrap").css("marginLeft",-divwidth*divindex)
		$(".pic-wrap div").slice(divlen-1).prependTo(".pic-wrap")
		$(".pic-wrap").stop().animate({"marginLeft":0},1000)
		$(".num-nav").children().eq(divindexs).addClass("on").siblings().removeClass("on")
	})
	//点击出现按钮
	$(".btn").on("click",function(){
		$(".layer").stop().animate({"left":0},function(){
			$(".btn").fadeOut()
			$(".tit-x img").fadeOut()
		})

	})
	$(".close").on("click",function(){
		$(".layer").stop().animate({"left":-200})
		$(".layer").css("width","200")
		$(".btn").fadeIn()
		$(".tit-x img").fadeIn()
		$(".layer .sma-layer").stop().animate({"left":-100})
		$(".layer ul li").removeClass("hover")
	})
	
	$(".layer ul li").on("click",function(){
		var inde=$(this).index()
		$(this).addClass("hover").siblings().removeClass("hover")
		$(".pics div").eq(inde).addClass("cur").siblings().removeClass("cur")
		$(".layer .sma-layer").stop().animate({"left":200})
		$(".layer").css("width","500")
		$(".smar").stop().animate({"left":13})
		$(".toggle-btn span").addClass("lx")
	})
	//向左出现框
	$(".layer .toggle-btn").on("click",function(){
		var spa=$(this).find("span")
		if(spa.hasClass("allow lIcon lx")){
			$(".smar").stop().animate({"left":-287},function(){
				spa.removeClass("allow lIcon lx").addClass("allow rIcon rx")
				$(".layer").css("width","213")
			})
		}else{
			$(".layer").css("width","500")
			spa.removeClass("allow rIcon rx").addClass("allow lIcon lx")
			$(".smar").stop().animate({"left":13})
		}

	})
	//上下按钮
	var lens=$(".pics dl").height()
	var lang=lens/2
	$(".down-btn").on("click",function(){
		$(".cur").stop().animate({"marginTop":-lens},600,function(){
			$(".cur dl").first().appendTo(".cur")
			$(".cur").css("marginTop",0)
		})
		//那条黑线
		if($("#notice").is(":animated")){return false}
		if($("#notice").position().top>=400){
			$("#notice").stop().animate({"top":0})
		}else{
			$("#notice").stop().animate({"top":"+="+lang})
		}
	})
	$(".up-btn").on("click",function(){
		$(".cur").css("marginTop",-lens)
		$(".cur dl").last().prependTo(".cur")
		$(".cur").stop().animate({"marginTop":0},600)
		//那条黑线
		if($("#notice").is(":animated")){return false}
		if($("#notice").position().top<=0){
			$("#notice").stop().animate({"top":400})
		}else{
			$("#notice").stop().animate({"top":"-="+lang})
		}
	})

	/*瀑布流*/
	var width1=$(".wf-box").width()
	var len=parseInt($(".waterfall-r").width()/width1)
	var arr=[]
	var p=0
	function move(star,end){
		for(var i=star;i<end;i++){
			var h=$(".waterfall-r .wf-box").eq(i).height()
			if(i<len){
				arr.push(0)
			}
			var minh=Math.min.apply(Math,arr)
			var minindex=arr.indexOf(minh)
			$(".wf-box").eq(i).stop().animate({"left":minindex*width1,"top":minh})
			arr[minindex]+=h
			p++
		}
		
	}
	move(0,$(".wf-box").length)

	function move1(){
		move(p,$(".wf-box").length)
		var maxh=Math.max.apply(Math,arr)
		var maxindex=arr.indexOf(maxh)
		for(var i=0;i<21;i++){
			$(".waterfall-r").find(".wf-box").eq(i).clone().css({"left":maxindex*width1,"top":maxh}).appendTo($(".waterfall-r"));
		}
	}

	$(window).on("scroll",function(){
		var hei=$(document).height()-$(window).height()
		if($(window).scrollTop()>=hei){
			move1()
		}
	})
	
})