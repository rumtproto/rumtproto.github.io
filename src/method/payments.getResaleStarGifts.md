---
title: "payments.getResaleStarGifts"
original: "https://core.telegram.org/method/payments.getResaleStarGifts"
section: ref
kind: method
description: "Получить коллекционные подарки определённого типа, выставленные на перепродажу; подробнее см. здесь »."
layout: layout.njk
---

# payments.getResaleStarGifts

Получить [коллекционные подарки](/api/gifts/#collectible-gifts) определённого типа, выставленные на перепродажу; подробнее [см. здесь »](/api/gifts/#reselling-collectible-gifts).

Параметры `sort_by_price` и `sort_by_num` взаимно исключают друг друга; если не задан ни один из них, результаты сортируются по времени последнего изменения цены перепродажи (unixtime, по убыванию).

Подробную документацию по этому методу см. [здесь »](/api/gifts/#sending-gifts).

```
payments.resaleStarGifts#947a12df flags:# count:int gifts:Vector<StarGift> next_offset:flags.0?string attributes:flags.1?Vector<StarGiftAttribute> attributes_hash:flags.1?long chats:Vector<Chat> counters:flags.2?Vector<StarGiftAttributeCounter> users:Vector<User> = payments.ResaleStarGifts;
---functions---
payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true stars_only:flags.5?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>sort_by_price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Сортировать подарки по цене (по возрастанию).</td></tr><tr><td><strong>sort_by_num</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Сортировать подарки по номеру (по возрастанию).</td></tr><tr><td><strong>for_craft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Возвращать только коллекционные подарки, которые можно купить и использовать для <a href="/api/gifts#crafting-collectible-gifts">создания »</a>; поле <a href="/constructor/starGiftUnique">starGiftUnique</a>.<code>craft_chance_permille</code> каждого возвращённого подарка отображать как его вклад в вероятность успешного создания.</td></tr><tr><td><strong>stars_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Возвращать только подарки, которые можно купить за <a href="/api/stars">Stars</a>.</td></tr><tr><td><strong>attributes_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Если метод уже вызывался ранее и было задано поле <a href="/constructor/payments.resaleStarGifts">payments.resaleStarGifts</a>.<code>attributes_hash</code>, передайте его здесь, чтобы не получать результаты, если они не изменились.<br>Иначе задайте этот флаг и передайте <code>0</code>, чтобы получить <a href="/constructor/payments.resaleStarGifts">payments.resaleStarGifts</a>.<code>attributes_hash</code> и <a href="/constructor/payments.resaleStarGifts">payments.resaleStarGifts</a>.<code>attributes</code>; <strong>эти два поля не будут заданы</strong>, если данный флаг не установлен.</td></tr><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Обязательный идентификатор базового подарка, из которого был улучшен коллекционный подарок.</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGiftAttributeId">StarGiftAttributeId</a>&gt;</td><td>Необязательно отбирать подарки с указанными атрибутами. Если атрибуты какого-либо типа не указаны, допускаются все атрибуты этого типа.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Смещение для постраничной выборки. Если оно не равно пустой строке, поле <a href="/constructor/payments.resaleStarGifts">payments.resaleStarGifts</a>.<code>counters</code> не будет задано, чтобы не возвращать счётчики при получении каждой новой страницы.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[payments.ResaleStarGifts](/type/payments.ResaleStarGifts/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_ATTRIBUTE_INVALID</td><td>Один из указанных атрибутов звёздного подарка недействителен.</td></tr><tr><td>400</td><td>STARGIFT_INVALID</td><td>Переданный подарок недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [starGiftUnique](/constructor/starGiftUnique/)

Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts).

Стикер, представляющий подарок, содержится в объекте [starGiftAttributeModel](/constructor/starGiftAttributeModel/) в поле `attributes`.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/)

Список подарков, выставленных на [перепродажу »](/api/gifts/#reselling-collectible-gifts).

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
