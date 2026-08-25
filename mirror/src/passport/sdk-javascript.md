---
title: "Javascript SDK"
original: "https://core.telegram.org/passport/sdk-javascript"
section: other
description: "The Javascript SDK helps you easily integrate Telegram Passport requests into your website. Check out our GitHub repository to see samples using this SDK."
crumbs: [{"title":"Telegram Passport","url":"/passport/"},{"title":"Javascript SDK","url":"/passport/sdk-javascript/"}]
layout: layout.njk
---

# Javascript SDK

The Javascript SDK helps you easily integrate Telegram Passport requests into your website. Check out our [GitHub repository](https://github.com/TelegramMessenger/TGPassportPHPSample) to see samples using this SDK.

### Installation

[Download](https://github.com/TelegramMessenger/TGPassportJsSDK) and include the Javascript SDK in the head section of your page:

```
<script src="telegram-passport.js"></script>
```

### Usage

Simply call [Telegram.Passport.createAuthButton](#createauthbutton) to create the default Telegram Passport button:

```
<div id="telegram_passport_auth"></div>
<script>
  Telegram.Passport.createAuthButton('telegram_passport_auth', {
    bot_id:       123456, // place id of your bot here
    scope:        {data: [{type: 'id_document', selfie: true}, 'address_document', 'phone_number', 'email'], v: 1},
    public_key:   '-----BEGIN PUBLIC KEY----- ...', // place public key of your bot here
    nonce:        'ab2df83746a87d2f3bd6...', // place nonce here
    callback_url: 'https://example.com/callback/' // place callback url here
  });
</script>
```

> Note that if you use a [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) (CSP) header with the [frame-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src)/[child-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/child-src) directive you should allow `tg:` source to prevent errors in some browsers (e.g. Firefox)

#### createAuthButton

<table class="table"><thead><tr><th scope="col">Parameters</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>element</td><td>String or DOMNode</td><td>Yes</td><td>ID of the element or the element which will be the container for the button</td></tr><tr><td>auth_params</td><td><a href="#authparameters">AuthParameters</a> or Function</td><td>Yes</td><td>Javascript object with auth parameters or a function which returns <a href="#authparameters">AuthParameters</a></td></tr><tr><td>options</td><td><a href="#authbuttonoptions">AuthButtonOptions</a></td><td>Optional</td><td>Button options</td></tr></tbody></table>

#### AuthParameters

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>bot_id</td><td>Integer</td><td>Unique identifier for the bot</td></tr><tr><td>scope</td><td><a href="/passport/#passportscope">PassportScope</a></td><td>A JSON-serialized object describing the data you want to request</td></tr><tr><td>public_key</td><td>String</td><td>Public key of your bot</td></tr><tr><td>nonce</td><td>String</td><td>Bot-specified nonce</td></tr><tr><td>callback_url</td><td>String</td><td><em>Optional.</em> URL to which the user will be redirected.</td></tr></tbody></table>

#### AuthButtonOptions

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>text</td><td>String</td><td><em>Optional.</em> Text on the button. Defaults to "Log In With Telegram".</td></tr><tr><td>radius</td><td>Integer</td><td><em>Optional.</em> Radius of the button and tooltip in px. Defaults to 23.</td></tr><tr><td>tooltip_text</td><td>String</td><td><em>Optional.</em> Text on the tooltip. Defaults to "Please <u>install Telegram</u> to use this option.".</td></tr><tr><td>tooltip_position</td><td>String</td><td><em>Optional.</em> Tooltip position. One of "top", "bottom", "left", "right". Defaults to "bottom".</td></tr><tr><td>tooltip_force</td><td>Boolean</td><td><em>Optional.</em> Always show a tooltip. Defaults to <em>false</em>.</td></tr></tbody></table>

You can also create your custom button. Do not forget about the tooltip. You should add an `onclick` listener to the button which calls the `Telegram.Passport.auth(auth_params, tooltip_toggle);` method:

```
<button id="telegram_passport_auth">Log In With Telegram</button>
<script>
  var auth_button = document.getElementById('telegram_passport_auth');
  var auth_params = {
    bot_id:        XXXXXX, // place id of your bot here
    scope:         {data: [{type: 'id_document', selfie: true}, 'address_document', 'phone_number', 'email'], v: 1},
    public_key:    '-----BEGIN PUBLIC KEY----- ...', // place public key of your bot here
    nonce:         'ab2df83746a87d2f3bd6...', // place nonce here
    callback_url:  'https://example.com/callback/' // place callback url here
  };
  auth_button.addEventListener('click', function() {
  	Telegram.Passport.auth(auth_params, function(show) {
      if (show) {
        // some code to show tooltip
      } else {
        // some code to hide tooltip
      }
    });
  }, false);
</script>
```

### Receiving information

When the user confirms your request by pressing the "Authorize" button, it will be redirected to the URL specified in the _callback\_url_ with the parameter `tg_passport=success` and the Bot API will send the bot an [Update](/bots/api/#update) with the field _passport\_data_ which contains encrypted [Telegram Passport data](/bots/api/#passportdata).

If the user cancels your request, it will be redirected to the URL specified in the _callback\_url_ with the parameter `tg_passport=cancel`.

If an error occurs during the request, the user will be redirected to the URL specified in the _callback\_url_ with the parameter `tg_passport=error`. The parameter `error` will contain one of the following values: **BOT\_INVALID**, **PUBLIC\_KEY\_REQUIRED**, **PUBLIC\_KEY\_INVALID**, **SCOPE\_EMPTY**, **NONCE\_EMPTY**.
