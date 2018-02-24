;(function(){
	$.fn.move=function(end){
		var star={
			ind:0,
			inds:1,
			high:"",
			speed:900,
			effect:"",
			anima:"top",
			play:false,
			settime:1000,
			prev:"",
			next:"",
			names:""
		}
		var sett=$.extend({},star,end)
		var len=$(this).length
		var w=$("#bottom div").outerWidth()
		var names=$(sett.names)
		var speed=sett.speed
		var time=null,play=sett.play,ind=sett.ind
		var next=$(sett.next),prev=$(sett.prev)
		var inds=sett.inds
		var high=sett.high
		var top=$(this).parent()

		if(sett.anima=="left"){
			names.width((len+1)*w)
		}
		function auto(){
			time=setInterval(showa,sett.settime)
		}
		auto()

		top.children("li").eq(0).addClass(high)

		function showa(){
			if(names.is(":animated"))return false
			ind++
			if(ind>len-1){
				ind=0
				names.children("div").first().clone().appendTo(names)
				names.stop().animate({"marginLeft":-len*w},speed,function(){
					names.css("marginLeft",0)
					names.children("div").last().remove()
				})
				
				top.children("li").eq(0).addClass(high).siblings().removeClass(high)
			}else{
				shows(ind)
			}
		}
		function showb(){
			if(names.is(":animated"))return false
			ind--
			if(ind<0){
				names.children("div").slice(-1).clone().prependTo(names)
					names.css("marginLeft",-w)
					names.stop().animate({"marginLeft":0},speed,function(){
					names.children("div:first").remove();
					names.css("margin-left",-(len-1)*w);
				})
				ind=len-1
			}else{
				names.stop().animate({"marginLeft":-ind*w},speed)
			}
			
			
			top.children("li").eq(ind).addClass(high).siblings().removeClass(high)
		}
		function shows(){
			top.children("li").eq(ind).addClass(high).siblings().removeClass(high)
			if(sett.effect=="slice"){
				if(sett.anima=="left"){
					names.stop().animate({"marginLeft":-ind*w},speed)
				}else if(sett.anima=="top"){
					names.stop().animate({"marginTop":-inds*w},speed)
				}
			}else{
				names.children("div").eq(ind).fadeIn(speed).siblings().fadeOut(speed)
			}
			
		}
		names.parent().hover(function(){
			clearInterval(time)
		},function(){
			time=setInterval(showa,sett.settime)
		})


		top.children("li").on("click",function(){
			ind=$(this).index()
			shows()
		})
		next.on("click",function(){
			showa()
		})
		prev.on("click",function(){
			showb()
		})
	}
})(jQuery)