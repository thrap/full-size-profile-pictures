function removeStalkerFrame() {
	var stalkerframe = document.getElementById('stalkerFrame');
	if(stalkerframe !== null) {
		stalkerframe.parentNode.removeChild(stalkerframe);
	}
}

function getImageURL(photoElement) {
	var username = location.pathname.substring(1);
	return 'http://graph.facebook.com/'+username+'/picture?width=999';
}

function getStalkerFrame(element) {
	var link = getImageURL(element);
	return '<div id="stalkerFrame" onclick="this.parentNode.removeChild(this)">'+
	'  <div>'+
	'    <a target="_blank" href="https://chrome.google.com/webstore/detail/facebook-full-size-profil/agcgdkfpobnjbhhmmelbojdakpehniof">' +
	'      <img src="'+chrome.extension.getURL('promo.png')+'" />' +
	'    </a>'+
	'  </div>' + 
	'  <img id="stalkerImage" style="max-height: '+(window.innerHeight-58)+'px" src="'+link+'" />'+
	'</div>';
}

function clickListener(event) {
	var element = event.srcElement;
	if (element.className === 'profilePic img' && !document.getElementById('profile_pic_education')) {
		document.getElementById('contentArea').innerHTML += getStalkerFrame(element);
	} else {
		removeStalkerFrame();
	}
}

function escapeListener(event) {
	if(event.keyCode === 27) {
		removeStalkerFrame();
	}
}

document.addEventListener('click', clickListener, false);
document.addEventListener('keyup', escapeListener, false);