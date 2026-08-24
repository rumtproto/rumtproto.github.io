---
title: "help.UserInfo"
original: "https://core.telegram.org/type/help.UserInfo"
section: ref
kind: type
description: "Информация о пользователе"
layout: layout.njk
---

# Help.UserInfo

Информация о пользователе

```
help.userInfoEmpty#f3ae2eed = help.UserInfo;
help.userInfo#1eb3758 message:string entities:Vector<MessageEntity> author:string date:int = help.UserInfo;

---functions---

help.getUserInfo#38a08d3 user_id:InputUser = help.UserInfo;
help.editUserInfo#66b91b70 user_id:InputUser message:string entities:Vector<MessageEntity> = help.UserInfo;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/help.userInfoEmpty">help.userInfoEmpty</a></td><td>Для внутреннего использования</td></tr><tr><td><a href="/constructor/help.userInfo">help.userInfo</a></td><td>Для внутреннего использования</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/help.getUserInfo">help.getUserInfo</a></td><td>Может использоваться только участниками TSF для получения внутренней информации.</td></tr><tr><td><a href="/method/help.editUserInfo">help.editUserInfo</a></td><td>Для внутреннего использования</td></tr></tbody></table>
