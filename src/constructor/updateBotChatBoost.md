---
title: "updateBotChatBoost"
original: "https://core.telegram.org/constructor/updateBotChatBoost"
section: ref
kind: constructor
description: "Изменился буст канала или супергруппы (только для ботов)"
layout: layout.njk
---

# updateBotChatBoost

Изменился [буст канала или супергруппы](/api/boost/) (только для ботов)

```
updateBotChatBoost#904dd49c peer:Peer boost:Boost qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Канал</td></tr><tr><td><strong>boost</strong></td><td style="text-align: center;"><a href="/type/Boost">Boost</a></td><td>[@term:boost] Новые сведения о бусте</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Идентификатор последовательности событий <a href="/api/updates">QTS</a></td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
