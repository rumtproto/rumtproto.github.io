---
title: "stickers.suggestShortName (метод)"
original: "https://core.telegram.org/method/stickers.suggestShortName"
section: ref
kind: method
layout: layout.njk
---

# stickers.suggestShortName

*Метод из схемы TL.*

> Suggests a short name for a given stickerpack name

## Определение TL

```
stickers.suggestedShortName#85fea03f short_name:string = stickers.SuggestedShortName;
---functions---
stickers.suggestShortName#4dafc503 title:string = stickers.SuggestedShortName;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| title | [string](/type/string/) | Sticker pack name |

## Результат

[stickers.SuggestedShortName](/type/stickers.SuggestedShortName/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | TITLE_INVALID | The specified stickerpack title is invalid. |
