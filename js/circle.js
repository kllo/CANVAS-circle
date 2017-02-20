window.onload=function(){
	var canvas=document.getElementById("canvas");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	var cot=canvas.getContext("2d");
	//定义存储圆圈数组
	
	init(cot);
}
var cirs=[];

//初始化 传入canvas标签id
function init(ctx){
	//添加数组
	
	setInterval(function(){
		anima(ctx);
	},20)
//anima(ctx)
	
	
}
//绘制圆圈
function drawc(ctx,cir){
	ctx.beginPath();
	ctx.arc(cir.x,cir.y,cir.r,0,2*Math.PI);
	ctx.globalAlpha=cir.alpha;
	ctx.strokeStyle="#ffffff";
	ctx.lineWidth=2;
	ctx.stroke();
}
//动画
function anima(ctx){
	var cir={
		x:Math.random()*canvas.width,
		y:Math.random()*canvas.height,
		r:0.1,
		vr:Math.random()*5+1,
		alpha:1
	};
	 
	 if(cirs.length<15){
	 	cirs.push(cir);
	 }
      
	
	//cirs.push(cir);  //将每个圆圈的状态保存到数组之中
	starMove(ctx);   //绘制逐帧动画
}
//动画贞
function starMove(ctx){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(var i=0;i<cirs.length;i++){
		cirs[i].r+=cirs[i].vr*0.7;       //控制半径
		
//		if(cirs[i].r>canvas.width/4){
//			cirs[i].alpha-=(Math.random()*0.3+0.3)*0.05;
//
//			//cirs.splice(cirs[i].index,1);
//		}
        cirs[i].alpha-=(Math.random()*0.25)*0.1;
		if(cirs[i].alpha<0){
			  	cirs.splice(cirs[i].index,1);
			  }
		
		drawc(ctx,cirs[i]);  //绘制后
	}
}
