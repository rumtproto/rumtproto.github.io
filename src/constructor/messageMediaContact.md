---
title: "messageMediaContact"
original: "https://core.telegram.org/constructor/messageMediaContact"
section: ref
kind: constructor
description: "Вложенный контакт."
layout: layout.njk
---

# messageMediaContact

Вложенный контакт.

```
messageMediaContact#70322949 phone_number:string first_name:string last_name:string vcard:string user_id:long = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя контакта</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Фамилия контакта</td></tr><tr><td><strong>vcard</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>VCARD контакта</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя или <code>0</code>, если пользователь с указанным номером телефона не зарегистрирован</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)
