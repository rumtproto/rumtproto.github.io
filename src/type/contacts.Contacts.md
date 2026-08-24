---
title: "contacts.Contacts"
original: "https://core.telegram.org/type/contacts.Contacts"
section: ref
kind: type
description: "Информация о списке контактов текущего пользователя."
layout: layout.njk
---

# contacts.Contacts

Информация о списке контактов текущего пользователя.

```
contacts.contactsNotModified#b74ba9d2 = contacts.Contacts;
contacts.contacts#eae87e42 contacts:Vector<Contact> saved_count:int users:Vector<User> = contacts.Contacts;

---functions---

contacts.getContacts#5dd69e12 hash:long = contacts.Contacts;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.contactsNotModified">contacts.contactsNotModified</a></td><td>Список контактов на сервере совпадает со списком на клиенте.</td></tr><tr><td><a href="/constructor/contacts.contacts">contacts.contacts</a></td><td>Список контактов текущего пользователя и сведения о пользователях.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/contacts.getContacts">contacts.getContacts</a></td><td>Возвращает список контактов текущего пользователя.</td></tr></tbody></table>
