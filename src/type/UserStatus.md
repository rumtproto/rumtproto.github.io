---
title: "UserStatus"
original: "https://core.telegram.org/type/UserStatus"
section: ref
kind: type
description: "Статус пользователя в сети"
layout: layout.njk
---

# UserStatus

Статус пользователя в сети

```
userStatusEmpty#9d05049 = UserStatus;
userStatusOnline#edb93949 expires:int = UserStatus;
userStatusOffline#8c703f was_online:int = UserStatus;
userStatusRecently#7b197dc8 flags:# by_me:flags.0?true = UserStatus;
userStatusLastWeek#541a1d1a flags:# by_me:flags.0?true = UserStatus;
userStatusLastMonth#65899777 flags:# by_me:flags.0?true = UserStatus;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/userStatusEmpty">userStatusEmpty</a></td><td>Статус пользователя ещё не установлен.</td></tr><tr><td><a href="/constructor/userStatusOnline">userStatusOnline</a></td><td>Статус пользователя в сети.</td></tr><tr><td><a href="/constructor/userStatusOffline">userStatusOffline</a></td><td>Статус пользователя «не в сети».</td></tr><tr><td><a href="/constructor/userStatusRecently">userStatusRecently</a></td><td>Статус в сети: недавно был в сети</td></tr><tr><td><a href="/constructor/userStatusLastWeek">userStatusLastWeek</a></td><td>Статус в сети: последний раз в сети на прошлой неделе</td></tr><tr><td><a href="/constructor/userStatusLastMonth">userStatusLastMonth</a></td><td>Статус в сети: последний раз в сети в прошлом месяце</td></tr></tbody></table>
