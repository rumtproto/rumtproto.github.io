---
title: "contacts.importedContacts"
original: "https://core.telegram.org/constructor/contacts.importedContacts"
section: ref
kind: constructor
description: "Информация об успешно импортированных контактах."
layout: layout.njk
---

# contacts.importedContacts

Информация об успешно импортированных контактах.

```
contacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>imported</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ImportedContact">ImportedContact</a>&gt;</td><td>Список успешно импортированных контактов</td></tr><tr><td><strong>popular_invites</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PopularContact">PopularContact</a>&gt;</td><td>Популярные контакты</td></tr><tr><td><strong>retry_contacts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Список идентификаторов контактов, которые не удалось импортировать из-за системного ограничения; их потребуется импортировать позже.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Список пользователей</td></tr></tbody></table>

### Тип

[contacts.ImportedContacts](/type/contacts.ImportedContacts/)
