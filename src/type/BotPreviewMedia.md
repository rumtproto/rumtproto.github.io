---
title: "BotPreviewMedia (тип)"
original: "https://core.telegram.org/type/BotPreviewMedia"
section: ref
kind: type
layout: layout.njk
---

# BotPreviewMedia

*Тип из схемы TL.*

> Represents a [Main Mini App preview media, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info.

## Определение TL

```
botPreviewMedia#23e91ba3 date:int media:MessageMedia = BotPreviewMedia;

---functions---

bots.addPreviewMedia#17aeb75a bot:InputUser lang_code:string media:InputMedia = BotPreviewMedia;
bots.editPreviewMedia#8525606f bot:InputUser lang_code:string media:InputMedia new_media:InputMedia = BotPreviewMedia;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [botPreviewMedia](/constructor/botPreviewMedia/) | Represents a [Main Mini App preview media, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info. |

## Методы

| Method | Описание |
|---|---|
| [bots.addPreviewMedia](/method/bots.addPreviewMedia/) | Add a [main mini app preview, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info. Only owners of bots with a configured Main Mini App can use this method, see [see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info on how to check if you can invoke this method. |
| [bots.editPreviewMedia](/method/bots.editPreviewMedia/) | Edit a [main mini app preview, see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info. Only owners of bots with a configured Main Mini App can use this method, see [see here »](https://core.telegram.org/api/bots/webapps#main-mini-app-previews) for more info on how to check if you can invoke this method. |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.
