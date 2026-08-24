---
title: "contacts.editCloseFriends"
original: "https://core.telegram.org/method/contacts.editCloseFriends"
section: ref
kind: method
description: "Изменить список близких друзей, подробнее см. здесь »."
layout: layout.njk
---

# contacts.editCloseFriends

Изменить [список близких друзей, подробнее см. здесь »](/api/privacy/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.editCloseFriends#ba6705f0 id:Vector<long> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Полный список идентификаторов пользователей из числа близких друзей, подробнее см. <a href="/api/privacy">здесь</a>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.
