---
title: "langPackDifference (конструктор)"
original: "https://core.telegram.org/constructor/langPackDifference"
section: ref
kind: constructor
layout: layout.njk
---

# langPackDifference

*Конструктор из схемы TL.*

> Changes to the app's localization pack

## Определение TL

```
langPackDifference#f385c1f6 lang_code:string from_version:int version:int strings:Vector<LangPackString> = LangPackDifference;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| lang_code | [string](/type/string/) | Language code |
| from_version | [int](/type/int/) | Previous version number |
| version | [int](/type/int/) | New version number |
| strings | [Vector](https://core.telegram.org/type/Vector%20t)<[LangPackString](/type/LangPackString/)> | Localized strings |

## Тип

[LangPackDifference](/type/LangPackDifference/)
