---
title: "help.getUserInfo"
original: "https://core.telegram.org/method/help.getUserInfo"
section: ref
kind: method
description: "Может использоваться только участниками TSF для получения внутренней информации."
layout: layout.njk
---

# help.getUserInfo

Может использоваться только участниками TSF для получения внутренней информации.

```
help.userInfoEmpty#f3ae2eed = help.UserInfo;
help.userInfo#1eb3758 message:string entities:Vector<MessageEntity> author:string date:int = help.UserInfo;
---functions---
help.getUserInfo#38a08d3 user_id:InputUser = help.UserInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор пользователя</td></tr></tbody></table>

### Результат

[help.UserInfo](/type/help.UserInfo/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>USER_INVALID</td><td>Указан недействительный пользователь.</td></tr></tbody></table>
