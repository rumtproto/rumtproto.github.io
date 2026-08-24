---
title: "decryptedMessageActionSetMessageTTL"
original: "https://core.telegram.org/constructor/decryptedMessageActionSetMessageTTL"
section: ref
kind: constructor
description: "Установка времени жизни сообщения после прочтения."
layout: layout.njk
---

# decryptedMessageActionSetMessageTTL

Установка времени жизни сообщения после прочтения.

[@term:TTL] При получении такого сообщения клиенту следует начать удаление всех сообщений секретного чата через **ttl\_seconds** секунд после того, как пользователь их прочитает.

```
===8===
decryptedMessageActionSetMessageTTL#a1733aec ttl_seconds:int = DecryptedMessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Время жизни в секундах</td></tr></tbody></table>

### Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)
