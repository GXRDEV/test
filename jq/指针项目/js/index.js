$(function(){
	function again(){
		/*焦点图*/
		timer()
		/*关闭弹出界面*/
		close1()
		/*点击箭头*/
		jianbtn()
		/*产品页遮罩层*/
		mark()
		/*产品页切换高度*/
		shows()
	}
	again()

	/*图片轮播*/
	function timer(){
		var time=null
		var len=$("#slider ul li").length
		var ind=0
		zind=2
		$("#slider").hover(function(){
			clearInterval(time)
		},function(){
			time=setInterval(function(){
				ind++
				if(ind>len-1){
					ind=0
				}
				var cur=$("#slider>ul li").eq(ind)
				cur.css("z-index",zind++)
				cur.hide()
				cur.fadeIn(1500)
			},2000)
		})
	}
	/*关闭弹出框*/
	function close1(){
		$(".login_close").on("click",function(){
			$(".user-login").hide()
		})
	}
	/*点击箭头*/
	function jianbtn(){
		$("#btn").on("click",function(){
			if($(this).hasClass("jiantou")){
				$("#content").stop().animate({"width":0},600,function(){
					$("#product-page").stop().animate({"opacity":1},600)
				})
				$(this).removeClass().addClass("jiantou-two").stop().animate({"left":165},600)
				
			}else{
				
				$("#product-page").stop().animate({"opacity":0},600,function(){
					$("#content").stop().animate({"width":1000},600)
				})
				$(this).removeClass().addClass("jiantou").stop().animate({"left":966},1000)

			}
		})
	}
	/*遮罩层*/
	function mark(){
		$(".product-pic").on("mouseenter",".full",function(){
			var w=$(this).outerWidth()
			var h=$(this).outerHeight()
			var strp=$("<p><a href='#'>登录</a><a href='#'>申请试用</a></p>")
			var marks=$("<div class='mask'></div>").html(strp)
			marks.css({"width":w,"height":h})
			$(this).append(marks)
		})
		$(".product-pic").on("mouseleave",".full",function(){
			$(this).find($(".mask")).remove()
		})
	}
	/*产品页切换高度*/
	function shows(){
		$("#pageNo").on("click","span",function(){
			var inde=$(this).index()
			var hei=$(".product-pic-box").height()
			$(this).addClass("curp").siblings().removeClass("curp")
			$("#scroll").stop().animate({"top":-hei*inde})
		})
	}
})