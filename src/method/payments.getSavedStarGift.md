---
title: "payments.getSavedStarGift"
original: "https://core.telegram.org/method/payments.getSavedStarGift"
section: ref
kind: method
description: "Получить сведения о конкретных подарках, принадлежащих подконтрольному нам пиру."
layout: layout.njk
---

# payments.getSavedStarGift

Получить сведения о конкретных [подарках](/api/gifts/), принадлежащих подконтрольному нам пиру.

Обратите внимание, что вопреки названию метод можно использовать для получения как «сохранённых», так и «несохранённых» подарков (то есть подарков как закреплённых в профиле, так и не закреплённых).

```
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;
---functions---
payments.getSavedStarGift#b455a106 stargift:Vector<InputSavedStarGift> = payments.SavedStarGifts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputSavedStarGift">InputSavedStarGift</a>&gt;</td><td>Список подарков, о которых нужно получить информацию.</td></tr></tbody></table>

### Результат

[payments.SavedStarGifts](/type/payments.SavedStarGifts/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>SAVED_ID_EMPTY</td><td>Переданное значение inputSavedStarGiftChat.saved_id пусто.</td></tr><tr><td>400</td><td>STARGIFT_OWNER_INVALID</td><td>Нельзя передать или продать подарок, принадлежащий другому пользователю.</td></tr><tr><td>400</td><td>STARGIFT_SLUG_INVALID</td><td>Указанный слаг подарка недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
