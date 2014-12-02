function getDonationsButton() {
	return '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
}

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
	return '<div id="stalkerFrame">'+
	'  <div>'+
	'    <a target="_blank" href="https://chrome.google.com/webstore/detail/facebook-full-size-profil/agcgdkfpobnjbhhmmelbojdakpehniof">' +
	'      <img src="'+chrome.extension.getURL('promo.png')+'" />' +
	'    </a>'+
	'  </div>' + 
	'  <div class="donatinsWrapper">'+
		   getDonationsButton() +
	'  	 <div class="donatinsBTC">BTC: 13iB6CdUKNTunbCtAW4WNvohSs4m41D8uU</div>'+
	'  </div>' +
	'  <img id="stalkerImage" style="max-height: '+(window.innerHeight-58)+'px" src="'+link+'" />'+
	'</div>';
}

function clickListener(event) {
	var element = event.srcElement;
	if (element.className === 'profilePic img' && !document.getElementById('profile_pic_education')) {
		document.getElementById('contentArea').innerHTML += getStalkerFrame(element);
	} else {
		var BTCAddressClicked = Array.prototype.slice.call(event.path).reduce(function(prev, el) {
		  return prev || el.className === 'donatinsWrapper'
		}, false);

		if (!BTCAddressClicked) {
			removeStalkerFrame();
		}
	}
}

function escapeListener(event) {
	if(event.keyCode === 27) {
		removeStalkerFrame();
	}
}

document.addEventListener('click', clickListener, false);
document.addEventListener('keyup', escapeListener, false);