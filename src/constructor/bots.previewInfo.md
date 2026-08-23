---
title: "bots.previewInfo (конструктор)"
original: "https://core.telegram.org/constructor/bots.previewInfo"
section: ref
kind: constructor
layout: layout.njk
---

# bots.previewInfo

*Конструктор из схемы TL.*

> Contains info about [Main Mini App previews, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info.

## Определение TL

```
bots.previewInfo#ca71d64 media:Vector<BotPreviewMedia> lang_codes:Vector<string> = bots.PreviewInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| media | [Vector](https://core.telegram.org/type/Vector%20t)<[BotPreviewMedia](/type/BotPreviewMedia/)> | All preview medias for the language code passed to [bots.getPreviewInfo](/method/bots.getPreviewInfo/). |
| lang_codes | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | All available language codes for which preview medias were uploaded (regardless of the language code passed to [bots.getPreviewInfo](/method/bots.getPreviewInfo/)). |

## Тип

[bots.PreviewInfo](/type/bots.PreviewInfo/)

## Related pages

#### [bots.getPreviewInfo](/method/bots.getPreviewInfo/)

Bot owners only, fetch [main mini app preview information, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info.

Note: technically non-owners may also invoke this method, but it will always behave exactly as [bots.getPreviewMedias](/method/bots.getPreviewMedias/), returning only previews for the current language and an empty `lang_codes` array, regardless of the passed `lang_code`, so please only use [bots.getPreviewMedias](/method/bots.getPreviewMedias/) if you're not the owner of the `bot`.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
