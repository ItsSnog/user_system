var navigatorMessageMap = {
	'mac': 'macos',
  	'iphone': 'macos',
  	'win': 'windows',
    'lin': 'linux';
};
var platform = navigator.platform.toLowerCase();
for (var key in navigatorMessageMap) {
	key = key.toLowerCase();
	var version = navigatorMessageMap[key];
	var os = document.querySelector('[data-version="' + version + '"]');
	if (platform.indexOf(key) >= 0){
		os.style.display = "block";
	}
}