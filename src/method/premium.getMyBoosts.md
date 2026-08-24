---
title: "premium.getMyBoosts"
original: "https://core.telegram.org/method/premium.getMyBoosts"
section: ref
kind: method
description: "Получить список пиров, которых мы сейчас бустим, и количество оставшихся у нас слотов буста."
layout: layout.njk
---

# premium.getMyBoosts

Получить список пиров, которых мы сейчас [бустим](/api/boost/), и количество оставшихся у нас [слотов буста](/api/boost/).

```
premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;
---functions---
premium.getMyBoosts#be77b4a = premium.MyBoosts;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[premium.MyBoosts](/type/premium.MyBoosts/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
