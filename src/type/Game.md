---
title: "Game (тип)"
original: "https://core.telegram.org/type/Game"
section: ref
kind: type
layout: layout.njk
---

# Game

*Тип из схемы TL.*

> Indicates an already sent game

## Определение TL

```
game#bdf9653b flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document = Game;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [game](/constructor/game/) | Indicates an already sent game |
