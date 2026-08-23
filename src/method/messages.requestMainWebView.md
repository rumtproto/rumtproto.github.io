---
title: "messages.requestMainWebView (метод)"
original: "https://core.telegram.org/method/messages.requestMainWebView"
section: ref
kind: method
layout: layout.njk
---

# messages.requestMainWebView

*Метод из схемы TL.*

> Open a [Main Mini App](https://core.telegram.org/api/bots/webapps#main-mini-apps).

## Определение TL

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;
---functions---
messages.requestMainWebView#c9e01e7b flags:# compact:flags.7?true fullscreen:flags.8?true peer:InputPeer bot:InputUser start_param:flags.1?string theme_params:flags.0?DataJSON platform:string = WebViewResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| compact | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | If set, requests to open the mini app in compact mode (as opposed to normal or fullscreen mode). Must be set if the mode parameter of the [Main Mini App link](https://core.telegram.org/api/links#main-mini-app-links) is equal to compact. |
| fullscreen | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | If set, requests to open the mini app in fullscreen mode (as opposed to compact or normal mode). Must be set if the mode parameter of the [Main Mini App link](https://core.telegram.org/api/links#main-mini-app-links) is equal to fullscreen. |
| peer | [InputPeer](/type/InputPeer/) | Currently open chat, may be [inputPeerEmpty](/constructor/inputPeerEmpty/) if no chat is currently open. |
| bot | [InputUser](/type/InputUser/) | Bot that owns the main mini app. |
| start_param | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Start parameter, if opening from a [Main Mini App link »](https://core.telegram.org/api/links#main-mini-app-links). |
| theme_params | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[DataJSON](/type/DataJSON/) | [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) |
| platform | [string](/type/string/) | Short name of the application; 0-64 English letters, digits, and underscores |

## Результат

[WebViewResult](/type/WebViewResult/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [inputPeerEmpty](/constructor/inputPeerEmpty/)

An empty constructor, no user or chat is defined.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
