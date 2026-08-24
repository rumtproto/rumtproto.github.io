---
title: "sendMessageEmojiInteraction"
original: "https://core.telegram.org/constructor/sendMessageEmojiInteraction"
section: ref
kind: constructor
description: "Пользователь нажал на анимированный эмодзи, вызвав реакцию; подробнее см. здесь »."
layout: layout.njk
---

# sendMessageEmojiInteraction

Пользователь нажал на анимированный эмодзи, вызвав [реакцию; подробнее см. здесь »](/api/animated-emojis/#emoji-reactions).

```
sendMessageEmojiInteraction#25972bcb emoticon:string msg_id:int interaction:DataJSON = SendMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:emoticon] Эмодзи</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения с анимированным эмодзи, по которому был выполнен щелчок</td></tr><tr><td><strong>interaction</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Объект JSON со сведениями о взаимодействии, <a href="/api/animated-emojis#emoji-reactions">подробнее см. здесь »</a></td></tr></tbody></table>

### Тип

[SendMessageAction](/type/SendMessageAction/)

### Связанные страницы

#### [Анимированные эмодзи](/api/animated-emojis/)

Графические клиенты Telegram должны заменять эмодзи соответствующей анимированной версией.
