---
title: "messages.botCallbackAnswer (конструктор)"
original: "https://core.telegram.org/constructor/messages.botCallbackAnswer"
section: ref
kind: constructor
layout: layout.njk
---

# messages.botCallbackAnswer

*Конструктор из схемы TL.*

> Callback answer sent by the bot in response to a button press

## Определение TL

```
messages.botCallbackAnswer#36585ea4 flags:# alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?string url:flags.2?string cache_time:int = messages.BotCallbackAnswer;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| alert | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether an alert should be shown to the user instead of a toast notification |
| has_url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether an URL is present |
| native_ui | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether to show games in WebView or in native UI. |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Alert to show |
| url | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | URL to open |
| cache_time | [int](/type/int/) | For how long should this answer be cached |

## Тип

[messages.BotCallbackAnswer](/type/messages.BotCallbackAnswer/)
