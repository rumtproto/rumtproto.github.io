---
title: "RequestPeerType"
original: "https://core.telegram.org/type/RequestPeerType"
section: ref
kind: type
description: "Критерии отбора для списка выбора пиров, показываемого пользователю."
layout: layout.njk
---

# RequestPeerType

Критерии отбора для списка выбора пиров, показываемого пользователю.

```
requestPeerTypeUser#5f3b8a00 flags:# bot:flags.0?Bool premium:flags.1?Bool = RequestPeerType;
requestPeerTypeChat#c9f06e1b flags:# creator:flags.0?true bot_participant:flags.5?true has_username:flags.3?Bool forum:flags.4?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;
requestPeerTypeBroadcast#339bef6c flags:# creator:flags.0?true has_username:flags.3?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/requestPeerTypeUser">requestPeerTypeUser</a></td><td>Выбрать пользователя.</td></tr><tr><td><a href="/constructor/requestPeerTypeChat">requestPeerTypeChat</a></td><td>Выбрать чат или супергруппу</td></tr><tr><td><a href="/constructor/requestPeerTypeBroadcast">requestPeerTypeBroadcast</a></td><td>Выбрать канал</td></tr><tr><td><a href="/constructor/requestPeerTypeCreateBot">requestPeerTypeCreateBot</a></td><td>Используется в <a href="/constructor/keyboardButtonRequestPeer">keyboardButtonRequestPeer</a> <a href="/api/bots/managed-bots">ботом-менеджером</a>, чтобы предложить пользователю создать новый <a href="/api/bots/managed-bots">управляемый бот »</a>; подробнее см. <a href="/api/bots/buttons#requesting-a-managed-bot">здесь »</a>.</td></tr></tbody></table>
