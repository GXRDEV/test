;(function(){
	$.fn.extend({
		move:function(end){
			var star={
				ind:1,
				speed:1000,
				prev:"",
				next:""
			}
			var sett=$.extend({},star,end)
			var uls=$(this).find("ul")
			var len=uls.find("li").length
			var w=uls.find("li").outerWidth()
			var ind=sett.ind
			var speed=sett.speed
			uls.width(len*w)
			var prev=$("#"+sett.prev)
			var next=$("#"+sett.next)
			next.on("click",function(){
				if(uls.is(":animated"))return false
				uls.stop().animate({"left":-ind*w},speed,function(){
					uls.find("li").slice(0,ind).appendTo(uls)
					uls.css("left",0)
				})
			})

			prev.on("click",function(){
				if(uls.is(":animated"))return false
				uls.css("left",-ind*w)
				uls.find("li").slice(len-ind).prependTo(uls)
				uls.stop().animate({"left":0},speed)
			})
		}
	})
})(jQuery)