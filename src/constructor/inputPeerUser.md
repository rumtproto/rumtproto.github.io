---
title: "inputPeerUser"
original: "https://core.telegram.org/constructor/inputPeerUser"
section: ref
kind: constructor
description: "Определяет пользователя для дальнейшего взаимодействия."
layout: layout.njk
---

# inputPeerUser

Определяет пользователя для дальнейшего взаимодействия.

```
inputPeerUser#dde8a54c user_id:long access_hash:long = InputPeer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Значение <strong>access_hash</strong> из конструктора <a href="/constructor/user">user</a></td></tr></tbody></table>

### Тип

[InputPeer](/type/InputPeer/)

### Связанные страницы

#### [user](/constructor/user/)

Содержит сведения об определённом пользователе.

Если не указано иное, при обновлении [локальной базы пиров](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).

См. [здесь »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) реализацию логики, которую следует применять при обновлении [локальной базы пиров-пользователей](/api/peers/).
