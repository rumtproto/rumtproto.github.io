---
title: "messages.checkUrlAuthMatchCode (метод)"
original: "https://core.telegram.org/method/messages.checkUrlAuthMatchCode"
section: ref
kind: method
layout: layout.njk
---

# messages.checkUrlAuthMatchCode

*Метод из схемы TL.*

> Validate the match code selected by the user against the code shown on the login page, as part of the [OAuth authorization flow »](https://core.telegram.org/api/url-authorization#oauth-authorization).
> Only usable when both `match_codes` and `match_codes_first` are set in the [urlAuthResultRequest](/constructor/urlAuthResultRequest/) returned by [messages.requestUrlAuth](/method/messages.requestUrlAuth/).  
> If [boolTrue](/constructor/boolTrue/) is returned, proceed with the login flow and pass the verified code to [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code`.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.checkUrlAuthMatchCode#c9a47b0b url:string match_code:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| url | [string](/type/string/) | The OAuth deep link |
| match_code | [string](/type/string/) | The emoji or code selected by the user from the list in [urlAuthResultRequest](/constructor/urlAuthResultRequest/).match_codes |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | URL_INVALID | Invalid URL provided. |

## Related pages

#### [urlAuthResultRequest](/constructor/urlAuthResultRequest/)

Details about the authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

#### [Seamless Telegram Login](https://core.telegram.org/api/url-authorization)

Handle Seamless Telegram Login URL authorization requests.

#### [messages.requestUrlAuth](/method/messages.requestUrlAuth/)

Get more info about a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

#### [boolTrue](/constructor/boolTrue/)

The constructor can be interpreted as a **boolean**`true` value.

#### [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)

Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)
