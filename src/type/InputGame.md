---
title: "InputGame (тип)"
original: "https://core.telegram.org/type/InputGame"
section: ref
kind: type
layout: layout.njk
---

# InputGame

*Тип из схемы TL.*

> A game to send

## Определение TL

```
inputGameID#32c3e77 id:long access_hash:long = InputGame;
inputGameShortName#c331e80a bot_id:InputUser short_name:string = InputGame;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputGameID](/constructor/inputGameID/) | Indicates an already sent game |
| [inputGameShortName](/constructor/inputGameShortName/) | Game by short name |
