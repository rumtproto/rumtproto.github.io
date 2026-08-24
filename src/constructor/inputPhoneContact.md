---
title: "inputPhoneContact"
original: "https://core.telegram.org/constructor/inputPhoneContact"
section: ref
kind: constructor
description: "Телефонный контакт."
layout: layout.njk
---

# inputPhoneContact

Телефонный контакт.

```
inputPhoneContact#6a1dc4be flags:# client_id:long phone:string first_name:string last_name:string note:flags.0?TextWithEntities = InputContact;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>client_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Произвольное 64-битное целое число: его следует задавать, например, последовательно возрастающим числом при использовании <a href="/method/contacts.importContacts">contacts.importContacts</a>, чтобы повторно импортировать только те контакты, которые не были импортированы успешно, ориентируясь на client_ids, возвращённые в <a href="/constructor/contacts.importedContacts">contacts.importedContacts</a>.<code>retry_contacts</code>.</td></tr><tr><td><strong>phone</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя контакта</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Фамилия контакта</td></tr><tr><td><strong>note</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Личная заметка об этом контакте, видимая только нам; подробнее о заметках о контактах см. <a href="/api/contacts#private-notes-for-contacts">здесь »</a>.</td></tr></tbody></table>

### Тип

[InputContact](/type/InputContact/)

### Связанные страницы

#### [contacts.importContacts](/method/contacts.importContacts/)

Импортирует контакты: сохраняет полный список на сервере, добавляет уже зарегистрированных контактов в список контактов, возвращает добавленные контакты и сведения о них.

Используйте [contacts.addContact](/method/contacts.addContact/), чтобы добавлять контакты Telegram, не используя их номер телефона.

#### [contacts.importedContacts](/constructor/contacts.importedContacts/)

Информация об успешно импортированных контактах.

#### [Список контактов](/api/contacts/)

Работа с контактами.
