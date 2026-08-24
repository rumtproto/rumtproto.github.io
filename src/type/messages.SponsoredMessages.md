---
title: "messages.SponsoredMessages"
original: "https://core.telegram.org/type/messages.SponsoredMessages"
section: ref
kind: type
description: "Набор рекламных сообщений, связанных с каналом"
layout: layout.njk
---

# messages.SponsoredMessages

Набор [рекламных сообщений](/api/sponsored-messages/), связанных с каналом

```
messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;
messages.sponsoredMessagesEmpty#1839490f = messages.SponsoredMessages;

---functions---

messages.getSponsoredMessages#3d6ce850 flags:# peer:InputPeer msg_id:flags.0?int = messages.SponsoredMessages;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.sponsoredMessages">messages.sponsoredMessages</a></td><td>Набор рекламных сообщений, связанных с каналом</td></tr><tr><td><a href="/constructor/messages.sponsoredMessagesEmpty">messages.sponsoredMessagesEmpty</a></td><td>Рекламные сообщения недоступны.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.getSponsoredMessages">messages.getSponsoredMessages</a></td><td>Получить список <a href="/api/sponsored-messages">рекламных сообщений для пира, подробнее см. здесь »</a>.</td></tr></tbody></table>
