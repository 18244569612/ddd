

function dialog(){
var dialog = new auiDialog();
	dialog.alert({
	    title:"弹出提示",
	    msg:'这里是内容',
	    buttons:['取消','确定']
	},function(ret){
	    console.log(ret)
	})
}
