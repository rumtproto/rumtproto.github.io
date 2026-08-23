---
title: "bots.editPreviewMedia (метод)"
original: "https://core.telegram.org/method/bots.editPreviewMedia"
section: ref
kind: method
layout: layout.njk
---

# bots.editPreviewMedia

*Метод из схемы TL.*

> Edit a [main mini app preview, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info.
> Only owners of bots with a configured Main Mini App can use this method, see [see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info on how to check if you can invoke this method.

## Определение TL

```
botPreviewMedia#23e91ba3 date:int media:MessageMedia = BotPreviewMedia;
---functions---
bots.editPreviewMedia#8525606f bot:InputUser lang_code:string media:InputMedia new_media:InputMedia = BotPreviewMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | The bot that owns the Main Mini App. |
| lang_code | [string](/type/string/) | ISO 639-1 language code, indicating the localization of the preview to edit. |
| media | [InputMedia](/type/InputMedia/) | The photo/video preview to replace, previously fetched as specified [here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews). |
| new_media | [InputMedia](/type/InputMedia/) | The new photo/video preview, uploaded using [messages.uploadMedia](/method/messages.uploadMedia/). |

## Результат

[BotPreviewMedia](/type/BotPreviewMedia/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [messages.uploadMedia](/method/messages.uploadMedia/)

Upload a file and associate it to a chat (without actually sending it to the chat)

May also be used in a [business connection](https://core.telegram.org/api/bots/connected-business-bots), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the business connection ID in the `business_connection_id` parameter.
