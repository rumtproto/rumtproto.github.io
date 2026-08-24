---
title: "messages.emojiGameDiceInfo"
original: "https://core.telegram.org/constructor/messages.emojiGameDiceInfo"
section: ref
kind: constructor
description: "Информация об игре в кости."
layout: layout.njk
---

# messages.emojiGameDiceInfo

Информация об игре в кости.

```
messages.emojiGameDiceInfo#44e56023 flags:# game_hash:string prev_stake:long current_streak:int params:Vector<int> plays_left:flags.0?int = messages.EmojiGameInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>game_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш игры.</td></tr><tr><td><strong>prev_stake</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Предыдущая ставка.</td></tr><tr><td><strong>current_streak</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Текущая серия.</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Параметры.</td></tr><tr><td><strong>plays_left</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Осталось попыток запуска.</td></tr></tbody></table>

### Тип

[messages.EmojiGameInfo](/type/messages.EmojiGameInfo/)
