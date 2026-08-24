---
title: "contacts.ContactBirthdays"
original: "https://core.telegram.org/type/contacts.ContactBirthdays"
section: ref
kind: type
description: "Сведения о днях рождения наших контактов."
layout: layout.njk
---

# contacts.ContactBirthdays

Сведения о днях рождения наших контактов.

```
contacts.contactBirthdays#114ff30d contacts:Vector<ContactBirthday> users:Vector<User> = contacts.ContactBirthdays;

---functions---

contacts.getBirthdays#daeda864 = contacts.ContactBirthdays;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.contactBirthdays">contacts.contactBirthdays</a></td><td>Сведения о днях рождения наших контактов.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/contacts.getBirthdays">contacts.getBirthdays</a></td><td>Получить всех пользователей, у которых день рождения приходится на промежуток ±1 день относительно текущего дня. Клиентам следует вызывать этот метод каждые 6–8 часов, и если результат непустой, использовать его для соответствующего обновления локально сохранённых сведений о дне рождения в <a href="/constructor/user">user</a>.<code>birthday</code>.<br><br>Подробнее <a href="/api/profile#birthday">см. здесь »</a>.</td></tr></tbody></table>
