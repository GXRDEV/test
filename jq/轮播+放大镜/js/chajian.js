;(function($){
	$.fn.move=function(end){
		var star={
			ind:1,
			prev:"",
			next:"",
			type:"click",
			speed:600,
			max:"",
			right:"",
			img:"",
			mark:""
		}
		var sett=$.extend({},star,end)
		var prev=$(sett.prev)
		var next=$(sett.next)
		var type=sett.type
		var speed=sett.speed
		var ul=$(this).find("ul")
		var w=ul.find("li").width()
		var len=ul.find("li").length
		var max=$(sett.max)
		var right=$(sett.right)
		var img=sett.img
		var mark=$(sett.mark)

		ul.width(w*len)
		ul.children().first().children().clone().appendTo(max)
		ul.children().first().children().clone().appendTo(right)
		ul.on(type,img,function(){
			max.children().remove()
			$(this).clone().appendTo(max)
			mark.prependTo(max)
			right.children().remove()
			$(this).clone().appendTo(right)
		})
		next.on(type,function(){
			if(ul.is(":animated"))return false
			ul.stop().animate({"marginLeft":-w},speed,function(){
				ul.children().first().appendTo(ul)
				$(this).css("marginLeft",0)
			})
			max.children().remove()
			ul.children().eq(1).children().clone().appendTo(max)
			mark.prependTo(max)
			right.children().remove()
			ul.children().eq(1).children().clone().appendTo(right)
		})
		prev.on(type,function(){
			if(ul.is(":animated"))return false
			ul.children().last().prependTo(ul)
			ul.css("marginLeft",-w)
			ul.stop().animate({"marginLeft":0},speed)
			max.children().remove()
			ul.children().first().children().clone().appendTo(max)
			mark.prependTo(max)
			right.children().remove()
			ul.children().first().children().clone().appendTo(right)
		})
		max.hover(function(){
			mark.css("display","block")
		},function(){
			mark.css("display","none")
		})
		max.on("mousemove",function(e){
			/*mark的偏移量*/
			var x=e.pageX-max.offset().left-mark.width()/2
			var y=e.pageY-max.offset().top-mark.height()/2
			if(x<0){
				x=0
			}else if(x>max.width()-mark.width()){
				x=max.width()-mark.width()
			}
			if(y<0){
				y=0
			}else if(y>max.height()-mark.height()){
				y=max.height()-mark.height()
			}
			/*大图的偏移量*/
			var rightx=right.children().width()/max.width()*x
			var righty=right.children().height()/max.height()*y
			/*mark移动*/
			mark.css({"left":x,"top":y})
			/*大图偏移*/
			right.children().css({"marginLeft":-rightx,"marginTop":-righty})
		})
	}
})(jQuery)