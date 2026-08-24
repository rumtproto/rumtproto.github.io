---
title: "DecryptedMessage"
original: "https://core.telegram.org/type/DecryptedMessage"
section: ref
kind: type
description: "Объект описывает содержимое зашифрованного сообщения."
layout: layout.njk
---

# DecryptedMessage

Объект описывает содержимое зашифрованного сообщения.

```
===8===
decryptedMessage#1f814f1f random_id:long random_bytes:bytes message:string media:DecryptedMessageMedia = DecryptedMessage;
decryptedMessageService#aa48327d random_id:long random_bytes:bytes action:DecryptedMessageAction = DecryptedMessage;

===17===
decryptedMessage#204d3878 random_id:long ttl:int message:string media:DecryptedMessageMedia = DecryptedMessage;
decryptedMessageService#73164160 random_id:long action:DecryptedMessageAction = DecryptedMessage;

===45===
decryptedMessage#36b091de flags:# random_id:long ttl:int message:string media:flags.9?DecryptedMessageMedia entities:flags.7?Vector<MessageEntity> via_bot_name:flags.11?string reply_to_random_id:flags.3?long = DecryptedMessage;

===73===
decryptedMessage#91cc4674 flags:# no_webpage:flags.1?true silent:flags.5?true random_id:long ttl:int message:string media:flags.9?DecryptedMessageMedia entities:flags.7?Vector<MessageEntity> via_bot_name:flags.11?string reply_to_random_id:flags.3?long grouped_id:flags.17?long = DecryptedMessage;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/decryptedMessage">decryptedMessage</a></td><td>Содержимое зашифрованного сообщения.</td></tr><tr><td><a href="/constructor/decryptedMessageService">decryptedMessageService</a></td><td>Содержимое зашифрованного сервисного сообщения.</td></tr></tbody></table>
