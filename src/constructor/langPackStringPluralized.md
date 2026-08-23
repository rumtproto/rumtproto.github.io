---
title: "langPackStringPluralized (конструктор)"
original: "https://core.telegram.org/constructor/langPackStringPluralized"
section: ref
kind: constructor
layout: layout.njk
---

# langPackStringPluralized

*Конструктор из схемы TL.*

> A language pack string which has different forms based on the number of some object it mentions. See [https://www.unicode.org/cldr/charts/latest/supplemental/language\_plural\_rules.html](https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html) for more info

## Определение TL

```
langPackStringPluralized#6c47ac9f flags:# key:string zero_value:flags.0?string one_value:flags.1?string two_value:flags.2?string few_value:flags.3?string many_value:flags.4?string other_value:string = LangPackString;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| key | [string](/type/string/) | Localization key |
| zero_value | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Value for zero objects |
| one_value | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Value for one object |
| two_value | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Value for two objects |
| few_value | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Value for a few objects |
| many_value | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](/type/string/) | Value for many objects |
| other_value | [string](/type/string/) | Default value |

## Тип

[LangPackString](/type/LangPackString/)
