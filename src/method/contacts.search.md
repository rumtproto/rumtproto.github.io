---
title: "contacts.search"
original: "https://core.telegram.org/method/contacts.search"
section: ref
kind: method
description: "Возвращает пользователей, найденных по подстроке имени пользователя."
layout: layout.njk
---

# contacts.search

Возвращает пользователей, найденных по подстроке имени пользователя.

```
contacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;
---functions---
contacts.search#11f812d8 q:string limit:int = contacts.Found;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Целевая подстрока</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное количество возвращаемых пользователей</td></tr></tbody></table>

### Результат

[contacts.Found](/type/contacts.Found/)

### Примечания

Этот метод исключает из результатов поиска контакты текущего пользователя. Предполагается, что поиск по контактам пользователя клиент выполняет локально.

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>QUERY_TOO_SHORT</td><td>Строка запроса слишком короткая.</td></tr><tr><td>400</td><td>SEARCH_QUERY_EMPTY</td><td>Поисковый запрос пуст.</td></tr></tbody></table>
