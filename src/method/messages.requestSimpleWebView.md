---
title: "messages.requestSimpleWebView (метод)"
original: "https://core.telegram.org/method/messages.requestSimpleWebView"
section: ref
kind: method
layout: layout.njk
---

# messages.requestSimpleWebView

*Метод из схемы TL.*

> Open a [bot mini app](https://core.telegram.org/api/bots/webapps).

## Определение TL

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;
---functions---
messages.requestSimpleWebView#413a3e73 flags:# from_switch_webview:flags.1?true from_side_menu:flags.2?true compact:flags.7?true fullscreen:flags.8?true bot:InputUser url:flags.3?string start_param:flags.4?string theme_params:flags.0?DataJSON platform:string = WebViewResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| from_switch_webview | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the webapp was opened by clicking on the switch_webview button shown on top of the inline results list returned by [messages.getInlineBotResults](/method/messages.getInlineBotResults/). |
| from_side_menu | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Set this flag if opening the Mini App from the installed [side menu entry »](https://core.telegram.org/api/bots/attach). |
| compact | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Deprecated. |
| fullscreen | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Requests to open the app in fullscreen mode. |
| bot | [InputUser](/type/InputUser/) | Bot that owns the mini app |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Web app URL, if opening from a keyboard button or inline result |
| start_param | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](/type/string/) | Deprecated. |
| theme_params | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[DataJSON](/type/DataJSON/) | [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) |
| platform | [string](/type/string/) | Short name of the application; 0-64 English letters, digits, and underscores |

## Результат

[WebViewResult](/type/WebViewResult/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | URL_INVALID | Invalid URL provided. |

## Related pages

#### [messages.getInlineBotResults](/method/messages.getInlineBotResults/)

Query an inline bot

#### [Bot attachment menu and side menu entries](https://core.telegram.org/api/bots/attach)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
