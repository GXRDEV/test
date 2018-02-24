var Swiper=function(cls,obj){
    obj=obj ||{};
    this.wrapper=document.querySelector(cls);
    this.container=this.wrapper.querySelector(".swipe-container");
    this.item=this.container.querySelectorAll(".swipe-item");
    this.length=this.item.length;
    this.callback=obj.callback || function(){};
    this.index=0;
    this.init();
    this.bindEvent()
};
Swiper.prototype={
    init:function(){
        var that=this;
        //页面宽度
        this.widths=this.wrapper.offsetWidth;
        that.container.style.width=this.widths*this.length+"px";
        Array.prototype.slice.call(this.item).forEach(function(i){
            i.style.width=that.widths+"px";
        })
    },
    moveTo:function (num){
        this.container.style.transform="translate3d("+(-this.widths*num)+"px,0,0)";
        this.index=num;
    },
    bindEvent:function(){
        var that=this;
        var num=0;
        var starttime,endtime,times;
        var startX,moveX,endX,spans=0,ends;
        function start(e){
            //时间
            starttime=new Date();
            that.container.className="swipe-container";
            startX=e.touches[0].pageX;
        }
        function move(e){
            moveX=e.touches[0].pageX;
            endX=moveX-startX+spans;
            ends=Math.abs(moveX-startX);
        }
        function end(){
            endtime=new Date();
            times=endtime-starttime;
            console.log(times);
            spans=endX;
            num=that.index;
            if(ends>that.widths/2 || times>10&&times<300&&ends>20){
                if(moveX-startX<0){
                    num++;
                    if(num>that.length-1){
                        num=that.length-1;
                    }
                }else{
                    num--;
                    if(num<0){
                        num=0;
                    }
                }
               that.moveTo(num)
            }
            ends=0;
            that.container.className+=" wrappers";
            that.callback(num);
        }
        this.container.addEventListener("touchstart",start,false);
        this.container.addEventListener("touchmove",move,false);
        this.container.addEventListener("touchend",end,false);
    }
}