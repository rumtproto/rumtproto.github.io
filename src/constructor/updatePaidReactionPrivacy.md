---
title: "updatePaidReactionPrivacy"
original: "https://core.telegram.org/constructor/updatePaidReactionPrivacy"
section: ref
kind: constructor
description: "Содержит текущую настройку приватности платных реакций по умолчанию, подробнее см. здесь »."
layout: layout.njk
---

# updatePaidReactionPrivacy

Содержит текущую [настройку приватности платных реакций по умолчанию, подробнее см. здесь »](/api/reactions/#paid-reactions).

При запуске клиентам следует вызывать [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/), чтобы получить текущую настройку приватности реакций по умолчанию, поскольку это обновление отправляется только сессиям, находящимся в сети в данный момент, и его нельзя получить через getDifference при запуске клиента.

```
updatePaidReactionPrivacy#8b725fce private:PaidReactionPrivacy = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>private</strong></td><td style="text-align: center;"><a href="/type/PaidReactionPrivacy">PaidReactionPrivacy</a></td><td>Настройки приватности платных реакций.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.

#### [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/)

Получает обновление [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) с текущей [настройкой приватности платных реакций по умолчанию, подробнее см. здесь »](/api/reactions/#paid-reactions).
