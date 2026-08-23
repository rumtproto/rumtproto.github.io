---
title: "messages.TranslatedText (тип)"
original: "https://core.telegram.org/type/messages.TranslatedText"
section: ref
kind: type
layout: layout.njk
---

# messages.TranslatedText

*Тип из схемы TL.*

> Translated text with [entities](https://core.telegram.org/api/entities).

## Определение TL

```
messages.translateResult#33db32f8 result:Vector<TextWithEntities> = messages.TranslatedText;

---functions---

messages.translateText#63183030 flags:# peer:flags.0?InputPeer id:flags.0?Vector<int> text:flags.1?Vector<TextWithEntities> to_lang:string = messages.TranslatedText;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.translateResult](/constructor/messages.translateResult/) | Translated text with [entities](https://core.telegram.org/api/entities) |

## Методы

| Method | Описание |
|---|---|
| [messages.translateText](/method/messages.translateText/) | Translate a given text. [Styled text entities](https://core.telegram.org/api/entities) will only be preserved for [Telegram Premium](https://core.telegram.org/api/premium) users. |

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities
