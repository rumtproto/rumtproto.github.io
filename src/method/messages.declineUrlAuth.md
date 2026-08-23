---
title: "messages.declineUrlAuth (метод)"
original: "https://core.telegram.org/method/messages.declineUrlAuth"
section: ref
kind: method
layout: layout.njk
---

# messages.declineUrlAuth

*Метод из схемы TL.*

> Decline an incoming [OAuth authorization request »](https://core.telegram.org/api/url-authorization#oauth-authorization), notifying the server that the user refused the login request.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.declineUrlAuth#35436bbc url:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| url | [string](/type/string/) | The OAuth deep link from the [OAUTH_REQUEST push notification](https://core.telegram.org/api/push-updates#oauth-request) or the [oauth_request web event](https://core.telegram.org/api/web-events#oauth-request) |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | URL_INVALID | Invalid URL provided. |

## Related pages

#### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications

#### [Web events](https://core.telegram.org/api/web-events)

How telegram apps interact with webpages

#### [Seamless Telegram Login](https://core.telegram.org/api/url-authorization)

Handle Seamless Telegram Login URL authorization requests.
