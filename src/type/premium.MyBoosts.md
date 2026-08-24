---
title: "premium.MyBoosts"
original: "https://core.telegram.org/type/premium.MyBoosts"
section: ref
kind: type
description: "Список пиров, которых мы сейчас бустим, и количество оставшихся у нас слотов бустов."
layout: layout.njk
---

# Premium.MyBoosts

Список пиров, которых мы сейчас [бустим](/api/boost/), и количество оставшихся у нас [слотов бустов](/api/boost/).

```
premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;

---functions---

premium.getMyBoosts#be77b4a = premium.MyBoosts;
premium.applyBoost#6b7da746 flags:# slots:flags.0?Vector<int> peer:InputPeer = premium.MyBoosts;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/premium.myBoosts">premium.myBoosts</a></td><td>Список пиров, которые мы сейчас <a href="/api/boost">бустим</a>, и количество оставшихся у нас <a href="/api/boost">слотов буста</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/premium.getMyBoosts">premium.getMyBoosts</a></td><td>Получить список пиров, которых мы сейчас <a href="/api/boost">бустим</a>, и количество оставшихся у нас <a href="/api/boost">слотов буста</a>.</td></tr><tr><td><a href="/method/premium.applyBoost">premium.applyBoost</a></td><td>Применить один или несколько <a href="/api/boost">бустов »</a> к пиру.</td></tr></tbody></table>

### Связанные страницы

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
