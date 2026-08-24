---
title: "sendMessageEmojiInteractionSeen"
original: "https://core.telegram.org/constructor/sendMessageEmojiInteractionSeen"
section: ref
kind: constructor
description: "Пользователь наблюдает за реакцией анимированным эмодзи, вызванной другим пользователем; подробнее см. здесь »."
layout: layout.njk
---

# sendMessageEmojiInteractionSeen

Пользователь наблюдает за реакцией анимированным эмодзи, вызванной другим пользователем; [подробнее см. здесь »](/api/animated-emojis/#emoji-reactions).

```
sendMessageEmojiInteractionSeen#b665902e emoticon:string = SendMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:emoticon] Эмодзи</td></tr></tbody></table>

### Тип

[SendMessageAction](/type/SendMessageAction/)

### Связанные страницы

#### [Анимированные эмодзи](/api/animated-emojis/)

Графические клиенты Telegram должны заменять эмодзи соответствующей анимированной версией.
