---
title: "messages.getEmojiGameInfo (метод)"
original: "https://core.telegram.org/method/messages.getEmojiGameInfo"
section: ref
kind: method
layout: layout.njk
---

# messages.getEmojiGameInfo

*Метод из схемы TL.*

> Fetch dice game information.

## Определение TL

```
messages.emojiGameUnavailable#59e65335 = messages.EmojiGameInfo;
messages.emojiGameDiceInfo#44e56023 flags:# game_hash:string prev_stake:long current_streak:int params:Vector<int> plays_left:flags.0?int = messages.EmojiGameInfo;
---functions---
messages.getEmojiGameInfo#fb7e8ca7 = messages.EmojiGameInfo;
```

## Параметры

This constructor does not require any parameters.

## Результат

[messages.EmojiGameInfo](/type/messages.EmojiGameInfo/)

## Only users can use this method
