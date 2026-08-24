---
title: "messages.sponsoredMessages"
original: "https://core.telegram.org/constructor/messages.sponsoredMessages"
section: ref
kind: constructor
description: "Набор рекламных сообщений, связанных с каналом"
layout: layout.njk
---

# messages.sponsoredMessages

Набор рекламных сообщений, связанных с каналом

```
messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>posts_between</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Если установлено, задаёт минимальное число сообщений между показываемыми рекламными сообщениями; иначе после всех обычных сообщений должно быть показано лишь одно рекламное сообщение.</td></tr><tr><td><strong>start_delay</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Для <a href="/api/sponsored-messages#getting-sponsored-video-advertisements">рекламных сообщений, показываемых поверх видео в каналах »</a>, — число секунд, которое нужно выждать перед показом первой рекламы.</td></tr><tr><td><strong>between_delay</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Для <a href="/api/sponsored-messages#getting-sponsored-video-advertisements">рекламных сообщений, показываемых поверх видео в каналах »</a>, — число секунд, которое нужно выждать после скрытия предыдущей рекламы, прежде чем показать следующую.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SponsoredMessage">SponsoredMessage</a>&gt;</td><td>Спонсируемые сообщения</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты, упомянутые в рекламных сообщениях</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в рекламных сообщениях</td></tr></tbody></table>

### Тип

[messages.SponsoredMessages](/type/messages.SponsoredMessages/)

### Связанные страницы

#### [Спонсируемые сообщения](/api/sponsored-messages/)

Как клиентам получать, показывать рекламные сообщения и взаимодействовать с ними.
