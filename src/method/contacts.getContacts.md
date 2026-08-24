---
title: "contacts.getContacts"
original: "https://core.telegram.org/method/contacts.getContacts"
section: ref
kind: method
description: "Возвращает список контактов текущего пользователя."
layout: layout.njk
---

# contacts.getContacts

Возвращает список контактов текущего пользователя.

```
contacts.contactsNotModified#b74ba9d2 = contacts.Contacts;
contacts.contacts#eae87e42 contacts:Vector<Contact> saved_count:int users:Vector<User> = contacts.Contacts;
---functions---
contacts.getContacts#5dd69e12 hash:long = contacts.Contacts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.<br>Обратите внимание, что хеш вычисляется <a href="/api/offsets#hash-generation">по обычному алгоритму</a>: сначала алгоритму передаётся ранее возвращённое поле <a href="/constructor/contacts.contacts">contacts.contacts</a>.<code>saved_count</code>, затем — не более <code>100000</code> отсортированных идентификаторов пользователей из списка контактов, включая идентификатор текущего авторизованного пользователя, если он сохранён как контакт.<br>Пример: <a href="https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L7865">реализация в tdlib</a>.</td></tr></tbody></table>

### Результат

[contacts.Contacts](/type/contacts.Contacts/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [contacts.contacts](/constructor/contacts.contacts/)

Список контактов текущего пользователя и сведения о пользователях.
