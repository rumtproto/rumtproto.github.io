---
title: "messages.requestUrlAuth (метод)"
original: "https://core.telegram.org/method/messages.requestUrlAuth"
section: ref
kind: method
layout: layout.njk
---

# messages.requestUrlAuth

*Метод из схемы TL.*

> Get more info about a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

## Определение TL

```
urlAuthResultRequest#f8f8eb1e flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long = UrlAuthResult;
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;
urlAuthResultDefault#a9d6db1f = UrlAuthResult;
---functions---
messages.requestUrlAuth#894cc99c flags:# peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string in_app_origin:flags.3?string = UrlAuthResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputPeer](/type/InputPeer/) | Peer where the message is located |
| msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | The message |
| button_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | The ID of the button with the authorization request |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | URL used for [link URL authorization, click here for more info »](https://core.telegram.org/api/url-authorization#link-url-authorization) |
| in_app_origin | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | For [OAuth authorization from mini apps »](https://core.telegram.org/api/url-authorization#oauth-authorization-for-mini-apps): the origin of the webview that originated the OAuth request, in the format scheme://host (or scheme://host:port for non-default ports) |

## Результат

[UrlAuthResult](/type/UrlAuthResult/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 500 | OAUTH_REQUEST_INVALID | The specified OAuth request is invalid. |
| 400 | URL_EXPIRED | The specified OAuth request has expired. |
| 400 | URL_INVALID | Invalid URL provided. |

## Related pages

#### [Seamless Telegram Login](https://core.telegram.org/api/url-authorization)

Handle Seamless Telegram Login URL authorization requests.
