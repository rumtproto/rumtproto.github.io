---
title: "LangPackLanguage (тип)"
original: "https://core.telegram.org/type/LangPackLanguage"
section: ref
kind: type
layout: layout.njk
---

# LangPackLanguage

*Тип из схемы TL.*

> Language pack language

## Определение TL

```
langPackLanguage#eeca5ce3 flags:# official:flags.0?true rtl:flags.2?true beta:flags.3?true name:string native_name:string lang_code:string base_lang_code:flags.1?string plural_code:string strings_count:int translated_count:int translations_url:string = LangPackLanguage;

---functions---

langpack.getLanguage#6a596502 lang_pack:string lang_code:string = LangPackLanguage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [langPackLanguage](/constructor/langPackLanguage/) | Identifies a localization pack |

## Методы

| Method | Описание |
|---|---|
| [langpack.getLanguage](/method/langpack.getLanguage/) | Get information about a language in a localization pack |
