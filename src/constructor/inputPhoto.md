---
title: "inputPhoto (конструктор)"
original: "https://core.telegram.org/constructor/inputPhoto"
section: ref
kind: constructor
layout: layout.njk
---

# inputPhoto

*Конструктор из схемы TL.*

> Defines a photo for further interaction.

## Определение TL

```
inputPhoto#3bb3b94a id:long access_hash:long file_reference:bytes = InputPhoto;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Photo identifier |
| access_hash | [long](/type/long/) | access_hash value from the [photo](/constructor/photo/) constructor |
| file_reference | [bytes](/type/bytes/) | [File reference](https://core.telegram.org/api/file-references) |

## Тип

[InputPhoto](/type/InputPhoto/)

## Related pages

#### [photo](/constructor/photo/)

Photo

#### [File references](https://core.telegram.org/api/file-references)

How to handle file references.
