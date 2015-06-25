var sizes = [ "16x16", "24x24", "32x32", "48x48" ];

function changeSrcsImagesOfElement(element) {
	if (typeof element !== "undefined" && typeof element.getElementsByTagName !== "undefined") {
		var images = element.getElementsByTagName("img");
		for (var imgIndex in images) {
			var img = images[imgIndex];
			changeSrcIfNeeded(img);
		}
	}
}
function changeSrcIfNeeded(img) {
	if (typeof img !== "undefined" && typeof img.getAttribute !== "undefined") {
		var src = img.getAttribute("src");
		if( src.indexOf("blue.png") > -1 ) {
			var sizeIndex;
			var imgUrl;
			
			for(sizeIndex = 0; sizeIndex < sizes.length; sizeIndex++) {
				var size = sizes[sizeIndex];
				if( src.indexOf(size) > -1 ) {
					imgUrl = chrome.extension.getURL("images/" + size + "/green.png");
				}
			}
			
			img.setAttribute("src", imgUrl);
		}
		// for history page
		else if (src.indexOf("dull-blue-circle.png") > -1) {
			imgUrl = chrome.extension.getURL("images/16x16/green.png");
			img.setAttribute("src", imgUrl);
		}
	}
}

document.addEventListener (
    "DOMNodeInserted",
    function (zEvent) {
        var newNode = zEvent.target;
		changeSrcsImagesOfElement(newNode);
    },
    false
);

$(function(){
	changeSrcsImagesOfElement(document);
})
