---
title: "messageMediaDice"
original: "https://core.telegram.org/constructor/messageMediaDice"
section: ref
kind: constructor
description: "Анимированный стикер с кубиком"
layout: layout.njk
---

# messageMediaDice

[Анимированный стикер с кубиком](/api/dice/)

```
messageMediaDice#8cbec07 flags:# value:int emoticon:string game_outcome:flags.0?messages.EmojiGameOutcome = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>value</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/dice">Значение кубика</a></td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:emoticon] Эмодзи; пока поддерживаются <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8F80.png" width="20" height="20" alt="🏀">, <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB2.png" width="20" height="20" alt="🎲"> и <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EAF.png" width="20" height="20" alt="🎯"></td></tr><tr><td><strong>game_outcome</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/messages.EmojiGameOutcome">messages.EmojiGameOutcome</a></td><td>Результат игры в кости.</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)

### Связанные страницы

#### [Анимированные кости](/api/dice/)

Telegram поддерживает отправку анимированных эмодзи с игральными костями.
