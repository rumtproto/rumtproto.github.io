---
title: "contacts.ImportedContacts"
original: "https://core.telegram.org/type/contacts.ImportedContacts"
section: ref
kind: type
description: "Объект содержит информацию об успешно импортированных контактах."
layout: layout.njk
---

# contacts.ImportedContacts

Объект содержит информацию об успешно импортированных контактах.

```
contacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;

---functions---

contacts.importContacts#2c800be5 contacts:Vector<InputContact> = contacts.ImportedContacts;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.importedContacts">contacts.importedContacts</a></td><td>Информация об успешно импортированных контактах.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/contacts.importContacts">contacts.importContacts</a></td><td>Импортирует контакты: сохраняет полный список на сервере, добавляет уже зарегистрированных контактов в список контактов, возвращает добавленные контакты и сведения о них.<br><br>Используйте <a href="/method/contacts.addContact">contacts.addContact</a>, чтобы добавлять контакты Telegram, не используя их номер телефона.</td></tr></tbody></table>
