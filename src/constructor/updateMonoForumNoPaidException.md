---
title: "updateMonoForumNoPaidException"
original: "https://core.telegram.org/constructor/updateMonoForumNoPaidException"
section: ref
kind: constructor
description: "Администратор освободил эту тему монофорума » от платы за отправку сообщений (или отменил освобождение) с помощью account.toggleNoPaidMessagesException."
layout: layout.njk
---

# updateMonoForumNoPaidException

Администратор освободил эту [тему монофорума »](/api/monoforum/) от платы за отправку сообщений (или отменил освобождение) с помощью [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/).

```
updateMonoForumNoPaidException#9f812b08 flags:# exception:flags.0?true channel_id:long saved_peer_id:Peer = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>exception</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, администратор освободил этого пира от платы, иначе освобождение было отменено.</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор монофорума.</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Идентификатор пира или темы.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/)

Разрешить пользователю отправлять нам сообщения без оплаты, если включены [платные сообщения »](/api/paid-messages/).
