window.onload=function(){
	var dl=document.getElementsByTagName("dl");
	if(dl.length<1) return false;
	for(var i=0;i<dl.length;i++){
		if(dl[i].className.indexOf("over")==-1){
			dl[0].className="over";
		}
		dl[i].onmouseover=function(){
			for(var j=0;j<dl.length;j++){
				dl[j].className="";
			}
			this.className="over";
		}
	}
}
 var s1 = Math.random();
 var a1 = 4;
 var n1 = Math.round(s1*(a1-1))+1;  //产生1~3之间的随机整数

 function obj(){
  this.src = '';
  this.url = '';
 }
 
 b1 = new Array();
 for (var i1=0;i1<=a1;i1++){
  b1[i1] = new obj();
 }
 
 b1[1].src = "ad/dinbu/mgm.gif";
 b1[1].url = "http://www.mgm8.co/?aff=248826";
 b1[2].src = "ad/dinbu/hg002.gif";
 b1[2].url = "http://www.hg002.com.cn/?intr=ddm019"; 
 b1[3].src = "ad/dinbu/gonghai.gif";
 b1[3].url = "http://www.gh0003.com/?aff=149953"; 
 b1[4].src = "ad/dinbu/dingji.gif";
 b1[4].url = "http://www.dj2555.com/?aff=149958"; 

 var pic1 = '';
 pic1 = '<a href='+b1[n1].url+' target="_blank"><img src='+b1[n1].src+' width="687" height="80"></a>';
 //////pic2///////
 var s2 = Math.random();
 var a2 = 4;
 var n2 = Math.round(s2*(a2-1))+1;  //产生1~3之间的随机整数
 function obj(){
  this.src = '';
  this.url = '';
 }
 
 b2 = new Array();
 for (var i2=1;i2<=a2;i2++){
  b2[i2] = new obj();
 }
 
 b2[1].src = "ad/90/mgm.gif";
 b2[1].url = "http://www.mgm8.co/?aff=248826";
 b2[2].src = "ad/90/dingji.gif";
 b2[2].url = "http://www.dj2555.com/?aff=149958"; 
 b2[3].src = "ad/90/gonghai.gif";
 b2[3].url = "http://www.gh0003.com/?aff=149953"; 
 b2[4].src = "ad/90/hg002.gif";
 b2[4].url = "http://www.hg002.com.cn/?intr=ddm019";
 var pic2 = '';
 pic2 = '<a href='+b2[n2].url+' target="_blank"><img src='+b2[n2].src+' width="980" height="90"></a>';
  //////pic3///////
 var s3 = Math.random();
 var a3 = 4;
 var n3 = Math.round(s3*(a3-1))+1;  //产生1~3之间的随机整数
 function obj(){
  this.src = '';
  this.url = '';
 }
 
 b3 = new Array();
 for (var i3=1;i3<=a3;i3++){
  b3[i3] = new obj();
 }
 
 b3[1].src = "ad/90/mgm.gif";
 b3[1].url = "http://www.mgm8.co/?aff=248826";
 b3[2].src = "ad/90/dingji.gif";
 b3[2].url = "http://www.dj2555.com/?aff=149958"; 
 b3[3].src = "ad/90/gonghai.gif";
 b3[3].url = "http://www.gh0003.com/?aff=149953"; 
 b3[4].src = "ad/90/hg002.gif";
 b3[4].url = "http://www.hg002.com.cn/?intr=ddm019"; 
 var pic3 = '';
 pic3 = '<a href='+b3[n3].url+' target="_blank"><img src='+b3[n3].src+' width="980" height="90"></a>';
