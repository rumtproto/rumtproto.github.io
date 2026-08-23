---
title: "game (конструктор)"
original: "https://core.telegram.org/constructor/game"
section: ref
kind: constructor
layout: layout.njk
---

# game

*Конструктор из схемы TL.*

> Indicates an already sent game

## Определение TL

```
game#bdf9653b flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document = Game;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [long](/type/long/) | ID of the game |
| access_hash | [long](/type/long/) | Access hash of the game |
| short_name | [string](/type/string/) | Short name for the game |
| title | [string](/type/string/) | Title of the game |
| description | [string](/type/string/) | Game description |
| photo | [Photo](/type/Photo/) | Game preview |
| document | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Document](/type/Document/) | Optional attached document |

## Тип

[Game](/type/Game/)
