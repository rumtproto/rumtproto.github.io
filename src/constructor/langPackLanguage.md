---
title: "langPackLanguage (конструктор)"
original: "https://core.telegram.org/constructor/langPackLanguage"
section: ref
kind: constructor
layout: layout.njk
---

# langPackLanguage

*Конструктор из схемы TL.*

> Identifies a localization pack

## Определение TL

```
langPackLanguage#eeca5ce3 flags:# official:flags.0?true rtl:flags.2?true beta:flags.3?true name:string native_name:string lang_code:string base_lang_code:flags.1?string plural_code:string strings_count:int translated_count:int translations_url:string = LangPackLanguage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| official | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the language pack is official |
| rtl | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Is this a localization pack for an RTL language |
| beta | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Is this a beta localization pack? |
| name | [string](/type/string/) | Language name |
| native_name | [string](/type/string/) | Language name in the language itself |
| lang_code | [string](/type/string/) | Language code (pack identifier) |
| base_lang_code | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Identifier of a base language pack; may be empty. If a string is missed in the language pack, then it should be fetched from base language pack. Unsupported in custom language packs |
| plural_code | [string](/type/string/) | A language code to be used to apply plural forms. See [https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html](https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html) for more info |
| strings_count | [int](/type/int/) | Total number of non-deleted strings from the language pack |
| translated_count | [int](/type/int/) | Total number of translated strings from the language pack |
| translations_url | [string](/type/string/) | Link to language translation interface; empty for custom local language packs |

## Тип

[LangPackLanguage](/type/LangPackLanguage/)
