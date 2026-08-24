---
title: "account.toggleSponsoredMessages"
original: "https://core.telegram.org/method/account.toggleSponsoredMessages"
section: ref
kind: method
description: "Отключить или снова включить рекламу Telegram для текущего аккаунта Premium."
layout: layout.njk
---

# account.toggleSponsoredMessages

Отключить или снова включить рекламу Telegram для текущего аккаунта [Premium](/api/premium/).

Полезно владельцам бизнеса, которые хотят запускать и просматривать собственную рекламу в Telegram через [рекламную платформу Telegram »](https://ads.telegram.org).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.toggleSponsoredMessages#b9d9a38d enabled:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Включить или отключить рекламу.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.
