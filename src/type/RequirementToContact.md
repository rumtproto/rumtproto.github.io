---
title: "RequirementToContact"
original: "https://core.telegram.org/type/RequirementToContact"
section: ref
kind: type
description: "Задаёт требование, которое должно быть выполнено, чтобы связаться с пользователем."
layout: layout.njk
---

# RequirementToContact

Задаёт требование, которое должно быть выполнено, чтобы связаться с пользователем.

```
requirementToContactEmpty#50a9839 = RequirementToContact;
requirementToContactPremium#e581e4e9 = RequirementToContact;
requirementToContactPaidMessages#b4f67e93 stars_amount:long = RequirementToContact;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/requirementToContactEmpty">requirementToContactEmpty</a></td><td>С этим пользователем можно свободно связаться.</td></tr><tr><td><a href="/constructor/requirementToContactPremium">requirementToContactPremium</a></td><td>Этот пользователь требует приобрести подписку <a href="/api/premium">Premium</a>, чтобы связаться с ним.</td></tr><tr><td><a href="/constructor/requirementToContactPaidMessages">requirementToContactPaidMessages</a></td><td>Этот пользователь требует уплатить указанное количество <a href="/api/stars">Telegram Stars</a> за отправку ему сообщения; полное описание процесса см. <a href="/api/paid-messages">здесь »</a>.</td></tr></tbody></table>
