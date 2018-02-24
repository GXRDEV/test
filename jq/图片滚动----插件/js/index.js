;(function(){
	$.fn.move=function(end){
		var stars={
			ind:1,
			time:500,
			prev:"",
			next:"",
			move1:"mouseover"
		}
		var sett=$.extend({},stars,end)
		var uls=$(this).find("ul")
		var w=uls.children("li").outerWidth()
		var len=uls.children("li").length
		var ind=sett.ind
		var time=sett.time
		uls.css("width",w*len)
		var prev=$("#"+sett.prev)
		var next=$("#"+sett.next)
		var move1=sett.move1
		next.on(move1,function(){
			if(uls.is(":animated"))return false
			uls.stop().animate({"marginLeft":-ind*w},time,function(){
				uls.find("li").slice(0,ind).appendTo(uls)
				uls.css("marginLeft",0)
			})
		})
		prev.on(move1,function(){
			if(uls.is(":animated"))return false
			uls.css("marginLeft",-ind*w)
			uls.find("li").slice(len-ind).prependTo(uls)
			uls.stop().animate({"marginLeft":0},time)
		})
		
	}
})(jQuery);