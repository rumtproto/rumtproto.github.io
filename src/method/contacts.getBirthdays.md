---
title: "contacts.getBirthdays"
original: "https://core.telegram.org/method/contacts.getBirthdays"
section: ref
kind: method
description: "Получить всех пользователей, у которых день рождения приходится на промежуток ±1 день относительно текущего дня. Клиентам следует вызывать этот метод каждые 6–8 часов, и если…"
layout: layout.njk
---

# contacts.getBirthdays

Получить всех пользователей, у которых день рождения приходится на промежуток ±1 день относительно текущего дня. Клиентам следует вызывать этот метод каждые 6–8 часов, и если результат непустой, использовать его для соответствующего обновления локально сохранённых сведений о дне рождения в [user](/constructor/user/).`birthday`.

Подробнее см. [здесь »](/api/profile/#birthday).

```
contacts.contactBirthdays#114ff30d contacts:Vector<ContactBirthday> users:Vector<User> = contacts.ContactBirthdays;
---functions---
contacts.getBirthdays#daeda864 = contacts.ContactBirthdays;
```

### Параметры

Этот конструктор не требует параметров.

### Результат

[contacts.ContactBirthdays](/type/contacts.ContactBirthdays/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [user](/constructor/user/)

Содержит сведения об определённом пользователе.

Если не указано иное, при обновлении [локальной базы пиров](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).

См. [здесь »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) реализацию логики, которую следует применять при обновлении [локальной базы пиров-пользователей](/api/peers/).

#### [Профили пользователей](/api/profile/)

Telegram предлагает множество вариантов настройки вашего профиля!
