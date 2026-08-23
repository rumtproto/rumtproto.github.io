---
title: "webPageAttributeTheme (конструктор)"
original: "https://core.telegram.org/constructor/webPageAttributeTheme"
section: ref
kind: constructor
layout: layout.njk
---

# webPageAttributeTheme

*Конструктор из схемы TL.*

> Page theme

## Определение TL

```
webPageAttributeTheme#54b56617 flags:# documents:flags.0?Vector<Document> settings:flags.1?ThemeSettings = WebPageAttribute;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| documents | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Theme files |
| settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[ThemeSettings](/type/ThemeSettings/) | Theme settings |

## Тип

[WebPageAttribute](/type/WebPageAttribute/)
