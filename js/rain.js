window.onload=function(){
	var canvas=document.getElementById("canvas");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	var cont=canvas.getContext("2d");
	var rains=[];
	
	var colors=["black","yellow","#000000","red","green"];
	
	//drawLine(cont,100,100,400,400);
	//starRain(cont,rains);
	setInterval(function(){
		starRain(cont,rains);
	},20)
};

//绘制线条
function drawLine(ctx,rain){
	ctx.beginPath();
	ctx.moveTo(rain.x1,rain.y1);
	ctx.lineTo(rain.x2,rain.y2);
	ctx.strokeStyle="#cccccc";
	ctx.stroke();
}
//开始绘制
function starRain(ctx,rains){
	for(var i=0;i<2;i++){
		var num1=Math.random()*(canvas.width+300);
	var num2=Math.random()*50+10;
	var rain={
		x1:num1,
		y1:-num2,
		x2:num1,  //-15
		y2:-num2+150,
		vx:0,//Math.random()-5
		vy:Math.random()+10
	};
	//将状态保存到数组
	rains.push(rain);
	}
	
	 if(rains.length>200){
	 	rains.shift();
	 }
	move(ctx,rains,4);
	console.log(rains.length)
}

//动画
function move(ctx,rains,num){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(var i=0;i<rains.length;i++){
		rains[i].x1+=rains[i].vx*num;
		rains[i].x2+=rains[i].vx*num;
		rains[i].y1+=rains[i].vy*num;
		rains[i].y2+=rains[i].vy*num;
		
		if(rains[i].y1>canvas.height){
			rains.splice(rains[i].index,1);
			continue;
		}
		
		drawLine(ctx,rains[i]);
	}
}
