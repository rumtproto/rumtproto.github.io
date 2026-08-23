---
title: "bots.reorderPreviewMedias (метод)"
original: "https://core.telegram.org/method/bots.reorderPreviewMedias"
section: ref
kind: method
layout: layout.njk
---

# bots.reorderPreviewMedias

*Метод из схемы TL.*

> Reorder a [main mini app previews, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info.
> Only owners of bots with a configured Main Mini App can use this method, see [see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info on how to check if you can invoke this method.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.reorderPreviewMedias#b627f3aa bot:InputUser lang_code:string order:Vector<InputMedia> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | The bot that owns the Main Mini App. |
| lang_code | [string](/type/string/) | ISO 639-1 language code, indicating the localization of the previews to reorder. |
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[InputMedia](/type/InputMedia/)> | New order of the previews. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
