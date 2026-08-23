---
title: "botPreviewMedia (конструктор)"
original: "https://core.telegram.org/constructor/botPreviewMedia"
section: ref
kind: constructor
layout: layout.njk
---

# botPreviewMedia

*Конструктор из схемы TL.*

> Represents a [Main Mini App preview media, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info.

## Определение TL

```
botPreviewMedia#23e91ba3 date:int media:MessageMedia = BotPreviewMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| date | [int](/type/int/) | When was this media last updated. |
| media | [MessageMedia](/type/MessageMedia/) | The actual photo/video. |

## Тип

[BotPreviewMedia](/type/BotPreviewMedia/)

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
