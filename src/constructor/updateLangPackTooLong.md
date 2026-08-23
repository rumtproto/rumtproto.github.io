---
title: "updateLangPackTooLong (конструктор)"
original: "https://core.telegram.org/constructor/updateLangPackTooLong"
section: ref
kind: constructor
layout: layout.njk
---

# updateLangPackTooLong

*Конструктор из схемы TL.*

> A language pack has changed, the client should manually fetch the changed strings using [langpack.getDifference](/method/langpack.getDifference/)

## Определение TL

```
updateLangPackTooLong#46560264 lang_code:string = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_code | [string](/type/string/) | Language code |

## Тип

[Update](/type/Update/)

## Related pages

#### [langpack.getDifference](/method/langpack.getDifference/)

Get new strings in language pack
