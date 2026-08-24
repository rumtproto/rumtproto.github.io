---
title: "updateEncryptedChatTyping"
original: "https://core.telegram.org/constructor/updateEncryptedChatTyping"
section: ref
kind: constructor
description: "Собеседник набирает сообщение в секретном чате. Период обновления — 6 секунд. Если за это время повторное обновление не пришло, следует считать, что собеседник перестал набирать…"
layout: layout.njk
---

# updateEncryptedChatTyping

Собеседник набирает сообщение в секретном чате. Период обновления — 6 секунд. Если за это время повторное обновление не пришло, следует считать, что собеседник перестал набирать текст.

```
updateEncryptedChatTyping#1710f156 chat_id:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор чата</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
