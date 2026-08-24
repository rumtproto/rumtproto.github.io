---
title: "payments.savedStarGifts"
original: "https://core.telegram.org/constructor/payments.savedStarGifts"
section: ref
kind: constructor
description: "Представляет список подарков."
layout: layout.njk
---

# payments.savedStarGifts

Представляет список [подарков](/api/gifts/).

```
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:next_offset] Общее число результатов (может быть меньше числа возвращённых <code>gifts</code>, в этом случае будет установлено поле <code>next_offset</code>).</td></tr><tr><td><strong>chat_notifications_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Bool">Bool</a></td><td>Троичное значение: может быть не установлено, установлено в true или установлено в false.<br>Может быть установлено только для каналов, которыми мы владеем: значение указывает, включили ли мы <a href="/api/gifts#notifications-for-received-channel-gifts">уведомления о подарках</a> для этого канала.</td></tr><tr><td><strong>gifts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SavedStarGift">SavedStarGift</a>&gt;</td><td>Подарки</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Смещение, которое следует передать в <a href="/method/payments.getSavedStarGifts">payments.getSavedStarGifts</a>, чтобы получить следующую страницу результатов.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Каналы, упомянутые в <code>gifts</code></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в <code>gifts</code></td></tr></tbody></table>

### Тип

[payments.SavedStarGifts](/type/payments.SavedStarGifts/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

Получить полный список [подарков »](/api/gifts/#list-all-received-gifts), которыми пир владеет, которые он получил или [размещает »](/api/gifts/#hosted-collectible-gifts).

Обратите внимание: вопреки названию, метод может использоваться для получения как «сохранённых», так и «несохранённых» подарков (то есть как закреплённых, так и не закреплённых в профиле) — в зависимости от переданных флагов.
