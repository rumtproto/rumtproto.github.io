---
title: "payments.ConnectedStarRefBots"
original: "https://core.telegram.org/type/payments.ConnectedStarRefBots"
section: ref
kind: type
description: "Активные партнёрства"
layout: layout.njk
---

# Payments.ConnectedStarRefBots

Активные [партнёрства](/api/bots/referrals/#becoming-an-affiliate)

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;

---functions---

payments.getConnectedStarRefBots#5869a553 flags:# peer:InputPeer offset_date:flags.2?int offset_link:flags.2?string limit:int = payments.ConnectedStarRefBots;
payments.getConnectedStarRefBot#b7d998f0 peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;
payments.connectStarRefBot#7ed5348a peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;
payments.editConnectedStarRefBot#e4fca4a3 flags:# revoked:flags.0?true peer:InputPeer link:string = payments.ConnectedStarRefBots;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.connectedStarRefBots">payments.connectedStarRefBots</a></td><td>Активные <a href="/api/bots/referrals#becoming-an-affiliate">партнёрства</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getConnectedStarRefBots">payments.getConnectedStarRefBots</a></td><td>Получить все партнёрства, созданные нами для определённого пира</td></tr><tr><td><a href="/method/payments.getConnectedStarRefBot">payments.getConnectedStarRefBot</a></td><td>Получить сведения о конкретном <a href="/api/bots/referrals">партнёрстве с ботом »</a></td></tr><tr><td><a href="/method/payments.connectStarRefBot">payments.connectStarRefBot</a></td><td>Присоединиться к <a href="/api/bots/referrals#becoming-an-affiliate">партнёрской программе бота, став партнёром »</a></td></tr><tr><td><a href="/method/payments.editConnectedStarRefBot">payments.editConnectedStarRefBot</a></td><td>Выйти из <a href="/api/bots/referrals#becoming-an-affiliate">партнёрской программы »</a> бота</td></tr></tbody></table>

### Связанные страницы

#### [Партнёрские программы](/api/bots/referrals/)

[@term:Mini App] Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.
