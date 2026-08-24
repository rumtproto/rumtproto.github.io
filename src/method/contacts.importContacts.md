---
title: "contacts.importContacts"
original: "https://core.telegram.org/method/contacts.importContacts"
section: ref
kind: method
description: "Импортирует контакты: сохраняет полный список на сервере, добавляет уже зарегистрированных контактов в список контактов, возвращает добавленные контакты и сведения о них."
layout: layout.njk
---

# contacts.importContacts

Импортирует контакты: сохраняет полный список на сервере, добавляет уже зарегистрированных контактов в список контактов, возвращает добавленные контакты и сведения о них.

Используйте [contacts.addContact](/method/contacts.addContact/), чтобы добавлять контакты Telegram, не используя их номер телефона.

```
contacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;
---functions---
contacts.importContacts#2c800be5 contacts:Vector<InputContact> = contacts.ImportedContacts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>contacts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputContact">InputContact</a>&gt;</td><td>Список контактов для импорта</td></tr></tbody></table>

### Результат

[contacts.ImportedContacts](/type/contacts.ImportedContacts/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [contacts.addContact](/method/contacts.addContact/)

Добавить существующего пользователя Telegram в контакты.

Чтобы добавить контакты по номеру телефона, не зная их идентификатора в Telegram, используйте [contacts.importContacts](/method/contacts.importContacts/).
