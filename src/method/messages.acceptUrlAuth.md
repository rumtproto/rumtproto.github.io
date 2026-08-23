---
title: "messages.acceptUrlAuth (метод)"
original: "https://core.telegram.org/method/messages.acceptUrlAuth"
section: ref
kind: method
layout: layout.njk
---

# messages.acceptUrlAuth

*Метод из схемы TL.*

> Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

## Определение TL

```
urlAuthResultRequest#f8f8eb1e flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long = UrlAuthResult;
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;
urlAuthResultDefault#a9d6db1f = UrlAuthResult;
---functions---
messages.acceptUrlAuth#67a3f0de flags:# write_allowed:flags.0?true share_phone_number:flags.3?true peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string match_code:flags.4?string = UrlAuthResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| write_allowed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Set this flag to allow the bot to send messages to you (if requested) |
| share_phone_number | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Set this flag to share the user's phone number with the bot (if requested via [urlAuthResultRequest](/constructor/urlAuthResultRequest/).request_phone_number and consented to by the user) |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputPeer](/type/InputPeer/) | The location of the message |
| msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Message ID of the message with the login button |
| button_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | ID of the login button |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | URL used for [link URL authorization, click here for more info »](https://core.telegram.org/api/url-authorization#link-url-authorization) |
| match_code | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](/type/string/) | If [urlAuthResultRequest](/constructor/urlAuthResultRequest/).match_codes was set, the emoji or code selected by the user from the provided list; must always be provided when match_codes is set, even if match_codes_first was set and the code was already validated via [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/) |

## Результат

[UrlAuthResult](/type/UrlAuthResult/)

## Only users can use this method

## Related pages

#### [urlAuthResultRequest](/constructor/urlAuthResultRequest/)

Details about the authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

#### [Seamless Telegram Login](https://core.telegram.org/api/url-authorization)

Handle Seamless Telegram Login URL authorization requests.

#### [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/)

Validate the match code selected by the user against the code shown on the login page, as part of the [OAuth authorization flow »](https://core.telegram.org/api/url-authorization#oauth-authorization).

Only usable when both `match_codes` and `match_codes_first` are set in the [urlAuthResultRequest](/constructor/urlAuthResultRequest/) returned by [messages.requestUrlAuth](/method/messages.requestUrlAuth/).  
If [boolTrue](/constructor/boolTrue/) is returned, proceed with the login flow and pass the verified code to [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code`.
