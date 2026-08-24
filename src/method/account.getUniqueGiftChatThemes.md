---
title: "account.getUniqueGiftChatThemes"
original: "https://core.telegram.org/method/account.getUniqueGiftChatThemes"
section: ref
kind: method
description: "Получить все темы оформления чатов », связанные с принадлежащими вам или размещёнными коллекционными подарками »."
layout: layout.njk
---

# account.getUniqueGiftChatThemes

Получить все [темы оформления чатов »](/api/themes/#chat-themes), связанные с принадлежащими вам или [размещёнными коллекционными подарками »](/api/gifts/#hosted-collectible-gifts).

```
account.chatThemesNotModified#e011e1c4 = account.ChatThemes;
account.chatThemes#be098173 flags:# hash:long themes:Vector<ChatTheme> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = account.ChatThemes;
---functions---
account.getUniqueGiftChatThemes#e42ce9c9 offset:string limit:int hash:long = account.ChatThemes;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:next_offset] Смещение для <a href="/api/offsets">постраничной выборки</a>; изначально — пустая строка, затем равно значению последнего возвращённого <a href="/constructor/account.chatThemes">account.chatThemes</a>.<code>next_offset</code> (если оно задано).</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное количество возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a>. Обратите внимание, что сервер может вернуть меньше <code>limit</code> результатов, даже если фактическое количество оставшихся результатов <code>&gt;= limit</code>; используйте постраничную выборку, чтобы получить их все.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш из ранее возвращённого конструктора <a href="/constructor/account.chatThemes">account.chatThemes</a>; позволяет не возвращать результат, если список тем не изменился.</td></tr></tbody></table>

### Результат

[account.ChatThemes](/type/account.ChatThemes/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [account.chatThemes](/constructor/account.chatThemes/)

Доступные [темы оформления чатов](/api/themes/#chat-themes)

#### [Темы оформления Telegram](/api/themes/)

Приложения Telegram умеют создавать, отправлять и синхронизировать темы оформления.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
