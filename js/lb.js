$(document).ready(function() {
	  var listCon=$(".listCon");
	      listCon.each(function(i){
			listCon.eq(i).hover(
			    function(){
					$(this).find(".listOff").slideUp("fast");
					$(this).find(".listOn").slideDown("fast");
				},
			    function(){
					$(this).find(".listOff").slideDown("fast");
					$(this).find(".listOn").slideUp("fast");	
				}
			)  
		  })  
		  
		 var index = 0;
		 var imgL=$("#small li a").length;
		 
		 $("#small li a").mouseover(function(){
			index  =  $("#small li a").index(this);
			showImg(index);
		});	
		  $('#slide').hover(
		        function(){
						  if(MyTime){
						  clearInterval(MyTime);
						}},
				function(){
						  MyTime = setInterval(function(){
							showImg(index)
							index++;
							if(index>imgL){index=0};
						  } , 2000);
				 });
					 //自动开始
					 var MyTime = setInterval(function(){
						showImg(index)
						index++;
						var len=$("#small li a").size();
						if(index>imgL){index=0};
						
					 } , 2000);
						
					//关键函数：通过控制i ，来显示不通的幻灯片
					function showImg(i){
						
					 $(".slideDiv").eq(i).show().siblings(".slideDiv").hide();		
					 $("#small li a")
						.eq(i).addClass("on")
						.parent().siblings().find("a").removeClass("on");
					}
	
});