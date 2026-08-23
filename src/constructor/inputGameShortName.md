---
title: "inputGameShortName (конструктор)"
original: "https://core.telegram.org/constructor/inputGameShortName"
section: ref
kind: constructor
layout: layout.njk
---

# inputGameShortName

*Конструктор из схемы TL.*

> Game by short name

## Определение TL

```
inputGameShortName#c331e80a bot_id:InputUser short_name:string = InputGame;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot_id | [InputUser](/type/InputUser/) | The bot that provides the game |
| short_name | [string](/type/string/) | The game's short name, usually obtained from a [game link »](https://core.telegram.org/api/links#game-links) |

## Тип

[InputGame](/type/InputGame/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
