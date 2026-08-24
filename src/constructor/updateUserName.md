---
title: "updateUserName"
original: "https://core.telegram.org/constructor/updateUserName"
section: ref
kind: constructor
description: "Изменяет имя, фамилию и имя пользователя."
layout: layout.njk
---

# updateUserName

Изменяет имя, фамилию и имя пользователя.

```
updateUserName#a7848924 user_id:long first_name:string last_name:string usernames:Vector<Username> = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Новое имя. Соответствует новому значению поля <strong>real_first_name</strong> конструктора <a href="/constructor/userFull">userFull</a>.</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Новая фамилия. Соответствует новому значению поля <strong>real_last_name</strong> конструктора <a href="/constructor/userFull">userFull</a>.</td></tr><tr><td><strong>usernames</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Username">Username</a>&gt;</td><td>Имена пользователей.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [userFull](/constructor/userFull/)

Расширенные сведения о пользователе

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).
