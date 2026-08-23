---
title: "Messages.EmojiGameInfo (тип)"
original: "https://core.telegram.org/type/messages.EmojiGameInfo"
section: ref
kind: type
layout: layout.njk
---

# Messages.EmojiGameInfo

*Тип из схемы TL.*

> Dice game information.

## Определение TL

```
messages.emojiGameUnavailable#59e65335 = messages.EmojiGameInfo;
messages.emojiGameDiceInfo#44e56023 flags:# game_hash:string prev_stake:long current_streak:int params:Vector<int> plays_left:flags.0?int = messages.EmojiGameInfo;

---functions---

messages.getEmojiGameInfo#fb7e8ca7 = messages.EmojiGameInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.emojiGameUnavailable](/constructor/messages.emojiGameUnavailable/) | Dice game information. |
| [messages.emojiGameDiceInfo](/constructor/messages.emojiGameDiceInfo/) | Dice game information. |

## Методы

| Method | Описание |
|---|---|
| [messages.getEmojiGameInfo](/method/messages.getEmojiGameInfo/) | Fetch dice game information. |
