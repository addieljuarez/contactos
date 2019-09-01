

$.index.open();


$.index.addEventListener('open', function(e){
	var Main = Alloy.createController('Main').getView();
	Main.open();
});