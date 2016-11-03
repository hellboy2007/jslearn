// jQuery插件库，自己写的

//实现h5图像本地选择即预览
//$upfile 上传文件控件对象id
//$upshow 上传文件预览div区域对象id
$.fn.lcShowImg = function($upfile,$upshow) {
	//清除原来的显示
	$upshow.html("")
	
	//没选择文件的状况下提示
	if(!$upfile.val()){
		$upshow.html("没有选择文件")
		return;
	}
	
	//获取文件引用
	var fileInput 	= $upfile.get(0)
	var file 		= fileInput.files[0]
	
	//上传文件类型不对的情况下的处理
	var typestr = file.type
	if(typestr.indexOf('image')===-1) {
		alert("不是有效的图片文件")
	}
	
	//读取文件成功后取得dataurl植入img src
	var reader 		= new FileReader();
	reader.onload 	= function(e) {
		var data = e.target.result;
		var path = '<a href="'+data+'" target="_blank"><img src="'+data+'" /></a>';
		$upshow.html(path); 
	}
	//读取文件
	reader.readAsDataURL(file);
	
	return this;	
}