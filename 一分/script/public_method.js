//判断是否登录

	function isLogin(name, callback, callbacks){
		api.ajax({
	        url:BASE_URL+'user/isLogined.html?userName='+name,
	        method:'GET'
        },function(ret,err){
        	console.log(JSON.stringify(ret))
        	if(ret && ret.stateCode ==1){
        		callback;
        		return false;
        	}
        	if(ret && ret.stateCode == 0){
        		callbacks;
        		return false;
        	}
        });
	}