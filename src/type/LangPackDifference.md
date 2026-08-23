---
title: "LangPackDifference (тип)"
original: "https://core.telegram.org/type/LangPackDifference"
section: ref
kind: type
layout: layout.njk
---

# LangPackDifference

*Тип из схемы TL.*

> Language pack changes

## Определение TL

```
langPackDifference#f385c1f6 lang_code:string from_version:int version:int strings:Vector<LangPackString> = LangPackDifference;

---functions---

langpack.getLangPack#f2f2330a lang_pack:string lang_code:string = LangPackDifference;
langpack.getDifference#cd984aa5 lang_pack:string lang_code:string from_version:int = LangPackDifference;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [langPackDifference](/constructor/langPackDifference/) | Changes to the app's localization pack |

## Методы

| Method | Описание |
|---|---|
| [langpack.getLangPack](/method/langpack.getLangPack/) | Get localization pack strings |
| [langpack.getDifference](/method/langpack.getDifference/) | Get new strings in language pack |
