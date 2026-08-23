---
title: "webViewResultUrl (конструктор)"
original: "https://core.telegram.org/constructor/webViewResultUrl"
section: ref
kind: constructor
layout: layout.njk
---

# webViewResultUrl

*Конструктор из схемы TL.*

> Contains the webview URL with appropriate theme and user info parameters added

## Определение TL

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| fullsize | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, the app must be opened in fullsize mode instead of compact mode. |
| fullscreen | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | If set, the app must be opened in fullscreen |
| query_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | Webview session ID (only returned by [inline button mini apps](https://core.telegram.org/api/bots/webapps#inline-button-mini-apps), [menu button mini apps](https://core.telegram.org/api/bots/webapps#menu-button-mini-apps), [attachment menu mini apps](https://core.telegram.org/api/bots/webapps#attachment-menu-mini-apps)). |
| url | [string](/type/string/) | Webview URL to open |

## Тип

[WebViewResult](/type/WebViewResult/)

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
