---
title: "exportedContactToken (конструктор)"
original: "https://core.telegram.org/constructor/exportedContactToken"
section: ref
kind: constructor
layout: layout.njk
---

# exportedContactToken

*Конструктор из схемы TL.*

> Describes a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links).

## Определение TL

```
exportedContactToken#41bf109b url:string expires:int = ExportedContactToken;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| url | [string](/type/string/) | The [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links). |
| expires | [int](/type/int/) | Its expiration date |

## Тип

[ExportedContactToken](/type/ExportedContactToken/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
