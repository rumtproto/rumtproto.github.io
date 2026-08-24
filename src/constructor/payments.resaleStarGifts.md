---
title: "payments.resaleStarGifts"
original: "https://core.telegram.org/constructor/payments.resaleStarGifts"
section: ref
kind: constructor
description: "Список подарков, выставленных на перепродажу »."
layout: layout.njk
---

# payments.resaleStarGifts

Список подарков, выставленных на [перепродажу »](/api/gifts/#reselling-collectible-gifts).

```
payments.resaleStarGifts#947a12df flags:# count:int gifts:Vector<StarGift> next_offset:flags.0?string attributes:flags.1?Vector<StarGiftAttribute> attributes_hash:flags.1?long chats:Vector<Chat> counters:flags.2?Vector<StarGiftAttributeCounter> users:Vector<User> = payments.ResaleStarGifts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число результатов.</td></tr><tr><td><strong>gifts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGift">StarGift</a>&gt;</td><td>[@term:next_offset] Коллекционные подарки, выставленные на перепродажу (может быть меньше, чем <code>count</code>, — в этом случае будет установлено поле <code>next_offset</code>).</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Смещение для постраничной выборки; передайте его в <a href="/method/payments.getResaleStarGifts">payments.getResaleStarGifts</a>.<code>offset</code>, чтобы получить следующие результаты.</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGiftAttribute">StarGiftAttribute</a>&gt;</td><td>Возможные атрибуты подарка; задаётся только в том случае, если задано поле <a href="/method/payments.getResaleStarGifts">payments.getResaleStarGifts</a>.<code>attributes_hash</code> (при первом вызове оно должно быть равно <code>0</code>).</td></tr><tr><td><strong>attributes_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/long">long</a></td><td>Хеш поля <code>attributes</code>; передайте его в <a href="/method/payments.getResaleStarGifts">payments.getResaleStarGifts</a>.<code>attributes_hash</code>, чтобы не возвращать атрибуты (флаг не установлен), если они не изменились.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты, упомянутые в атрибутах.</td></tr><tr><td><strong>counters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGiftAttributeCounter">StarGiftAttributeCounter</a>&gt;</td><td>Указывает общее количество подарков, обладающих определённым атрибутом; задаётся, только если <a href="/method/payments.getResaleStarGifts">payments.getResaleStarGifts</a>.<code>offset</code> пуст (поскольку это поле относится не к текущей странице результатов, а ко всем сразу, оно возвращается только на первой странице).</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в атрибутах.</td></tr></tbody></table>

### Тип

[payments.ResaleStarGifts](/type/payments.ResaleStarGifts/)

### Связанные страницы

#### [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/)

Получить [коллекционные подарки](/api/gifts/#collectible-gifts) определённого типа, выставленные на перепродажу; подробнее [см. здесь »](/api/gifts/#reselling-collectible-gifts).

Параметры `sort_by_price` и `sort_by_num` взаимно исключают друг друга; если не задан ни один из них, результаты сортируются по времени последнего изменения цены перепродажи (unixtime, по убыванию).

Подробную документацию по этому методу см. [здесь »](/api/gifts/#sending-gifts).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
