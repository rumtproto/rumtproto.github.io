---
title: "messageMediaDice (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaDice"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaDice

*Конструктор из схемы TL.*

> [Dice-based animated sticker](https://core.telegram.org/api/dice)

## Определение TL

```
messageMediaDice#8cbec07 flags:# value:int emoticon:string game_outcome:flags.0?messages.EmojiGameOutcome = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| value | [int](/type/int/) | [Dice value](https://core.telegram.org/api/dice) |
| emoticon | [string](/type/string/) | The emoji, for now , and are supported |
| game_outcome | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[messages.EmojiGameOutcome](/type/messages.EmojiGameOutcome/) | Dice game outcome. |

## Тип

[MessageMedia](/type/MessageMedia/)

## Related pages

#### [Animated dice](https://core.telegram.org/api/dice)

Telegram supports sending animated dice emojis.
