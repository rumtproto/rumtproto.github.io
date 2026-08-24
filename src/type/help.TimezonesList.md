---
title: "help.TimezonesList"
original: "https://core.telegram.org/type/help.TimezonesList"
section: ref
kind: type
description: "Сведения о часовых поясах, которые могут использоваться в других частях API — например, для указания часов работы Telegram Business »."
layout: layout.njk
---

# help.TimezonesList

Сведения о часовых поясах, которые могут использоваться в других частях API — например, для указания [часов работы Telegram Business »](/api/business/#opening-hours).

```
help.timezonesListNotModified#970708cc = help.TimezonesList;
help.timezonesList#7b74ed71 timezones:Vector<Timezone> hash:int = help.TimezonesList;

---functions---

help.getTimezonesList#49b30240 hash:int = help.TimezonesList;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/help.timezonesListNotModified">help.timezonesListNotModified</a></td><td>Список часовых поясов не изменился.</td></tr><tr><td><a href="/constructor/help.timezonesList">help.timezonesList</a></td><td>Сведения о часовых поясах, которые могут использоваться в других частях API — например, для указания <a href="/api/business#opening-hours">часов работы Telegram Business »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/help.getTimezonesList">help.getTimezonesList</a></td><td>Возвращает сведения о часовых поясах, которые могут использоваться в других частях API — например, для указания <a href="/api/business#opening-hours">часов работы Telegram Business »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
