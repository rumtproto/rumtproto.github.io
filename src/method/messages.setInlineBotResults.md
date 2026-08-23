---
title: "messages.setInlineBotResults (метод)"
original: "https://core.telegram.org/method/messages.setInlineBotResults"
section: ref
kind: method
layout: layout.njk
---

# messages.setInlineBotResults

*Метод из схемы TL.*

> Answer an inline query, for bots only

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setInlineBotResults#bb12a419 flags:# gallery:flags.0?true private:flags.1?true query_id:long results:Vector<InputBotInlineResult> cache_time:int next_offset:flags.2?string switch_pm:flags.3?InlineBotSwitchPM switch_webview:flags.4?InlineBotWebView = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| gallery | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Set this flag if the results are composed of media files |
| private | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Set this flag if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query |
| query_id | [long](/type/long/) | Unique identifier for the answered query |
| results | [Vector](https://core.telegram.org/type/Vector%20t)<[InputBotInlineResult](/type/InputBotInlineResult/)> | Vector of results for the inline query |
| cache_time | [int](/type/int/) | The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. |
| switch_pm | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[InlineBotSwitchPM](/type/InlineBotSwitchPM/) | If passed, clients will display a button on top of the remaining inline result list with the specified text, that switches the user to a private chat with the bot and sends the bot a start message with a certain parameter. |
| switch_webview | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[InlineBotWebView](/type/InlineBotWebView/) | If passed, clients will display a button on top of the remaining inline result list with the specified text, that switches the user to the specified [inline mode mini app](https://core.telegram.org/api/bots/webapps#inline-mode-mini-apps). |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | ARTICLE_TITLE_EMPTY | The title of the article is empty. |
| 400 | AUDIO_CONTENT_URL_EMPTY | The remote URL specified in the content field is empty. |
| 400 | AUDIO_TITLE_EMPTY | An empty audio title was provided. |
| 400 | BUTTON_DATA_INVALID | The data of one or more of the buttons you provided is invalid. |
| 400 | BUTTON_TYPE_INVALID | The type of one or more of the buttons you provided is invalid. |
| 400 | BUTTON_URL_INVALID | Button URL invalid. |
| 400 | DOCUMENT_INVALID | The specified document is invalid. |
| 400 | FILE_CONTENT_TYPE_INVALID | File content-type is invalid. |
| 400 | FILE_TITLE_EMPTY | An empty file title was specified. |
| 400 | GIF_CONTENT_TYPE_INVALID | GIF content-type invalid. |
| 400 | MEDIA_CAPTION_TOO_LONG | The caption is too long. |
| 400 | MESSAGE_EMPTY | The provided message is empty. |
| 400 | MESSAGE_TOO_LONG | The provided message is too long. |
| 400 | NEXT_OFFSET_INVALID | The specified offset is longer than 64 bytes. |
| 400 | PEER_TYPES_INVALID | The passed [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/).peer_types field is invalid. |
| 400 | PHOTO_CONTENT_TYPE_INVALID | Photo mime-type invalid. |
| 400 | PHOTO_CONTENT_URL_EMPTY | Photo URL invalid. |
| 400 | PHOTO_INVALID | Photo invalid. |
| 400 | PHOTO_THUMB_URL_EMPTY | Photo thumbnail URL is empty. |
| 400 | QUERY_ID_INVALID | The query ID is invalid. |
| 400 | REPLY_MARKUP_INVALID | The provided reply markup is invalid. |
| 400 | RESULTS_TOO_MUCH | Too many results were provided. |
| 400 | RESULT_ID_DUPLICATE | You provided a duplicate result ID. |
| 400 | RESULT_ID_INVALID | One of the specified result IDs is invalid. |
| 400 | RESULT_TYPE_INVALID | Result type invalid. |
| 400 | SEND_MESSAGE_MEDIA_INVALID | Invalid media provided. |
| 400 | SEND_MESSAGE_TYPE_INVALID | The message type is invalid. |
| 400 | START_PARAM_EMPTY | The start parameter is empty. |
| 400 | START_PARAM_INVALID | Start parameter invalid. |
| 400 | STICKER_DOCUMENT_INVALID | The specified sticker document is invalid. |
| 400 | SWITCH_PM_TEXT_EMPTY | The switch_pm.text field was empty. |
| 400 | SWITCH_WEBVIEW_URL_INVALID | The URL specified in switch_webview.url is invalid! |
| 400 | URL_INVALID | Invalid URL provided. |
| 403 | USER_BOT_INVALID | User accounts must provide the bot method parameter when calling this method. If there is no such method parameter, this method can only be invoked by bot accounts. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
| 400 | VIDEO_CONTENT_TYPE_INVALID | The video's content type is invalid. |
| 400 | VIDEO_TITLE_EMPTY | The specified video title is empty. |
| 400 | WEBDOCUMENT_INVALID | Invalid webdocument URL provided. |
| 400 | WEBDOCUMENT_MIME_INVALID | Invalid webdocument mime type provided. |
| 400 | WEBDOCUMENT_SIZE_TOO_BIG | Webdocument is too big! |
| 400 | WEBDOCUMENT_URL_EMPTY | The passed web document URL is empty. |
| 400 | WEBDOCUMENT_URL_INVALID | The specified webdocument URL is invalid. |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/)

Button to switch the user to inline mode

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients must insert the bot's username and `query` into the chat input field, triggering an [inline query](https://core.telegram.org/api/bots/inline).

If `same_peer` is set, clients use the current chat. Otherwise, clients prompt the user to select a chat, filtered by `peer_types` if specified.
