---
title: "messages.translateResult (конструктор)"
original: "https://core.telegram.org/constructor/messages.translateResult"
section: ref
kind: constructor
layout: layout.njk
---

# messages.translateResult

*Конструктор из схемы TL.*

> Translated text with [entities](https://core.telegram.org/api/entities)

## Определение TL

```
messages.translateResult#33db32f8 result:Vector<TextWithEntities> = messages.TranslatedText;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| result | [Vector](https://core.telegram.org/type/Vector%20t)<[TextWithEntities](/type/TextWithEntities/)> | Text+[entities](https://core.telegram.org/api/entities), for each input message. |

## Тип

[messages.TranslatedText](/type/messages.TranslatedText/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
