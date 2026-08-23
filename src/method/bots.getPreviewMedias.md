---
title: "bots.getPreviewMedias (метод)"
original: "https://core.telegram.org/method/bots.getPreviewMedias"
section: ref
kind: method
layout: layout.njk
---

# bots.getPreviewMedias

*Метод из схемы TL.*

> Fetch [main mini app previews, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info.

## Определение TL

```
---functions---
bots.getPreviewMedias#a2a5594d bot:InputUser = Vector<BotPreviewMedia>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | The bot that owns the Main Mini App. |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[BotPreviewMedia](/type/BotPreviewMedia/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
