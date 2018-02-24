;(function(){
	$.fn.change=function(end){
		var star={
			left:"",
			top:"",
			color:"",
			type:"click",
			width:"",
			height:"",
			text:"",
			id:"",
			delo:false
		}
		var sett=$.extend({},star,end)
		var color=sett.color
		var type=sett.type
		var text=sett.text
		var id=sett.id
		var width=sett.width,height=sett.height,left=sett.left,top=sett.top
		var delo=sett.delo

		$(this).on(type,function(){
			if($("#"+id).length>0){
				$("#"+id).remove()
			}
			var box=$("<div id="+id+">"+text+"<span class='em'>&times;</span></div>")
			box.css({"width":width,"height":height,"position":"absolute","left":left,"top":top,"background":color}).fadeIn(600)
			$("body").append(box)
		})
		$(".em").live(type,function(){
			$(this).parent().fadeOut(600)
		})

		$("#"+id).live("mousedown",function(e){
			
			var _this=this
			var x=e.pageX-$(this).offset().left
			var y=e.pageY-$(this).offset().top
			e.preventDefault()
			$(document).on("mousemove",function(e){
				var x1=e.pageX-x
				var y1=e.pageY-y

				if(x1<0){
					x1=0
				}else if(x1>window.innerWidth-$(_this).outerWidth()){
					x1=window.innerWidth-$(_this).outerWidth()
				}

				if(y1<0){
					y1=0
				}else if(y1>window.innerHeight-$(_this).outerHeight()){
					y1=window.innerHeight-$(_this).outerHeight()
				}
				if(delo==true){
					$(_this).css({"left":x1,"top":y1})
				}
				
				
				
				
			})
			$("#"+id).live("mouseup",function(){
				$(document).off("mousemove")
			})
		})
	}
})(jQuery)