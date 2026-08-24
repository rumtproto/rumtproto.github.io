---
title: "StarGiftAttribute"
original: "https://core.telegram.org/type/StarGiftAttribute"
section: ref
kind: type
description: "Атрибут коллекционного подарка »."
layout: layout.njk
---

# StarGiftAttribute

Атрибут [коллекционного подарка »](/api/gifts/#collectible-gifts).

```
starGiftAttributeModel#565251e2 flags:# crafted:flags.0?true name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributePattern#4e7085ea name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributeBackdrop#9f2504e4 name:string backdrop_id:int center_color:int edge_color:int pattern_color:int text_color:int rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributeOriginalDetails#e0bff26c flags:# sender_id:flags.0?Peer recipient_id:Peer date:int message:flags.1?TextWithEntities = StarGiftAttribute;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftAttributeModel">starGiftAttributeModel</a></td><td>Модель <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>.</td></tr><tr><td><a href="/constructor/starGiftAttributePattern">starGiftAttributePattern</a></td><td><a href="/api/stickers">Стикер</a>, наложенный повторяющимся узором на подложку <a href="/api/gifts">коллекционного подарка »</a>.</td></tr><tr><td><a href="/constructor/starGiftAttributeBackdrop">starGiftAttributeBackdrop</a></td><td>Подложка <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>.</td></tr><tr><td><a href="/constructor/starGiftAttributeOriginalDetails">starGiftAttributeOriginalDetails</a></td><td>Сведения об отправителе, получателе и сообщении, приложенных к исходному <a href="/api/gifts">подарку »</a>, до того как он был превращён в <a href="/api/gifts#collectible-gifts">коллекционный подарок »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
