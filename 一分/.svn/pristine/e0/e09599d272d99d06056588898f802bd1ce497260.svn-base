	
// 	接口地址
	var BASE_URL = 'http://192.168.1.102:54321/selenium/client/';
	var imgurls='http://192.168.1.102:54321/selenium/';
	//关闭窗口
	function closeW(){
		api.closeWin({
        });
	}
	//打开新窗口
	function openNewWin(winName){
		api.openWin({
	        name:winName,
	        url:winName+'.html'
        });
	}
	
	
	//close加载中
	function showDefault(){
	    $api.css($api.byId("loading"),"display:none");
	        //$('#loading').hide()
	}
	//open加载中
    function showLoading(){
    
    	var numHtml=[];
    	numHtml.push("<div class=\"aui-toast\" style=\"display:none\" id=\"loading\">");
    	numHtml.push("<div class=\"aui-toast-loading\"></div>");
    	numHtml.push("<div class=\"aui-toast-content\">加载中</div>");
    	numHtml.push("</div>");
    	$('body').append(numHtml.join(""));
        $api.css($api.byId("loading"),"display:block");
    }