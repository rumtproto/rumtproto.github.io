---
title: "botVerification"
original: "https://core.telegram.org/constructor/botVerification"
section: ref
kind: constructor
description: "Описывает значок верификации бота »."
layout: layout.njk
---

# botVerification

Описывает [значок верификации бота »](/api/bots/verification/).

```
botVerification#f93cd45c bot_id:long icon:long description:string = BotVerification;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор бота, подтвердившего этот пир</td></tr><tr><td><strong>icon</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Значок верификации</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Описание верификации</td></tr></tbody></table>

### Тип

[BotVerification](/type/BotVerification/)

### Связанные страницы

#### [Сторонняя верификация](/api/bots/verification/)

Чтобы ещё повысить прозрачность в Telegram, официальные сторонние сервисы могут присваивать аккаунтам пользователей и чатам дополнительные значки верификации — чтобы предотвратить мошенничество и снизить распространение недостоверной информации.
