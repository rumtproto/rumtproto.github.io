---
title: "messages.emojiGameDiceInfo (конструктор)"
original: "https://core.telegram.org/constructor/messages.emojiGameDiceInfo"
section: ref
kind: constructor
layout: layout.njk
---

# messages.emojiGameDiceInfo

*Конструктор из схемы TL.*

> Dice game information.

## Определение TL

```
messages.emojiGameDiceInfo#44e56023 flags:# game_hash:string prev_stake:long current_streak:int params:Vector<int> plays_left:flags.0?int = messages.EmojiGameInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| game_hash | [string](/type/string/) | Game hash. |
| prev_stake | [long](/type/long/) | Previous stake. |
| current_streak | [int](/type/int/) | Current streak. |
| params | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Parameters. |
| plays_left | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Plays left. |

## Тип

[messages.EmojiGameInfo](/type/messages.EmojiGameInfo/)
