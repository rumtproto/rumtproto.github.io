---
title: "users.getRequirementsToContact"
original: "https://core.telegram.org/method/users.getRequirementsToContact"
section: ref
kind: method
description: "Проверить, можем ли мы писать указанным пользователям; используется для массовых проверок сообщений только для Premium » и платных сообщений »."
layout: layout.njk
---

# users.getRequirementsToContact

Проверить, можем ли мы писать указанным пользователям; используется для массовых проверок [сообщений только для Premium »](/api/privacy/#require-premium-for-new-non-contact-users) и [платных сообщений »](/api/paid-messages/).

Для каждого переданного пользователя возвращает конструктор [RequirementToContact](/type/RequirementToContact/) (на той же позиции в векторе), содержащий требования для связи с ним.

```
---functions---
users.getRequirementsToContact#d89a83a3 id:Vector<InputUser> = Vector<RequirementToContact>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputUser">InputUser</a>&gt;</td><td>Пользователи для проверки.</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[RequirementToContact](/type/RequirementToContact/)\>

### Этот метод доступен только пользователям

### Связанные страницы

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [RequirementToContact](/type/RequirementToContact/)

Задаёт требование, которое должно быть выполнено, чтобы связаться с пользователем.
