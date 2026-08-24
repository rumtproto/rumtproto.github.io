---
title: "updateChatUserTyping"
original: "https://core.telegram.org/constructor/updateChatUserTyping"
section: ref
kind: constructor
description: "Пользователь готовит сообщение в группе: набирает текст, записывает, загружает и т. п. Это обновление действительно 6 секунд. Если в течение 6 секунд не поступит новых обновлений…"
layout: layout.njk
---

# updateChatUserTyping

Пользователь готовит сообщение в группе: набирает текст, записывает, загружает и т. п. Это обновление действительно 6 секунд. Если в течение 6 секунд не поступит новых обновлений такого рода, следует считать, что пользователь прекратил своё действие

```
updateChatUserTyping#83487af0 chat_id:long from_id:Peer action:SendMessageAction = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор группы</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Пир, начавший набирать текст (может быть самим чатом в случае анонимных администраторов).</td></tr><tr><td><strong>action</strong></td><td style="text-align: center;"><a href="/type/SendMessageAction">SendMessageAction</a></td><td>Тип действия</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
