var _paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
_paq.push(['requireCookieConsent']);

(function() {
	var u="{matomo_url}";
	_paq.push(['setTrackerUrl', u+'matomo.php']);
	_paq.push(['setSiteId', '{site_id}']);
	_paq.push(['setSecureCookie', window.location.protocol === "https:" ]);
	var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
	g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();

document.addEventListener("cmplz_fire_categories", function (e) {
	var consentedCategories = e.detail.categories;
	if (!cmplz_in_array( 'statistics', consentedCategories )) {
		_paq.push(['forgetCookieConsentGiven']);
	} else {
		_paq.push(['rememberCookieConsentGiven']);
	}
});

