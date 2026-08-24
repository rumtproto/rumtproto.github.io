---
title: "payments.connectStarRefBot"
original: "https://core.telegram.org/method/payments.connectStarRefBot"
section: ref
kind: method
description: "Присоединиться к партнёрской программе бота, став партнёром »"
layout: layout.njk
---

# payments.connectStarRefBot

Присоединиться к [партнёрской программе бота, став партнёром »](/api/bots/referrals/#becoming-an-affiliate)

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;
---functions---
payments.connectStarRefBot#7ed5348a peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, который станет партнёром: комиссии в Stars будут переводиться на баланс Stars этого пира.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, предлагающий партнёрскую программу</td></tr></tbody></table>

### Результат

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Партнёрские программы](/api/bots/referrals/)

[@term:Mini App] Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.
