---
title: "messages.getInlineBotResults (метод)"
original: "https://core.telegram.org/method/messages.getInlineBotResults"
section: ref
kind: method
layout: layout.njk
---

# messages.getInlineBotResults

*Метод из схемы TL.*

> Query an inline bot

## Определение TL

```
messages.botResults#e021f2f6 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM switch_webview:flags.3?InlineBotWebView results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;
---functions---
messages.getInlineBotResults#514e999d flags:# bot:InputUser peer:InputPeer geo_point:flags.0?InputGeoPoint query:string offset:string = messages.BotResults;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| bot | [InputUser](/type/InputUser/) | The bot to query |
| peer | [InputPeer](/type/InputPeer/) | The currently opened chat |
| geo_point | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputGeoPoint](/type/InputGeoPoint/) | The geolocation, if requested |
| query | [string](/type/string/) | The query |
| offset | [string](/type/string/) | The offset within the results, will be passed directly as-is to the bot. |

## Результат

[messages.BotResults](/type/messages.BotResults/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INLINE_DISABLED | This bot can't be used in inline mode. |
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | BOT_RESPONSE_TIMEOUT | A timeout occurred while fetching data from the bot. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| -503 | Timeout | Timeout while fetching data. |
