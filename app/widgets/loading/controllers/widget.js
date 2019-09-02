function show(){
	$.loadingActivity.show();
	$.loadingActivityContainer.visible = true;	
}

function hide(){
	$.loadingActivityContainer.visible = false;		
	$.loadingActivity.hide();
}

$.show = function(){
	$.loadingActivityContainer.visible = true;
	$.loadingActivity.show();
};

$.hide = function(){
	$.loadingActivityContainer.visible = false;		
	$.loadingActivity.hide();
};

//exports.show = show;
//exports.hide = hide;