
function show(str){
	$('body').append('<div id="alert">'+str+'</div>')
	$('#alert').html(str);
	$('#alert').css('display', 'block');
	setTimeout(function(){
		$('#alert').css('display', 'none');
	}, 2000);
}

/**
 * 
 * 获取当前时间
 */
function getTime(){
	function p(s) {
	    return s < 10 ? '0' + s: s;
	}
	
	var myDate = new Date();
	//获取当前年
	var year=myDate.getFullYear();
	//获取当前月
	var month=myDate.getMonth()+1;
	//获取当前日
	var date=myDate.getDate(); 
	var h=myDate.getHours();       //获取当前小时数(0-23)
	var m=myDate.getMinutes();     //获取当前分钟数(0-59)
	var s=myDate.getSeconds();  
	
	var now=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);
	return now;
}
