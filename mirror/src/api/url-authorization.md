---
title: "Seamless Telegram Login"
original: "https://core.telegram.org/api/url-authorization"
section: api
description: "Bots, Telegram websites and apps may ask users to login to a certain website via Telegram when clicking on certain links or URL buttons in inline keyboards."
crumbs: [{"title":"API","url":"/api/"},{"title":"Seamless Telegram Login","url":"/api/url-authorization/"}]
layout: layout.njk
---

# Seamless Telegram Login

Bots, Telegram websites and apps may [ask users to login to a certain website via Telegram](/bots/api/#loginurl) when clicking on certain links or URL buttons in inline keyboards.

### OAuth authorization

```
urlAuthResultRequest#3cd623ec flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true is_app:flags.6?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long verified_app_name:flags.7?string = UrlAuthResult;
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;

---functions---

messages.requestUrlAuth#894cc99c flags:# peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string in_app_origin:flags.3?string = UrlAuthResult;

messages.acceptUrlAuth#67a3f0de flags:# write_allowed:flags.0?true share_phone_number:flags.3?true peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string match_code:flags.4?string = UrlAuthResult;

messages.declineUrlAuth#35436bbc url:string = Bool;

messages.checkUrlAuthMatchCode#c9a47b0b url:string match_code:string = Bool;
```

Telegram allows websites to log in with Telegram using the OpenID Connect (OIDC) protocol, see [here »](/bots/telegram-login/) for more info on how to use Telegram Login.

This section documents the flow used by Telegram _clients_ in order to authorize an incoming OIDC (OAuth) request.

The flow begins when the client receives a request to open an [OAuth deep link »](/api/links/#oauth-links).

**Note**: only handle this deep link if the request to open it comes from outside the app; do **not** handle it if it was clicked inside of the app, for example in messages, [buttons](/api/bots/buttons/), the built-in browser and [mini apps](/api/bots/webapps/), etc.

Note that mini apps can still use OAuth login but [in a slightly different manner »](#oauth-authorization-for-mini-apps).

Handle [OAuth deep links »](/api/links/#oauth-links) by passing the **entire** deep link (not just the `token` parameter) to the `url` parameter of [messages.requestUrlAuth](/method/messages.requestUrlAuth/), without setting any other flag.

Make sure to only pass [OAuth deep links »](/api/links/#oauth-links) to [messages.requestUrlAuth](/method/messages.requestUrlAuth/) in the context of this feature, reject any URL not containing an OAuth deep link.

If the returned result is [urlAuthResultRequest](/constructor/urlAuthResultRequest/), a confirmation prompt should be shown, using the following returned fields (**always** returned for OAuth requests):

-   `bot`: Identifier of the bot linked to the website making the login request (as specified in [@BotFather](https://t.me/botfather))
-   `domain`: The domain name of the website on which the user is trying to login.
-   `platform`: The platform (i.e. operating system) of the user that made the OAuth request
-   `browser`: The browser the user used to make the OAuth request
-   `ip`: The IP address of the user
-   `region`: The location of the user, inferred from the IP address

Additionally, the following flags will be set if the request originated from an app (as opposed to a website):

-   `is_app`: Set if the request originated from an app
-   `verified_app_name`: Can only be set if `is_app` is set **and** the app is verified

If the request originated from an app, when rendering the confirmation prompt, `domain` must be replaced with `verified_app_name` (if set, otherwise, it must be replaced with "Unverified App").

The following flags may also be set:

-   `request_write_access`: If set, the app/website is requesting permission to write to the user via Telegram (using the bot associated with the website).
    
-   `request_phone_number`: If set, the app/website is requesting the user's phone number.
    
-   `user_id_hint`: may contain the ID of a user, for which the login request was created.  
    If this flag is set and it points to one of the logged-in accounts, clients should automatically switch to that account and re-invoke [messages.requestUrlAuth](/method/messages.requestUrlAuth/) from that account, before showing the prompt.
    
-   `match_codes`: Contains a list of emojis, one of which is currently being shown on the login page of the original website/app.  
    If this flag is set, after the user accepts the login request but before sending the final [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) request, the user must choose the matching emoji and pass it to `match_code` when finally invoking [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).
    
-   `match_codes_first`: Can be set if and only if `match_codes` is set. If set, clients should ask the user to select the matching code _before_ showing the rest of the login confirmation UI, not after, and should validate the selected code using [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/), passing the selected code and the OAuth deep link.  
    Only if the method returns [boolTrue](/constructor/boolTrue/), proceed with the login flow, re-passing the selected and verified code to [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code`.
    
    Note that [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/) can only be used if both `match_codes` and `match_codes_first` are set: if **only** the `match_codes` flag is set, the code must be provided to [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code` without [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/) verification.
    
    An error will be returned by [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)/[messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/) if the selected code is invalid.
    

If the user manually switches accounts in the confirmation prompt, [messages.requestUrlAuth](/method/messages.requestUrlAuth/) should be called again using the newly selected account, because the returned authorization data may differ.

If the user explicitly refuses the login request, [messages.declineUrlAuth](/method/messages.declineUrlAuth/) should be called, passing the OAuth deep link to `url`.

If the user accepts the login request, [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) should be called, passing the following parameters:

-   `url`: The OAuth deep link
-   `write_allowed`/`share_phone_number`: if requested and consented to by the user
-   `match_code`: if `match_codes` is set, the emoji chosen by the user (must be always provided if `match_codes` is set, even if `match_codes_first` is set and the code was already validated using [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/))

On success, the result will be a [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/).  
If its `url` field is present, the returned URL should be opened in the external browser (**not** the in-app browser), if possible using the same browser from which the deep link originated; the URL may also use a custom scheme for direct switching to another app.  
If the `url` field is absent, clients should simply show a toast or a similar message confirming that the login succeeded.

Both [messages.requestUrlAuth](/method/messages.requestUrlAuth/) and [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) may return a `URL_EXPIRED` error.

#### OAuth authorization from push notifications

The OAuth authorization flow may also be started by clicking on an [OAUTH\_REQUEST push notifications](/api/push-updates/#oauth-request): this should trigger the usual [oauth flow »](#oauth-authorization), using the [oauth deep link »](/api/links/#oauth-links) contained in `custom.data_url`.

Note that received [OAUTH\_REQUEST push notifications](/api/push-updates/#oauth-request) are only valid for 60 seconds.

#### OAuth authorization for mini apps

[OAuth authorization](#oauth-authorization) from the in-app browser or [mini apps](/api/bots/webapps/) follows a slightly different flow.

The flow begins when the client receives an [`oauth_request` event](/api/web-events/#oauth-request) when running inside of the in-app browser or a [mini app](/api/bots/webapps/).

Regardless of the contents of the event, the client should immediately reply with the [`oauth_supported` event](/api/bots/webapps/#oauth-supported) (this is required especially for [`oauth_request` events](/api/web-events/#oauth-request) with no `url`, used to check if the client supports OAuth logins).

In addition to the [`oauth_supported` event](/api/bots/webapps/#oauth-supported) emission above, if a valid [OAuth deep link](/api/links/#oauth-links) was passed in the `url` parameter of the [`oauth_request` event](/api/web-events/#oauth-request), the client should also call [messages.requestUrlAuth](/method/messages.requestUrlAuth/) with the following arguments:

-   `url`: Must contain the [OAuth deep link](/api/links/#oauth-links) from [oauth\_request.url](/api/web-events/#oauth-request).
-   `in_app_origin`: Must be set to the origin of the webview event in the following format: `scheme://host` (or `scheme://host:port` for non-default ports).

Then, follow the usual [OAuth confirmation flow »](#oauth-authorization).

On success, the returned [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) should be passed back to the mini app by emitting an [`oauth_result_confirmed` event](/api/bots/webapps/#oauth-result-confirmed) with `result_url` equal to the returned `url`, or to `null` if the [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) did not contain a `url`.

Before emitting the [`oauth_result_confirmed` event](/api/bots/webapps/#oauth-result-confirmed), clients should make sure that the origin of the webview did not change.

On failure or if the OAuth process is cancelled by the user, clients should emit an [`oauth_result_failed` event](/api/bots/webapps/#oauth-result-failed), instead.

### Bot button URL authorization

```
keyboardButtonUrlAuth#f51006f9 flags:# style:flags.10?KeyboardButtonStyle text:string fwd_text:flags.0?string url:string button_id:int = KeyboardButton;

urlAuthResultRequest#3cd623ec flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true is_app:flags.6?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long verified_app_name:flags.7?string = UrlAuthResult;
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;
urlAuthResultDefault#a9d6db1f = UrlAuthResult;

---functions---

messages.requestUrlAuth#894cc99c flags:# peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string in_app_origin:flags.3?string = UrlAuthResult;
messages.acceptUrlAuth#67a3f0de flags:# write_allowed:flags.0?true share_phone_number:flags.3?true peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string match_code:flags.4?string = UrlAuthResult;
```

Used to login on a website, by clicking on a special [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/) sent by a bot.

When the user clicks on a [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/), [messages.requestUrlAuth](/method/messages.requestUrlAuth/) should be called, providing the `button_id` of the button and the ID and peer of the container message. The returned [urlAuthResultRequest](/constructor/urlAuthResultRequest/) object will contain more details about the authorization request:

-   The `domain` parameter will contain the domain name of the website on which the user will log in (example: _comments.app_).
-   The `bot` parameter will contain info about the bot which will be used for user authorization (example: _DiscussBot_).
-   The `request_write_access` will be set if the bot would like to send messages to the user.
-   The `request_phone_number` will be set if the bot would like to obtain the user's phone number.

The info should be shown in a prompt:

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c" target="_blank"><img src="https://core.telegram.org/file/811140909/1631/20k1Z53eiyY.23995/c541e89b74253623d9" title="TITLE" alt="TITLE" srcset="/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c , 2x"></a></div>

If the user agrees to login to the URL, [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) should be called, eventually setting the `write_allowed`/`share_phone_number` flags if requested by [urlAuthResultRequest](/constructor/urlAuthResultRequest/).`request_write_access`/`request_phone_number` and consented to by the user. The result will be a [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) with the final URL to open (always set for bot button URL authorization and [link URL authorization](#link-url-authorization)), which will include a query string with the requested info and a hash that [must be verified upon receipt by the service](/bots/telegram-login/).

[urlAuthResultDefault](/constructor/urlAuthResultDefault/) could also be returned, instead, in which case the `url` of the [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/) must be opened, instead.

The `url` of the [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/) must be also directly opened without a further call to [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) if the user opens the link while refusing the authorization request by pressing "Cancel" in the popup above.

Note that in some cases, [messages.requestUrlAuth](/method/messages.requestUrlAuth/) may return directly [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/), in which case no prompt should be shown, and the returned URL should just be directly opened.

### Link URL authorization

Telegram supports automatic authorization on certain websites upon opening an HTTP URL in-app, upon clicking a link in a message or clicking on a [keyboardButtonUrl](/constructor/keyboardButtonUrl/).

#### Automatic authorization

Clients should automatically authenticate users when opening official Telegram websites, listed in the [`autologin_domains` key](/api/config/#autologin-domains) of the [client configuration object »](/api/config/#client-configuration).

Upon clicking a link, the URL must be modified by appending the [`autologin_token` »](/constructor/config/) from the [MTProto configuration object »](/api/config/#mtproto-configuration) to the [query string](https://datatracker.ietf.org/doc/html/rfc3986#section-3.4), like so:

Original URL: `https://somedomain.telegram.org/path?query=string#fragment=value`  
Modified URL: `https://somedomain.telegram.org/path?query=string&autologin_token=$autologin_token#fragment=value`

Make sure that the used `autologin_token` is no more than `10000` seconds old, if it is older it must be refetched before use with [help.getConfig](/method/help.getConfig/).

#### Manual authorization

Clients should show a confirmation prompt similar to the one used [for bot buttons](#bot-button-url-authorization), to authenticate users when opening certain Telegram websites, listed in the `url_auth_domains` key of the [client configuration object »](/api/config/#url-auth-domains).

When opening a URL with domain equal to one of the `url_auth_domains`, pass the URL to [messages.requestUrlAuth](/method/messages.requestUrlAuth/), then follow the same flow used [for bot buttons](#bot-button-url-authorization).

Note that in some cases, [messages.requestUrlAuth](/method/messages.requestUrlAuth/) may return directly [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/), in which case no prompt should be shown, and the returned URL should just be directly opened.
