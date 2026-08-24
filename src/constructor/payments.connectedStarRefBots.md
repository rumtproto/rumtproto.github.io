---
title: "payments.connectedStarRefBots"
original: "https://core.telegram.org/constructor/payments.connectedStarRefBots"
section: ref
kind: constructor
description: "Активные партнёрства"
layout: layout.njk
---

# payments.connectedStarRefBots

Активные [партнёрства](/api/bots/referrals/#becoming-an-affiliate)

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число активных партнёрств</td></tr><tr><td><strong>connected_bots</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ConnectedBotStarRef">ConnectedBotStarRef</a>&gt;</td><td>Партнёрства</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пиры, упомянутые в <code>connected_bots</code></td></tr></tbody></table>

### Тип

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

### Связанные страницы

#### [Партнёрские программы](/api/bots/referrals/)

[@term:Mini App] Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.
