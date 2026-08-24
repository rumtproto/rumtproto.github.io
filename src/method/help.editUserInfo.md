---
title: "help.editUserInfo"
original: "https://core.telegram.org/method/help.editUserInfo"
section: ref
kind: method
description: "Для внутреннего использования"
layout: layout.njk
---

# help.editUserInfo

Для внутреннего использования

```
help.userInfoEmpty#f3ae2eed = help.UserInfo;
help.userInfo#1eb3758 message:string entities:Vector<MessageEntity> author:string date:int = help.UserInfo;
---functions---
help.editUserInfo#66b91b70 user_id:InputUser message:string entities:Vector<MessageEntity> = help.UserInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Пользователь</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Сообщение</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a></td></tr></tbody></table>

### Результат

[help.UserInfo](/type/help.UserInfo/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>Одно из указанных <a href="/api/entities#entity-length">смещений или значений длины сущности оформления</a> недействительно; о том, как правильно вычислять смещение и длину сущности, см. <a href="/api/entities#entity-length">здесь&nbsp;»</a>.</td></tr><tr><td>403</td><td>USER_INVALID</td><td>Указан недействительный пользователь.</td></tr></tbody></table>

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
