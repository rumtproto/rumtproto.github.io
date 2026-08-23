---
title: "bots.getPreviewInfo (метод)"
original: "https://core.telegram.org/method/bots.getPreviewInfo"
section: ref
kind: method
layout: layout.njk
---

# bots.getPreviewInfo

*Метод из схемы TL.*

> Bot owners only, fetch [main mini app preview information, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info.
> Note: technically non-owners may also invoke this method, but it will always behave exactly as [bots.getPreviewMedias](/method/bots.getPreviewMedias/), returning only previews for the current language and an empty `lang_codes` array, regardless of the passed `lang_code`, so please only use [bots.getPreviewMedias](/method/bots.getPreviewMedias/) if you're not the owner of the `bot`.

## Определение TL

```
bots.previewInfo#ca71d64 media:Vector<BotPreviewMedia> lang_codes:Vector<string> = bots.PreviewInfo;
---functions---
bots.getPreviewInfo#423ab3ad bot:InputUser lang_code:string = bots.PreviewInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | The bot that owns the Main Mini App. |
| lang_code | [string](/type/string/) | Fetch previews for the specified ISO 639-1 language code. |

## Результат

[bots.PreviewInfo](/type/bots.PreviewInfo/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [bots.getPreviewMedias](/method/bots.getPreviewMedias/)

Fetch [main mini app previews, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info.
