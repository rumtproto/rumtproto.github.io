---
title: "contacts.updateContactNote"
original: "https://core.telegram.org/method/contacts.updateContactNote"
section: ref
kind: method
description: "Обновить личную заметку, связанную с контактом; подробнее см. здесь »."
layout: layout.njk
---

# contacts.updateContactNote

Обновить личную заметку, связанную с контактом; подробнее [см. здесь »](/api/contacts/#private-notes-for-contacts).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.updateContactNote#139f63fb id:InputUser note:TextWithEntities = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Контакт.</td></tr><tr><td><strong>note</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Примечание.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CONTACT_ID_INVALID</td><td>Указанный идентификатор контакта недействителен.</td></tr><tr><td>400</td><td>CONTACT_MISSING</td><td>Указанный пользователь не является контактом.</td></tr></tbody></table>

### Связанные страницы

#### [Список контактов](/api/contacts/)

Работа с контактами.
