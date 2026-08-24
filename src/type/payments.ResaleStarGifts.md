---
title: "payments.ResaleStarGifts"
original: "https://core.telegram.org/type/payments.ResaleStarGifts"
section: ref
kind: type
description: "Список подарков, выставленных на перепродажу »."
layout: layout.njk
---

# payments.ResaleStarGifts

Список подарков, выставленных на [перепродажу »](/api/gifts/#reselling-collectible-gifts).

```
payments.resaleStarGifts#947a12df flags:# count:int gifts:Vector<StarGift> next_offset:flags.0?string attributes:flags.1?Vector<StarGiftAttribute> attributes_hash:flags.1?long chats:Vector<Chat> counters:flags.2?Vector<StarGiftAttributeCounter> users:Vector<User> = payments.ResaleStarGifts;

---functions---

payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true stars_only:flags.5?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.resaleStarGifts">payments.resaleStarGifts</a></td><td>Список подарков, выставленных на <a href="/api/gifts#reselling-collectible-gifts">перепродажу »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getResaleStarGifts">payments.getResaleStarGifts</a></td><td>Получить <a href="/api/gifts#collectible-gifts">коллекционные подарки</a> определённого типа, выставленные на перепродажу; подробнее <a href="/api/gifts#reselling-collectible-gifts">см. здесь »</a>.<br><br>Параметры <code>sort_by_price</code> и <code>sort_by_num</code> взаимно исключают друг друга; если не задан ни один из них, результаты сортируются по времени последнего изменения цены перепродажи (unixtime, по убыванию).<br><br>Подробную документацию по этому методу <a href="/api/gifts#sending-gifts">см. здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
