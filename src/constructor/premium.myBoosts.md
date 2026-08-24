---
title: "premium.myBoosts"
original: "https://core.telegram.org/constructor/premium.myBoosts"
section: ref
kind: constructor
description: "Список пиров, которых мы сейчас бустим, и количество оставшихся у нас слотов бустов."
layout: layout.njk
---

# premium.myBoosts

Список пиров, которых мы сейчас [бустим](/api/boost/), и количество оставшихся у нас [слотов бустов](/api/boost/).

```
premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>my_boosts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MyBoost">MyBoost</a>&gt;</td><td>Информация о бустнутых пирах и оставшихся слотах буста.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr></tbody></table>

### Тип

[premium.MyBoosts](/type/premium.MyBoosts/)

### Связанные страницы

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
