---
title: "messages.BotCallbackAnswer"
original: "https://core.telegram.org/type/messages.BotCallbackAnswer"
section: ref
kind: type
description: "Ответ бота на callback-запрос"
layout: layout.njk
---

# Messages.BotCallbackAnswer

Ответ бота на callback-запрос

```
messages.botCallbackAnswer#36585ea4 flags:# alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?string url:flags.2?string cache_time:int = messages.BotCallbackAnswer;

---functions---

messages.getBotCallbackAnswer#9342ca07 flags:# game:flags.1?true peer:InputPeer msg_id:int data:flags.0?bytes password:flags.2?InputCheckPasswordSRP = messages.BotCallbackAnswer;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.botCallbackAnswer">messages.botCallbackAnswer</a></td><td>Ответ на callback-запрос, отправленный ботом в ответ на нажатие кнопки</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getBotCallbackAnswer">messages.getBotCallbackAnswer</a></td><td>Нажать инлайн-кнопку обратного вызова и получить ответ от бота</td></tr></tbody></table>
