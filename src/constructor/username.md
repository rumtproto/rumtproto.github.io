---
title: "username (конструктор)"
original: "https://core.telegram.org/constructor/username"
section: ref
kind: constructor
layout: layout.njk
---

# username

*Конструктор из схемы TL.*

> Contains information about a username.

## Определение TL

```
username#b4073647 flags:# editable:flags.0?true active:flags.1?true username:string = Username;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| editable | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the username is editable, meaning it wasn't bought on [fragment](https://fragment.com). |
| active | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the username is active. |
| username | [string](/type/string/) | The username. |

## Тип

[Username](/type/Username/)
