---
title: "updateReadMonoForumOutbox"
original: "https://core.telegram.org/constructor/updateReadMonoForumOutbox"
section: ref
kind: constructor
description: "Исходящие сообщения в монофоруме были прочитаны."
layout: layout.njk
---

# updateReadMonoForumOutbox

Исходящие сообщения в [монофоруме](/api/monoforum/) были прочитаны.

```
updateReadMonoForumOutbox#a4a79376 channel_id:long saved_peer_id:Peer read_max_id:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор монофорума.</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Идентификатор темы.</td></tr><tr><td><strong>read_max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция, до которой прочитаны все исходящие сообщения.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.
