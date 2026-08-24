---
title: "InputUser"
original: "https://core.telegram.org/type/InputUser"
section: ref
kind: type
description: "Определяет пользователя для дальнейшего взаимодействия."
layout: layout.njk
---

# InputUser

Определяет пользователя для дальнейшего взаимодействия.

```
inputUserEmpty#b98886cf = InputUser;
inputUserSelf#f7c1b13f = InputUser;
inputUser#f21158c6 user_id:long access_hash:long = InputUser;
inputUserFromMessage#1da448e2 peer:InputPeer msg_id:int user_id:long = InputUser;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputUserEmpty">inputUserEmpty</a></td><td>Пустой конструктор, пользователь не задан.</td></tr><tr><td><a href="/constructor/inputUserSelf">inputUserSelf</a></td><td>Определяет текущего пользователя.</td></tr><tr><td><a href="/constructor/inputUser">inputUser</a></td><td>Определяет пользователя для дальнейшего взаимодействия.</td></tr><tr><td><a href="/constructor/inputUserFromMessage">inputUserFromMessage</a></td><td>Определяет <a href="/api/min">min</a>-пользователя, который встретился в определённом сообщении определённого чата.</td></tr></tbody></table>
