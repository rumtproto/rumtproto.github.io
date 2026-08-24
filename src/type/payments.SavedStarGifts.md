---
title: "payments.SavedStarGifts"
original: "https://core.telegram.org/type/payments.SavedStarGifts"
section: ref
kind: type
description: "Представляет список подарков."
layout: layout.njk
---

# payments.SavedStarGifts

Представляет список [подарков](/api/gifts/).

```
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;

---functions---

payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer_color_available:flags.9?true exclude_hosted:flags.10?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
payments.getSavedStarGift#b455a106 stargift:Vector<InputSavedStarGift> = payments.SavedStarGifts;
payments.getCraftStarGifts#fd05dd00 gift_id:long offset:string limit:int = payments.SavedStarGifts;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.savedStarGifts">payments.savedStarGifts</a></td><td>Представляет список <a href="/api/gifts">подарков</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getSavedStarGifts">payments.getSavedStarGifts</a></td><td>Получить полный список <a href="/api/gifts#list-all-received-gifts">подарков »</a>, которыми владеет пир, которые он получил или <a href="/api/gifts#hosted-collectible-gifts">размещает »</a>.<br><br>Обратите внимание: вопреки названию, метод может использоваться для получения как «сохранённых», так и «несохранённых» подарков (то есть как закреплённых, так и не закреплённых в профиле) — в зависимости от переданных флагов.</td></tr><tr><td><a href="/method/payments.getSavedStarGift">payments.getSavedStarGift</a></td><td>Получить сведения о конкретных <a href="/api/gifts">подарках</a>, принадлежащих подконтрольному нам пиру.<br><br>Обратите внимание: вопреки названию, метод позволяет получать как «сохранённые», так и «несохранённые» подарки (то есть как закреплённые в профиле, так и не закреплённые).</td></tr><tr><td><a href="/method/payments.getCraftStarGifts">payments.getCraftStarGifts</a></td><td>Получить принадлежащие пользователю <a href="/api/gifts#collectible-gifts">коллекционные подарки »</a> определённого типа, которые можно использовать для <a href="/api/gifts#crafting-collectible-gifts">создания »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
