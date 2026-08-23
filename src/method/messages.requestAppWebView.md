---
title: "messages.requestAppWebView (метод)"
original: "https://core.telegram.org/method/messages.requestAppWebView"
section: ref
kind: method
layout: layout.njk
---

# messages.requestAppWebView

*Метод из схемы TL.*

> Open a [bot mini app](https://core.telegram.org/bots/webapps) from a [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links), sending over user information after user confirmation.
> After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.

## Определение TL

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;
---functions---
messages.requestAppWebView#53618bce flags:# write_allowed:flags.0?true compact:flags.7?true fullscreen:flags.8?true peer:InputPeer app:InputBotApp start_param:flags.1?string theme_params:flags.2?DataJSON platform:string = WebViewResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| write_allowed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Set this flag if the bot is asking permission to send messages to the user as specified in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links) docs, and the user agreed. |
| compact | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | If set, requests to open the mini app in compact mode (as opposed to normal or fullscreen mode). Must be set if the mode parameter of the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links) is equal to compact. |
| fullscreen | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | If set, requests to open the mini app in fullscreen mode (as opposed to compact or normal mode). Must be set if the mode parameter of the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links) is equal to fullscreen. |
| peer | [InputPeer](/type/InputPeer/) | If the client has clicked on the link in a Telegram chat, pass the chat's peer information; otherwise pass the bot's peer information, instead. |
| app | [InputBotApp](/type/InputBotApp/) | The app obtained by invoking [messages.getBotApp](/method/messages.getBotApp/) as specified in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links) docs. |
| start_param | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | If the startapp query string parameter is present in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links), pass it to start_param. |
| theme_params | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[DataJSON](/type/DataJSON/) | [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) |
| platform | [string](/type/string/) | Short name of the application; 0-64 English letters, digits, and underscores |

## Результат

[WebViewResult](/type/WebViewResult/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_APP_BOT_INVALID | The bot_id passed in the inputBotAppShortName constructor is invalid. |
| 400 | BOT_APP_INVALID | The specified bot app is invalid. |
| 400 | BOT_APP_SHORTNAME_INVALID | The specified bot app short name is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | THEME_PARAMS_INVALID | The specified theme_params field is invalid. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [messages.getBotApp](/method/messages.getBotApp/)

Obtain information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps)

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)

#### [messages.prolongWebView](/method/messages.prolongWebView/)

Indicate to the server (from the user side) that the user is still using a web app.

If the method returns a `QUERY_ID_INVALID` error, the webview must be closed.
