---
title: "bots.PreviewInfo (тип)"
original: "https://core.telegram.org/type/bots.PreviewInfo"
section: ref
kind: type
layout: layout.njk
---

# bots.PreviewInfo

*Тип из схемы TL.*

> Contains info about [Main Mini App previews, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info.

## Определение TL

```
bots.previewInfo#ca71d64 media:Vector<BotPreviewMedia> lang_codes:Vector<string> = bots.PreviewInfo;

---functions---

bots.getPreviewInfo#423ab3ad bot:InputUser lang_code:string = bots.PreviewInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [bots.previewInfo](/constructor/bots.previewInfo/) | Contains info about [Main Mini App previews, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info. |

## Методы

| Method | Описание |
|---|---|
| [bots.getPreviewInfo](/method/bots.getPreviewInfo/) | Bot owners only, fetch [main mini app preview information, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info. Note: technically non-owners may also invoke this method, but it will always behave exactly as [bots.getPreviewMedias](/method/bots.getPreviewMedias/), returning only previews for the current language and an empty lang_codes array, regardless of the passed lang_code, so please only use [bots.getPreviewMedias](/method/bots.getPreviewMedias/) if you're not the owner of the bot. |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
