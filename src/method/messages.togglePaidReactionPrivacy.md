---
title: "messages.togglePaidReactionPrivacy"
original: "https://core.telegram.org/method/messages.togglePaidReactionPrivacy"
section: ref
kind: method
description: "Изменяет приватность уже отправленных платных реакций на конкретное сообщение."
layout: layout.njk
---

# messages.togglePaidReactionPrivacy

Изменяет приватность уже отправленных [платных реакций](/api/reactions/#paid-reactions) на конкретное сообщение.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.togglePaidReactionPrivacy#435885b5 peer:InputPeer msg_id:int private:PaidReactionPrivacy = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Канал</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения, на которое мы отправили платные реакции</td></tr><tr><td><strong>private</strong></td><td style="text-align: center;"><a href="/type/PaidReactionPrivacy">PaidReactionPrivacy</a></td><td>Если истинно, делает текущего пользователя анонимным в списке лучших отправителей для этого сообщения; иначе выполняет обратное действие.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>REACTION_EMPTY</td><td>Передана пустая реакция.</td></tr></tbody></table>

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
