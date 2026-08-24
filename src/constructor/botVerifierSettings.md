---
title: "botVerifierSettings"
original: "https://core.telegram.org/constructor/botVerifierSettings"
section: ref
kind: constructor
description: "Информация о текущем боте-верификаторе »."
layout: layout.njk
---

# botVerifierSettings

Информация о текущем [боте-верификаторе »](/api/bots/verification/).

```
botVerifierSettings#b0cd6617 flags:# can_modify_custom_description:flags.1?true icon:long company:string custom_description:flags.0?string = BotVerifierSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>can_modify_custom_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Указывает, разрешено ли боту задавать для отдельных верифицированных пиров собственное описание, отличное от указанного здесь <code>custom_description</code>.</td></tr><tr><td><strong>icon</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Значок верификации</td></tr><tr><td><strong>company</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название организации, которая выдаёт верификацию</td></tr><tr><td><strong>custom_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Необязательное описание по умолчанию для верификации</td></tr></tbody></table>

### Тип

[BotVerifierSettings](/type/BotVerifierSettings/)

### Связанные страницы

#### [Сторонняя верификация](/api/bots/verification/)

Чтобы ещё повысить прозрачность в Telegram, официальные сторонние сервисы могут присваивать аккаунтам пользователей и чатам дополнительные значки верификации — чтобы предотвратить мошенничество и снизить распространение недостоверной информации.
