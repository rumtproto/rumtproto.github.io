---
title: "urlAuthResultRequest (конструктор)"
original: "https://core.telegram.org/constructor/urlAuthResultRequest"
section: ref
kind: constructor
layout: layout.njk
---

# urlAuthResultRequest

*Конструктор из схемы TL.*

> Details about the authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

## Определение TL

```
urlAuthResultRequest#f8f8eb1e flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long = UrlAuthResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| request_write_access | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the bot would like to send messages to the user |
| request_phone_number | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | The app/website is requesting the user's phone number; if the user consents, set share_phone_number when calling [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) |
| match_codes_first | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Can only be set if match_codes is also set; if set, clients must ask the user to select the matching code before showing the rest of the login confirmation UI, and must validate the selection with [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/) before proceeding |
| is_app | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Set if an OAuth request originated from an app rather than a website; when set, domain must be replaced in the confirmation prompt by verified_app_name (if present) or "Unverified App" |
| bot | [User](/type/User/) | Username of a bot, which will be used for user authorization. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See [Linking your domain to the bot](https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot) for more details. |
| domain | [string](/type/string/) | The domain name of the website on which the user will log in. |
| browser | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | The browser the user used to make the OAuth request |
| platform | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | The platform (operating system) of the user that made the OAuth request |
| ip | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | The IP address of the user making the OAuth request |
| region | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | The location of the user, inferred from the IP address |
| match_codes | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | A list of emojis or codes, one of which is currently being shown on the login page of the website/app; the user must select the matching one and pass it to [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).match_code |
| user_id_hint | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[long](/type/long/) | May contain the ID of the account for which the login request was created; if it matches a logged-in account, clients should automatically switch to that account and re-invoke [messages.requestUrlAuth](/method/messages.requestUrlAuth/) before showing the prompt |
| verified_app_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[string](/type/string/) | Can only be set if is_app is set and the app is verified; must replace domain in the confirmation prompt when present |

## Тип

[UrlAuthResult](/type/UrlAuthResult/)

## Related pages

#### [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)

Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

#### [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/)

Validate the match code selected by the user against the code shown on the login page, as part of the [OAuth authorization flow »](https://core.telegram.org/api/url-authorization#oauth-authorization).

Only usable when both `match_codes` and `match_codes_first` are set in the [urlAuthResultRequest](/constructor/urlAuthResultRequest/) returned by [messages.requestUrlAuth](/method/messages.requestUrlAuth/).  
If [boolTrue](/constructor/boolTrue/) is returned, proceed with the login flow and pass the verified code to [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code`.

#### [messages.requestUrlAuth](/method/messages.requestUrlAuth/)

Get more info about a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

#### [Seamless Telegram Login](https://core.telegram.org/api/url-authorization)

Handle Seamless Telegram Login URL authorization requests.
