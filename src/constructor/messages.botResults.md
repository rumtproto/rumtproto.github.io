---
title: "messages.botResults (конструктор)"
original: "https://core.telegram.org/constructor/messages.botResults"
section: ref
kind: constructor
layout: layout.njk
---

# messages.botResults

*Конструктор из схемы TL.*

> Result of a query to an inline bot

## Определение TL

```
messages.botResults#e021f2f6 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM switch_webview:flags.3?InlineBotWebView results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| gallery | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the result is a picture gallery |
| query_id | [long](/type/long/) | Query ID |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | The next offset to use when navigating through results |
| switch_pm | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InlineBotSwitchPM](/type/InlineBotSwitchPM/) | Shown as a button on top of the remaining inline result list; if clicked, redirects the user to a private chat with the bot with the specified start parameter. |
| switch_webview | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[InlineBotWebView](/type/InlineBotWebView/) | Shown as a button on top of the remaining inline result list; if clicked, opens the specified [inline mode mini app](https://core.telegram.org/api/bots/webapps#inline-mode-mini-apps). |
| results | [Vector](https://core.telegram.org/type/Vector%20t)<[BotInlineResult](/type/BotInlineResult/)> | The results |
| cache_time | [int](/type/int/) | Caching validity of the results |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in the results |

## Тип

[messages.BotResults](/type/messages.BotResults/)

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
